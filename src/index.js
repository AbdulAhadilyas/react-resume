import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <>
 <div className="contanire">
        <div className="left">
            <div className="name">
                <div className="img">
                    <img src="https://raw.githubusercontent.com/AbdulAhadilyas/RESUME2/main/ahad.jpgnetlify login" alt=""/>
                </div>
                <h2>ABDUL AHAD <br/>WEB DEVELOPER</h2>
            </div>
            <div className="contact">
                <ul>
                    <li>Email:ahadmemon3340@gmail.com</li>
                    <li>Number:03223883480</li>
                    <li>Github:ahadilyas</li>
                </ul>
            </div>
            <div className="descriptipon">
                <h2>Description:</h2>
                <p>Writing efficient code
                    Creating websites/a website using standard HTML/CSS practices
                    Working closely with web designers and programmers to produce the website
                    Constant communication with other colleagues in the business to develop and deploy their content – and ensuring there is a clear establishment of what can be created within what timeframe
                    Researching different software programs, maintaining software documentation
                    Implementing contingency plans in case the website goes down
                    Maintaining and expanding/enhancing the website once built
                    Managing a team might also be part of the job role.</p>
            </div>
        </div>
        <div className="right">
            <div className="myservice">
                <h2 className="lo">My Skills:</h2>
                <ul>
                    <li>Html5.</li>
                    <li>Css.</li>
                    <li>Java Script.</li>
                    <li>Python.</li>
                    <li>Operating systems.</li>

                </ul>
            </div>
            <div className="MyEducation">
                <h2 className="lo2">My Education:</h2>
                <ul>
                    <li>Matriculation:From Board Of Secondary BSEK.</li>
                    <li>Intermediate:Continue.</li>
                </ul>
            </div>
            <div className="exp">
                <h2>My Experience</h2>
                <ul>
                    <li>1 Year Experience OF WebDeveloping In Shopify,Amazon & WordPress.</li>
                    <li>6 Months Experience In Social Media Marketing In Facebook,Instagram & Youtube.</li>
                </ul>
            </div>
            <div className="strength">
                <h2>My Strength:</h2>
                <ul>
                    <li>Hard Working & Ability To Work Under Pressure.</li>
                    <li>Responsible & Punctual.</li>
                    <li>Good Communication</li>
                </ul>
            </div>
            <div className="reference">
                <h2>Reference:</h2>
                <ul>
                    <li>Will Be Furnished Upon Request:</li>
                </ul>
            </div>
        </div>
    </div>
 </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
