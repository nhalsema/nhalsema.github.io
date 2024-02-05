import React, { useState } from 'react';
import './Nav.scss';
import Card from '../Card.jsx';
import Data from '../Data.jsx';

function Nav(props) {
    const [active, setActive] = useState("FirstCard");
    return (
        <div>
            <nav>
                <div>
                    <button className="btn" onClick={() => setActive("Home")}>Home</button><br />
                    <button className="btn" onClick={() => setActive("About")}>About</button><br />
                    <button className="btn" onClick={() => setActive("Hiring")}>Hiring</button><br />
                    <button className="btn" onClick={() => setActive("Social")}>Social</button><br />
                    <button className="btn" onClick={() => setActive("Contact")}>Contact</button>
                </div>
            </nav>
            <div className='bio'>
                {active === "Home" && <Card data={Data} cardIndex={0} />}
                {active === "About" && <Card data={Data} cardIndex={1} />}
                {active === "Hiring" && <Card data={Data} cardIndex={2} />}
                {active === "Social" && <Card data={Data} cardIndex={3} />}
                {active === "Contact" && <Card data={Data} cardIndex={4} />}
            </div>
        </div>
    );
};

export default Nav;
