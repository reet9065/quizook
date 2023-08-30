import React from 'react'
import { useState } from 'react'
import "./Searchbar.css"
import searchicon from "../../assets/fi-bs-zoom-out.png"
import clearinput from "../../assets/fi-br-cross.png"

function Searchbar({onselectfilter}) {

    const [searchinput ,setSearchinput] = useState("")

    function clearinputfield(){
        setSearchinput('')
    }

  return (
    <div className="searchbar">
        <div className="searchbarSearchicon">
            <img src={searchicon} alt="searchIcon" />
        </div>
        <div className="searchbarSearchinput">
            <input type="text" name="search" value={searchinput} placeholder='Search' onChange={(e)=> {setSearchinput(e.target.value)
            onselectfilter(e.target.value, e.target.name)}}/>
        </div>
        <div className="searchbarclearicon">
            {searchinput !== "" && <img src={clearinput} alt="clear" onClick={clearinputfield} />}
        </div>
    </div>
  )
}

export default Searchbar;
