import React from 'react';
import '../style/style.css';
import {Link} from "react-router-dom";

function Navigation() {
    return (<header className="navigation">
            <div>
                <Link to="/">Herbs by name</Link>
                <Link to="/symptom">Herbs by symptom</Link>
            </div>
            <div>
                ICELANDIC HERBS
            </div>
            <div>
                <Link to="/contact">Contact</Link>
                <Link to="/workshop">Workshops</Link>
                <Link to="/articles">Articles</Link>
            </div>
        </header>
    )
}

export default Navigation;


