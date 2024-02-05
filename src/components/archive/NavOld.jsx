import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './Nav.scss';
// import Home from './views/Home.jsx'
// import Bio from './views/Bio.jsx'
// import toggleVisibility from './views/Bio.jsx'
// import Hiring from './views/Hiring.jsx'
// import Socials from './views/Socials.jsx'
// import Contact from './views/Contact.jsx'
// import NotFound from './views/NotFound.jsx'

function Nav() {
    return (
        <Router>
            <div>
                <nav>
                    <Link to="/"><button className='button'>home</button></Link><br />
                    <button className='button' onClick={Bio}>about nicolette</button><br />
                    <Link to="/bio"><button className='button'>about nicolette</button></Link><br />
                    <Link to="/hiring"><button className='button'>are you hiring?</button></Link><br />
                    <Link to="/socials"><button className='button'>socials</button></Link><br />
                    <Link to="/contact"><button className='button'>contact</button></Link>
                </nav>
                < Routes >
                    <Route exact path="/" component={Home} />
                    <Route path="/bio" component={Bio} />
                    <Route path="/contact" component={Hiring} />
                    <Route path="/socials" component={Socials} />
                    <Route path="/contact" component={Contact} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div >
        </Router >
    );
};

export default Nav;
