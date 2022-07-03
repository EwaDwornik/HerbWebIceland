import React, {useEffect} from 'react';
import '../style/style.css';
import {Language} from "../model";
import {NavLink, useLocation} from 'react-router-dom';

import {allMedicalUses, getAllHerbs} from "../services/herbs";
import {deleteSpace} from "../services/utilities";

function HerbsBySymptom() {
    const symptomsCard: any[] = [];
    const {hash} = useLocation();
    let activeClassName: string;
   // const chosenSymptom: any[] = [];

    useEffect(() => {
        const selectedId: any = document.getElementById(hash);
        console.log(selectedId);
      //  chosenSymptom.push(selectedId);
      //  console.log(chosenSymptom)

    }, [])

    allMedicalUses.forEach((use) => {
        let herbsWithSymptom = getAllHerbs().filter(herb => (herb.medicalUses).includes(use))

        /*for (let i = 0; i < allMedicalUses.length; i++) {
            if ("#" + allMedicalUses[i] === hash) {
                allMedicalUses.splice(i, 1)
            }
        }*/

        if ('#' + deleteSpace(use) === hash) {
            activeClassName = 'card m-2 symptom-card text-center activated';
        } else {
            activeClassName = 'card m-2 symptom-card text-center'
        }

        symptomsCard.push(
            <div className={activeClassName} id={'#' + deleteSpace(use)}>
                <div className="card-header symptom-header">
                    <h5>{use}</h5>
                </div>
                <ul className="list-group list-group-flush ">
                    {herbsWithSymptom.map((i) => (
                            <NavLink to={"/herb/" + i.id}>
                                <li className="list-group-item border-0">{i.names[Language.english]}</li>
                            </NavLink>
                        )
                    )}
                </ul>
            </div>
        )
    })

    return (
        <div className="container mx-auto">
            <div className="col-6 col-md-3 sidenav">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut
                    labore et dolore magna aliqua. Lectus vestibulum mattis ullamcorper velit sed ullamcorper.
                    In
                    nibh mauris cursus mattis. Amet est placerat in egestas erat. Tristique senectus et netus et
                    malesuada fames ac. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien.
                    Pellentesque elit uillamcorper dignissim cras tincidunt lobortis feugiat. At tempor commodo
                    ullamcorper a lacus vestibulum sed arcu non.</p>
            </div>
            <div className="wider-grid">
                <div className="row symptom-cards">
                    {symptomsCard}
                </div>
            </div>
        </div>
    )
}

export default HerbsBySymptom;



