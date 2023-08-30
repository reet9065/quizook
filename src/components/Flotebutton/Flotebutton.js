import React, { useEffect, useState } from 'react';
import "./Flotebutton.css";
import fulscreen from "../../assets/fulscreen.png"
import exitfulscreen from "../../assets/exitfullscreen.png"

function Flotebutton() {

    const[isfullscreen, setFullscreen] = useState(true)



    function fullscreenButton(){

        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else {
            document.documentElement.requestFullscreen();
        }
       setFullscreen(prev => !prev);
    }

  return (
    <>
    <div className="fullscreen-button">
        {isfullscreen ? <img src={fulscreen} alt="fullS" onClick={fullscreenButton} />  : 
        <img src={exitfulscreen} alt="exitFullS" onClick={fullscreenButton} />}
    </div>
    </>
  )
}

export default Flotebutton