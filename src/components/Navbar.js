import React, {useContext, useState} from 'react'
import {Link, useLocation, useNavigate} from 'react-router-dom';
import NoteContext from '../context/notes/NoteContext';


const Navbar = () => {

    const context = useContext(NoteContext);
    const {fetchUserData} = context;

    //redirect link to Home page
    let location = useLocation();
    let navigate = useNavigate();

    // remove login token and redirect login page
    const handleLogout = ()=>{
        localStorage.removeItem('token');
        navigate('/login');

    }

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
                    <li className="nav-item">
                        <Link className={`nav-link ${location.pathname === '/service' ? "Active" : ''}`} to="/service">Service</Link>
                    </li>

                </ul>
                    { !localStorage.getItem('token') ?
                        <> 
                            <Link className="btn btn-primary mx-2 btn-sm" to="/login" role="button">Login</Link>
                            <Link className="btn btn-primary btn-sm" to="/signup" role="button">Signup</Link> 
                        </> :
                        <>
                            <button className="btn btn-warning btn-sm me-3" onClick={fetchUserData}>Profile</button>
                            <button className="btn btn-primary btn-sm" onClick={handleLogout}>Logout</button>
                        </>
                    }
                </div>
            </div>
        </nav>
    )
}

export default Navbar