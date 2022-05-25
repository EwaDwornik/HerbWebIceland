import React from 'react';
import '../style/style.css';
import {Language} from "../model";

import {herbsDB} from "../services/herbs";
import {allMedicalUsesList} from "../services/herbs";

import {Link} from "react-router-dom";


function HerbsBySymptom() {
    const symptomsCard: any[] = [];

    for (let use of allMedicalUsesList) {
        let herbsWithSymptom = herbsDB.filter(herb => (herb.medicalUses).includes(use))
    }
        return (
        <div className="container">
            <div className="col-6 col-md-3 sidenav">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut
                    labore et dolore magna aliqua. Lectus vestibulum mattis ullamcorper velit sed ullamcorper.
                    In
                    nibh mauris cursus mattis. Amet est placerat in egestas erat. Tristique senectus et netus et
                    malesuada fames ac. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien.
                    Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. At tempor commodo
                    ullamcorper a lacus vestibulum sed arcu non.</p>
            </div>

        </div>
    );
}

export default HerbsBySymptom;


