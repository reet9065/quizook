import React from 'react'
import "./Answerbtn.css"
function Reviw({ansobj, ansinde}) {
  return (
    <>
       <div className="answeroptions">
            <button className="green"
            disabled={true}
            >{ansobj[ansinde.ci].text}</button>
        </div>
        <div className="answeroptions">
            <button className="red"
            disabled={true}
            >{ansobj[ansinde.wi].text}</button>
        </div>
      </>
  )
}

export default Reviw