import React from 'react'
import "./NextButton.css"
function NextButton({statuse,buttonfunction}) {
  return (
    <div className="ButtonNext"  style={{opacity: statuse.disable ? 0.5:1}}>
        <button 
        className='nextbtn' 
        disabled={statuse.disable} 
        onClick={buttonfunction}
        style={{cursor:"pointer"}}
        >{statuse.text}
        </button>
    </div>
  )
}

export default NextButton