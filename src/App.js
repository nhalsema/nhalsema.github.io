import React, { useState } from "react";
import './App.scss';
import './components/background/LavaLamp.css';
import LavaLamp from "./components/background/LavaLamp.jsx";
import Card from './components/Card.jsx';
import Data from './components/Data.jsx';

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
              <button className="btn" onClick={() => setActive("Work")}>Work</button><br />
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
          </div>
          <div className='footer'>
            {/*  ✦✮✩☯︎❀✌︎︎⭒✺☺ */}
            <a
              className="btn"
              href='https://drive.google.com/file/d/1PhHwgd2HwZ336UPFQxW9FhdKduPxwP-y/view?usp=sharing'
              title="resume on Google Drive"
              target="_blank"
              rel="noopener noreferrer"
            >
              resume
            </a>
            <div className='btn'>✿</div>
            <a
              className="btn"
              href='https://www.linkedin.com/in/nhalsema/'
              title="linkedin.com/in/nhalsema"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin
            </a>
            <div className='btn'>✿</div>
            <a
              className="btn"
              href='https://github.com/nhalsema'
              title="github.com/nhalsema"
              target="_blank"
              rel="noopener noreferrer"
            >
              github
            </a>
            <div className='btn'>✿</div>
            <a
              className="btn"
              href='mailto:nbhalsema@gmail.com'
              title="email: nbhalsema@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              email
            </a>
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
    </div>
  );
}

export default App;
