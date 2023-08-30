import React from 'react'
import "./Homequizcardcomp.css";
import QuizCard from '../QuizCard/QuizCard';
import { Link } from 'react-router-dom';

function Homequizcardcomp({data}) {
  return (

    <div className="mainContainer">
      {data.map((d, i)=>(
        <Link style={{ 
          width:"100%",
          display:"flex",
          alignItems:"center",
          justifyContent:"center",
          textDecoration:"none"
        }} to={`/${d.QuizID}`} key={i}><QuizCard cdata = {d}/></Link>
    ))}  
    </div>
  )
}

export default Homequizcardcomp