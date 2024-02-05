import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './Nav.scss';
// import { Button } from 'react-bootstrap';

function Nav() {
    return (
        <Router>
            <div>
                <nav>
                    <Link to="/"><button className='button'>home</button></Link><br />
                    <Link to="/bio"><button className='button'>bio</button></Link><br />
                    <Link to="/contact"><button className='button'>contact</button></Link><br />
                </nav>
                < Routes >
                    <Route exact path="/" component={Home} />
                    <Route path="/bio" component={Bio} />
                    <Route path="/contact" component={Contact} />\
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div >
        </Router >
    );
};

function Home() {
    return <h1>Home Page</h1>;
};

function Bio() {
    return <h1>Bio Page</h1>;
};

function Contact() {
    return <h1>Contact Page</h1>;
};

function NotFound() {
    return (
        <div>
            <h1>Page Not Found</h1>
            <Link to="/">Go back to Home Page</Link>
        </div>
    );
};

export default Nav;
