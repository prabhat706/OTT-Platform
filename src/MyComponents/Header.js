import React from 'react'
import {
    Link
} from "react-router-dom";
function Header() {
    return (
        <>
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03"
                            aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">HOME</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/About">ABOUT</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/">TOP RATED MOVIES</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/">FEEDBACK</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/">CONTACT US</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Header
