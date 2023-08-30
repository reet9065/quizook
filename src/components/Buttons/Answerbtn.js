import React, { useEffect, useState } from 'react'
import "./Answerbtn.css"
import { json } from 'react-router-dom';

function Answerbtn({answers , updatestate}) {

  const localobjname = "OnrtQ"
  const locals =  JSON.parse(localStorage.getItem(localobjname))
  let thecorrectindex = answers.answers.indexOf(answers.answers.find((answer)=> answer.correct));
  

  const [buttonclicked , setButtonclicked] = useState(locals.bp);

  useEffect(()=>{
    if(locals.bp){
      updatestate()
    }
  },[buttonclicked]);


  function checkanswer(ind){
       if(thecorrectindex == ind){
        return true
       }
       return false
  }

  function setinlocal(obj){
    localStorage.setItem(localobjname, JSON.stringify(obj))
  }
  

  function ustate (i){
    let iscorrect = checkanswer(i);
    if(!iscorrect){
      let arr = locals.Ofra.push({
        qi: answers.questionindex,
        ci: thecorrectindex,
        wi:i
      })
      let incorrectansarray = {...locals, Ofra : arr}
      setinlocal(incorrectansarray);
    }
    let setobj = {...locals, bp : true, pbi: i}
    setinlocal(setobj)
    setButtonclicked(prevstate => {
      return !prevstate
    })
  }

  function btncolor(i) {
    if (locals.bp) {
      if(locals.pbi == i){
        return checkanswer(i) ? "green": "red"
      }
      return checkanswer(i) ? "green": "";
    }
    return "";
  }


  return (
      <>
      {answers.answers.map((answer, i)=>(
        <div className="answeroptions" key={i}>
            <button className={btncolor(i)}
            onClick={()=>{
              ustate(i)
            }} 
            disabled={locals.bp}
            >{answer.text}</button>
        </div>
      ))}
      
      </>
    
  )
}

export default Answerbtn;