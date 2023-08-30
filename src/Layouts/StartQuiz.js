import React, { useEffect, useState } from 'react'
import Quizstartpage from "../components/QuizStartpage/Quizstartpage"
import { useParams } from 'react-router-dom'
import Datas from "../Data/data"
function StartQuiz() {

  const {qid} = useParams();
  const startingQuiz = Datas.find((data)=>data.QuizID == qid)

  // function seting a object in local storage for runnig the quiz ;
   
  function cobj(){
    const createobject = {
      cdqIn: 0, // index no. of current displaying question
      Crql: qid, // quize id of selected Quiz
      bp:false, // answerbutton pressed or not;
      pbi:null,
      ra:0,   // Right answer counter
      rd:false, // Is the result diclear for this Quiz
      Ofra:[], // worng answer detail for reviewing the answer at last of the quz
      time:[] // array of each question time in second 
    }
    if(startingQuiz){
        localStorage.setItem("OnrtQ", JSON.stringify(createobject));
    }else{
      return;
    }
  }
  
  useEffect(()=>{
    cobj()
  },[])

  


  return (
    <>
     {startingQuiz?<Quizstartpage startingQuiz = {startingQuiz} /> : <h1 style={{color:"white"}}> No quiz found </h1>}
    </>
  )
}

export default StartQuiz