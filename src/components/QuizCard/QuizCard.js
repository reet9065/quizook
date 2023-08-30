import React, { useEffect } from 'react'
import testLogo from "../../assets/test.png"
import doneLogo from "../../assets/dubletick.png"
import "./QuizCard.css"

function QuizCard({cdata}) {
 
  function dornot(id){
    let darray = JSON.parse(localStorage.getItem('dQa')) || [];
    if(Array.isArray(darray)){
      let found = darray.find((elem)=> elem == id);
      return found ? true : false
    }
    return false;
  }

  function chossecolor(sub){
    switch (sub) {
      case 'Physics':
        return "blue"
      case 'Biology':
        return "green"
      case 'Chemistry':
        return 'red'
      default:
        return "gray"
    }
  }

  return (
    <div className="card">
        <div className="cardItemLogo">
            <img src={testLogo} alt="test Logo" />
        </div>
        <div className="cardItemdiscription">
            <h3 className="titel">{cdata.title}</h3>
            <p className="smalldiscrip">{cdata.Standard} , <span style={{color : chossecolor(cdata.Subject)}}>{cdata.Subject}</span> </p>
            <p className="smalldiscrip">Chapter :{cdata.Chapter}</p>
            <p className="smalldiscrip">{cdata.Quiz.length} Questions</p>

        </div>
        <div className="cardItemdone">
          {dornot(cdata.QuizID) && <img src={doneLogo} alt="Done" />}
            
        </div>
    </div>
  )
}

export default QuizCard