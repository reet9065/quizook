import React, { useEffect, useState } from 'react'
import { CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Circleprogressbar.css'

function Circleprogressbar({persentage}) {
 
 const [pany, setPany] = useState(0)

 useEffect(()=>{
  setTimeout(()=>{
    setPany(persentage)
  },1000)
 }, [])
  return (
    <div className='prog'>
      <CircularProgressbar
        value={pany}
        text={`${pany}%`}
        circleRatio={0.7}
        styles={{
          trail: {
            strokeLinecap:"butt",
            transform: "rotate(-126deg)",
            transformOrigin:"center center"
          },
          path :{
            strokeLinecap:"butt",
            transform: "rotate(-126deg)",
            transformOrigin:"center center",
            stroke: "rgba(17,142,255,1)"
          },
          text: {
            fill: "#ddd"
          }
        }}
        strokeWidth={15}
      />;
    </div>
  )
}

export default Circleprogressbar