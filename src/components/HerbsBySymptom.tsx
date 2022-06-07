import React from 'react';
import '../style/style.css';
import {Language} from "../model";
import {Link} from 'react-router-dom';


import {herbsDB} from "../services/herbs";
import {allMedicalUsesList} from "../services/herbs";
import {deleteSpace} from "../services/utilities";


function HerbsBySymptom() {
    const symptomsCard: any[] = [];

    for (let use of allMedicalUsesList) {
        let herbsWithSymptom = herbsDB.filter(herb => (herb.medicalUses).includes(use))

        symptomsCard.push(
            <div className="card symptom-card" >
                <div className="card-header symptom-header" id={deleteSpace(use)}>
                    <h5>{use}</h5>
                </div>
                <ul className="list-group list-group-flush ">
                    {herbsWithSymptom.map((i) => (
                            <Link to={"/herb/" + i.id}>
                                <li className="list-group-item">{i.names[Language.english]}</li>
                            </Link>
                        )
                    )}
                </ul>
            </div>
        )
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
            <div className="wider-grid">
                <div className="row">
                    {symptomsCard}
                </div>
            </div>
        </div>
    )
}export default HerbsBySymptom;



