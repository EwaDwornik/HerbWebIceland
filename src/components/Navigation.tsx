import React from 'react';
import {Link} from "react-router-dom";

function Navigation() {
    return (<header className="navigation">
            <span className="arrow"></span>
            <div className="navigation-links">
                <Link to="/">Herbs by name</Link>
                <Link to="/symptom">Herbs by symptom</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/workshop">Workshops</Link>
                <Link to="/articles">Articles</Link>
            </div>
        </header>
    )
}

export default Navigation;


