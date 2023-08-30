import React, { useEffect, useState } from 'react'
import NextButton from '../Buttons/NextButton'
import Answerbtn from '../Buttons/Answerbtn'
import { Link, useParams } from 'react-router-dom'
import Datas from "../../Data/data";
import "./Quiz.css"
import { useNavigate } from 'react-router-dom'

function Quiz() {


    /// veryfing the url for is quiz id is corret or not along with redirecting the user based on url 

    const { qid } = useParams();
    const startingQuiz = Datas.find((data) => data.QuizID == qid)

    const navigate = useNavigate()

    function getLocalstorage(pram) {
        let item = JSON.parse(localStorage.getItem(pram))
        if (item) {
            if (!item.rd) {
                if (item.Crql !== qid) {
                    navigate(`/${qid}`)
                    return
                }
                return item;
            }

            navigate(`/${qid}`)

        } else {
            navigate(`/${qid}`)
        }
    }

    // check result dicliriation 

    useEffect(() => {
       getLocalstorage('OnrtQ')
    }, [])


    ///// geting the local storage and question index 

    const index = JSON.parse(localStorage.getItem('OnrtQ'))

    const islastquestion = startingQuiz.Quiz.length == index.cdqIn * 1 + 1 ? true : false
    const [questionindex, setQuestionindex] = useState(index.cdqIn * 1)
    const [nextbtn, setNextbtn] = useState(index.bp)

    useEffect(() => {
        let getitemloc = JSON.parse(localStorage.getItem('OnrtQ'))
        let setqi = { ...getitemloc, cdqIn: questionindex, bp: false, pbi: null }
        localStorage.setItem("OnrtQ", JSON.stringify(setqi));
        setNextbtn(true)

    }, [questionindex])


    let timeoutid;
    useEffect(() => {
        if (index.bp) {
            timeoutid = setTimeout(() => {
                resetbtn()
                if(islastquestion){
                    navigate(`/start/${index.Crql}/result`)
                }else{
                    setQuestionindex(preState => {
                        return preState + 1;
                    })
                }
            }, 2000)
        }
    }, [nextbtn])

    /// reseting the btns
    function resetbtn() {
        let getitemloc = JSON.parse(localStorage.getItem('OnrtQ'))
        if(islastquestion){
            let resetbtn = { ...getitemloc, cdqIn: questionindex, bp: false, pbi: null, rd: true }
            localStorage.setItem("OnrtQ", JSON.stringify(resetbtn)); 
            return
        }
        let resetbtn = { ...getitemloc, cdqIn: questionindex, bp: false, pbi: null }
        localStorage.setItem("OnrtQ", JSON.stringify(resetbtn));
    }
    // Showing the next btn 

    function updatestate() {
        setNextbtn(false)
    }

    // updating the the question index as well as questionindex state in instant

    function nextaction() {
        clearTimeout(timeoutid);
        resetbtn()
        if(islastquestion){
            navigate(`/start/${index.Crql}/result`)
        }else{
            setQuestionindex(preState => {
                return preState + 1;
            })
        }
    }



    return (
        <div className="Quizcontainer">
            <div className="exitebuttonsection">
                <div className="exit">
                    <Link to={`/`}>-: exit </Link>
                </div>
                <div className="topbtn">
                    <p>{questionindex * 1 + 1}/{startingQuiz.Quiz.length}</p>
                </div>
            </div>
            <div className="question">
                <h1>{startingQuiz.Quiz[questionindex].question}</h1>
            </div>
            <Answerbtn answers={{ questionindex: questionindex, answers: startingQuiz.Quiz[questionindex].answers }} updatestate={updatestate} />

            <NextButton statuse={{ text: !islastquestion ? "Next Question" : "Show result", disable: nextbtn }} buttonfunction={nextaction} />
        </div>
    )
}

export default Quiz