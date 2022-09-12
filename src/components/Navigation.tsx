import React from 'react';
import '../style/style.css';

function Navigation() {
    return (
            <nav className="navbar fixed-top navbar-expand-md navbar-light bg-light navbar-custom">
                <div className="navbar-collapse collapse w-100 order-md-0 dual-collapse2">
                    <ul className="navbar-nav mr-auto">

                        <li className="nav-item">
                            <a className="nav-link" href="/">Herbs by name</a>
                        </li>
                        <li className="nav-item d-flex">
                            <a className="nav-link" href="/symptom">Herbs by symptom</a>
                        </li>
                    </ul>
                </div>
                <div className="mx-auto order-0 navbar-middle">
                    <p className="navbar-brand mx-auto">ICELANDIC HERBS</p>
                </div>
                <div className="collapse navbar-collapse w-100 order-3" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/contact">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/articles">Articles</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/workshop">Workshops</a>
                        </li>
                    </ul>
                </div>
            </nav>
    )
}

export default Navigation;

