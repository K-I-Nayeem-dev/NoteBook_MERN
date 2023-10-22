import React from 'react'
import {Link, useLocation} from 'react-router-dom';


const Navbar = () => {

    let location = useLocation();
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">iNoteBook</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className={`nav-link ${location.pathname === '/' ? "Active" : ''}`} aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link ${location.pathname === '/about' ? "Active" : ''}`} to="/about">About</Link>
                    </li>
                    
                    <li className="nav-item">
                        <Link className={`nav-link ${location.pathname === '/blog' ? "Active" : ''}`} to="/blog">Blog</Link>
                    </li>

                </ul>
                    <Link className="btn btn-primary mx-2 btn-sm" to="/login" role="button">Login</Link>
                    <Link className="btn btn-primary btn-sm" to="/signup" role="button">Signup</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar