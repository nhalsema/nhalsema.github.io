import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Nav = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/bio">Bio</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>


                <Routes>
                    <Route exact path="/" component={Home} />
                    <Route path="/bio" component={Bio} />
                    <Route path="/contact" component={Contact} />
                </Routes>
            </div>
        </Router>
    );
};

const Home = () => {
    return <h1>Home Page</h1>;
};

const Bio = () => {
    return <h1>Bio Page</h1>;
};

const Contact = () => {
    return <h1>Contact Page</h1>;
};

export default Nav;
