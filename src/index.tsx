import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import reportWebVitals from './reportWebVitals';
import Navigation from "./components/Navigation";
import HerbsByName from "./components/HerbsByName";
import HerbName from "./components/HerbName";
import HerbsBySymptom from "./components/HerbsBySymptom";
import Workshops from "./components/Workshops";

ReactDOM.render(
    <Router>
        <Navigation/>
        <Routes>
            <Route path="/" element={<HerbsByName/>}/>
            <Route path="/herb/:id" element={<HerbName/>}/>
            <Route path="/symptom" element={<HerbsBySymptom/>}/>
            <Route path="/workshop" element={<Workshops/>}/>
        </Routes>
    </Router>,

    document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
