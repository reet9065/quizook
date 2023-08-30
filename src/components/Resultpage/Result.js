import "./Result.css"
import Circleprogressbar from './Circleprogressbar'
import Datas from "../../Data/data"
import NextButton from '../Buttons/NextButton'
import Reviw from '../Buttons/Reviw'
import { useNavigate } from 'react-router-dom'
import { useEffect } from "react"

function Result() {

    const navigate = useNavigate()
    // get the local storage 

    let ritems = JSON.parse(localStorage.getItem('OnrtQ'))
    

    useEffect(()=>{
        if(!ritems.rd){
            navigate(`/`)
            return;
        }
        let darray = JSON.parse(localStorage.getItem('dQa'));
        let found = darray.find((element) => element == ritems.Crql);
        if(found){
            return
          }else{
            darray.push(ritems.Crql)
            localStorage.setItem("dQa", JSON.stringify(darray));
          }
    },[])

    // feching Wrong Questions 
    const startingQuiz = Datas.find((data) => data.QuizID == ritems.Crql)


    const result = {
        avt: 20,
        persentage: Math.round(((startingQuiz.Quiz.length - ritems.Ofra.length)*100)/startingQuiz.Quiz.length),
        ca: startingQuiz.Quiz.length - ritems.Ofra.length,
        wa: ritems.Ofra.length
    }

    function retry(){
        navigate(`/${ritems.Crql}`)
    }
    function home(){
       navigate(`/`)
    }

    return (
        <div className="resultcontainer">
            <div className="circelprogra">
                <Circleprogressbar persentage = {result.persentage} />
            </div>
            <div className="scordiscp">
                {/* <p>{result.avt}s</p> */}
                <p>Correct answer: {result.ca}</p>
                <p style={{ color: 'red' }}>wrong answer: {result.wa}</p>
            </div>
            <div className="scrollthroreviws">
                <h3 style={{color : "blue", opacity: "0.5 "}}>Scroll Down to review the answer</h3>
            </div>
            <div className="RHbtns">
                <div className="btns">
                <NextButton statuse={{ text:"Retry", disable: false }} buttonfunction={retry} />
                </div>
                <div className="btns">
                <NextButton statuse={{ text:"Home", disable: false }} buttonfunction={home} />
                </div>
            </div>
            {ritems.Ofra.map((item , i)=>(
            <div className="reviws"  id='rev' key={i}>
                <div className="question" style={{textAlign:"center"}}>
                    <h1>Q:- {startingQuiz.Quiz[item.qi].question}</h1>
                </div>
                <Reviw ansinde = {item}  ansobj={startingQuiz.Quiz[item.qi].answers}/>
            </div>
            ))}

        </div>
    )
}

export default Result