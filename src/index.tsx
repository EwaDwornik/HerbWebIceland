import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import reportWebVitals from './reportWebVitals';
import Navigation from "./components/Navigation";
import HerbsByName from "./components/HerbsByName";
import HerbName from "./components/HerbName";
import HerbsBySymptom from "./components/HerbsBySymptom";
import Workshops from "./components/Workshops";
import Contact from "./components/Contact";
import Articles from "./components/Articles";

ReactDOM.render(
    <Router>
        <Navigation/>
        <Routes>
            <Route path="/" element={<HerbsByName/>}/>
            <Route path="/herb/:id" element={<HerbName/>}/>
            <Route path="/symptom" element={<HerbsBySymptom/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/articles" element={<Articles/>}/>
            <Route path="/workshop" element={<Workshops/>}/>
        </Routes>
    </Router>,

    document.getElementById("root"),
);

reportWebVitals();
