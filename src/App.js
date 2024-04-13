import React, { useState } from "react";
import './components/background/LavaLamp.css';
import './App.scss';
import LavaLamp from "./components/background/LavaLamp.jsx";
import Card from './components/Card.jsx';
import Data from './components/Data.jsx';
import svgLinkedin from './assets/svg-linkedin.svg';
import svgMail from './assets/svg-mail.svg';
import svgDoc from './assets/svg-doc.svg';
import svgGithub from './assets/svg-github.svg';
// import Toggle from "./components/Toggle.jsx";
// https://www.svgrepo.com/collection/meteor-solid-tiny-icons/

function App() {
  {/* disco background 1/2 */ }
  LavaLamp();
  const [active, setActive] = useState("Home");

  const [isToggled, setIsToggled] = useState(false);
  const handleToggle = () => { setIsToggled(!isToggled); };

  const Background = () => {
    if (!isToggled) {
      return "container";
    } else {
      return "basic";
    }
  }

  return (
    <div>
      {/* disco background part 2/2 */}
      <canvas id="canvas"></canvas>
      <div className={Background()}>
        <div className="frame">
          <div className="name">
            Nicolette Halsema
          </div>
          <div className="nav">
            <nav>
              <button className="btn" onClick={() => setActive("Home")}>Home</button><br />
              <button className="btn" onClick={() => setActive("About")}>About</button><br />
              <button className="btn" onClick={() => setActive("Hiring")}>Are you hiring?</button><br />
              <button className="btn" onClick={() => setActive("Work")}>Endeavors</button><br />
              <button className="btn" onClick={() => setActive("Contact")}>Connect</button>            
            </nav>
          </div>
          <div>
            {active === "Home" && <Card data={Data} cardIndex={0} />}
            {active === "About" && <Card data={Data} cardIndex={1} />}
            {active === "Hiring" && <Card data={Data} cardIndex={2} />}
            {active === "Work" && <Card data={Data} cardIndex={3} />}
            {active === "Contact" && <Card data={Data} cardIndex={4} />}
            {active === "Readme" && <Card data={Data} cardIndex={5} />}
          </div>
          {/*  ✦✮✩☯︎❀✌︎︎⭒✺☺ */}
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
              href='https://drive.google.com/file/d/17HbxMJR7gw_gk2_Lloz9xaXbDqDl6wBA/view?usp=sharing'
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
          </div>
          <div className="toggle" title="change background">
            {/* <Toggle /> */}
            <label className="switch" >
              <input type="checkbox" checked={isToggled} onChange={handleToggle} />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
      </div>
      <div className="credits">
        updated April 2024
      </div>
    </div >
  );
}

export default App;
