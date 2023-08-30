import React from 'react'
import "./Filter.css"
import Datas from "../../Data/data"
import { useState } from 'react'

function Filter({ onselectfilter, subjectoptions, classoption }) {

  return (
    <div className="filter">
      <select name="class"  onChange={(e) => onselectfilter(e.target.value, e.target.name)}>
        <option value="All">All class</option>
        {classoption.map((option, i) => (

          <option key={i} value={option}>{option}</option>

        ))}
      </select>
      <select name="subject"  onChange={(e) => onselectfilter(e.target.value, e.target.name)}>
        <option value="All">All subject</option>
        {subjectoptions.map((option, i) => (

          <option key={i} value={option}>{option}</option>

        ))}
      </select>
    </div>
  )
}

export default Filter