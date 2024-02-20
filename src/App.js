import React, { useState } from "react";
import './App.scss';
import './components/background/LavaLamp.css';
import LavaLamp from "./components/background/LavaLamp.jsx";
import Card from './components/Card.jsx';
import Data from './components/Data.jsx';
import svgLinkedin from './assets/svg-linkedin.svg';
import svgMail from './assets/svg-mail.svg';
import svgDoc from './assets/svg-doc.svg';
import svgGithub from './assets/svg-github.svg';
import svgCone from './assets/svg-trafficcone.svg';
// https://www.svgrepo.com/collection/meteor-solid-tiny-icons/

function App() {
  LavaLamp();
  const [active, setActive] = useState("Home");

  return (
    <div>
      <canvas id="canvas"></canvas>
      <div className="container">
        <div className="frame">
          <div className="name">
            Nicolette Halsema
            {/* <div className="minibio">
              software developer<br />
              tech evangelist<br />
              creative<br />
            </div> */}
          </div>
          <div className="nav">
            <nav>
              <button className="btn" onClick={() => setActive("Home")}>Home</button><br />
              <button className="btn" onClick={() => setActive("About")}>About</button><br />
              <button className="btn" onClick={() => setActive("Hiring")}>Are you hiring?</button><br />
              <button className="btn" onClick={() => setActive("Work")}>My Work</button><br />
              <button className="btn" onClick={() => setActive("Contact")}>Connect</button>
            </nav>
          </div>
          <div>
            {/* <div className={`card ${cardIndex==0 ? "home" : ""}`}> */}
            {active === "Home" && <Card data={Data} cardIndex={0} />}
            {active === "About" && <Card data={Data} cardIndex={1} />}
            {active === "Hiring" && <Card data={Data} cardIndex={2} />}
            {active === "Work" && <Card data={Data} cardIndex={3} />}
            {active === "Contact" && <Card data={Data} cardIndex={4} />}
            {active === "Readme" && <Card data={Data} cardIndex={5} />}
          </div>
          {/*  ✦✮✩☯︎❀✌︎︎⭒✺☺ */}
          {/*           
          <div className='footer_desktop'>
          <a
            className="btn" target="_blank" rel="noopener noreferrer"
            href='https://drive.google.com/file/d/1PhHwgd2HwZ336UPFQxW9FhdKduPxwP-y/view?usp=sharing'
            title="resume on Google Drive"
          >
            resume
          </a>
          <div className='btn'>✿</div>
          <a
            className="btn" target="_blank" rel="noopener noreferrer"
            href='https://www.linkedin.com/in/nhalsema/'
            title="linkedin.com/in/nhalsema"
          >
            linkedin
          </a>
          <div className='btn'>✿</div>
          <a
            className="btn" target="_blank" rel="noopener noreferrer"
            href='https://github.com/nhalsema'
            title="github.com/nhalsema"
          >
            github
          </a>
          <div className='btn'>✿</div>
          <a
            className="btn" target="_blank" rel="noopener noreferrer"
            href='mailto:nbhalsema@gmail.com'
            title="email: nbhalsema@gmail.com"
          >
            email
          </a>
        </div> 
          */}

          <div className='footer'>
            <a
              className="footer__img" target="_blank" rel="noopener noreferrer"
              href='https://www.linkedin.com/in/nhalsema/'
              title="linkedin.com/in/nhalsema"
            >
              <img src={svgLinkedin} className="icon" alt="linkedin logo linkto" />
            </a>
            <a
              className="footer__img" target="_blank" rel="noopener noreferrer"
              href='https://github.com/nhalsema'
              title="github.com/nhalsema"
            >
              <img src={svgGithub} className="icon_extra" alt="github logo linkto" />
            </a>
            <a
              className="footer__img" target="_blank" rel="noopener noreferrer"
              href='https://drive.google.com/file/d/1PhHwgd2HwZ336UPFQxW9FhdKduPxwP-y/view?usp=sharing'
              title="resume on Google Drive"
            >
              <img src={svgDoc} className="icon" alt="doc icon linkto resume" />
            </a>
            <a
              className="footer__img" target="_blank" rel="noopener noreferrer"
              href='mailto:nbhalsema@gmail.com'
              title="email: nbhalsema@gmail.com"
            >
              <img src={svgMail} className="icon" alt="mail icon linkto email" />
            </a>
            <img src={svgCone} className="icon" alt="readme" onClick={() => setActive("Contact")} />
          </div>
        </div>
      </div>
      {/* <div className="footer-verticle">
          created Jan 2024 - last updated Jan 2024
        </div> */}
      <div className="footer-horizontal">
        {/* created Jan 2024 - last updated Jan 2024 */}
        {/* dark light disco */}
      </div>
    </div >
  );
}

export default App;
