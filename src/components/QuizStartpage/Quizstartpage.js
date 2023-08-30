import React from 'react'
import "./Quizstartpage.css"
import NextButton from '../Buttons/NextButton'
import { useNavigate } from 'react-router-dom'

function Quizstartpage({startingQuiz}) {

    const navigate = useNavigate()

    function navigatethepage(){
        navigate(`/start/${startingQuiz.QuizID}`)
    }

  return (
    <div className="mainContainer about">
        <div className="bref">
            <h1>Brief explanation about this quiz</h1>
            <h2>{startingQuiz.title} || {startingQuiz.Quiz.length} Question</h2>
            <ul>
                <li><span>Class: </span>{startingQuiz.Standard}</li>
                <li><span>Chapter: </span>{startingQuiz.Chapter}</li>
                <li><span>Subject: </span>{startingQuiz.Subject}</li>
                <li><span>Time: </span>There is no time limit but each question will note your time and in the last will show you the average time taken by you in each question</li>
                <li><span>Reviwe: </span>You will get to see all the wrong answers along with the correct answer at the bottom of the score board.</li>
            </ul>
        </div>

        <div className="notes">
            <h2>How to play</h2>
            <ul>
                <li>The question will be at the top, just below it there will be 4 options which will be related to the question.</li>
                <li>You just have to press that one option which you think is the correct answer.</li>
                <li>If the answer is correct then it will turn green otherwise it will turn red and the correct answer will automatically turn green.</li>
                <li>You can select only one option at a time, rest of the options will automatically close when you select the answer.</li>
            </ul>
        </div>
        <NextButton statuse = {{text:"Start Quiz",disable:0}} buttonfunction= {navigatethepage}/>
    </div>
  )
}

export default Quizstartpage