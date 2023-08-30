import React from 'react'
import aboutlogo from '../../assets/Ouizooklogo.png'
import "./About.css"

function About() {
    return (
        <div className="mainContainer about">
            <div className="aboutlogo">
                <img src={aboutlogo} alt="Logo" />
            </div>
            <div className="containerdiscription">
                <h1>Simple Quiz App</h1>
                <p>This is a simple quiz app where you can choose a category and subject, take a quiz, and review your answers and score.</p>
                <h2>Features:</h2>
                <ul>
                    <li>Choose a class category (e.g., 12th, 11th etc).</li>
                    <li>Select a subject within the chosen category (e.g., Physics, Math, Biology ).</li>
                    <li>Answer multiple-choice questions in the quiz.</li>
                    <li>View your score and correct answers</li>
                    <li>Mail your feedback </li>
                </ul>
                <h2>Design Considerations:</h2>
                <ul>
                    <li>User-friendly interface with clear navigation.</li>
                    <li>Engaging content with interesting and relevant quiz questions.</li>
                    <li>Responsive design for various screen sizes.</li>
                </ul>
                <h2>Links</h2>
                <ul>
                    {/* <li><a href="https://www.instagram.com/?__coig_restricted=1" target="_blank" rel="noopener noreferrer">Instagram</a></li> */}
                    {/* <li><a href="http://" target="_blank" rel="noopener noreferrer">Teligram</a></li> */}
                    {/* <li><a href="http://" target="_blank" rel="noopener noreferrer">Mail</a></li> */}
                    <li><a href="https://unrivaled-marigold-8492ab.netlify.app/" target="_blank" rel="noopener noreferrer">website</a></li>
                </ul>
            </div>
        </div>
    )
}

export default About