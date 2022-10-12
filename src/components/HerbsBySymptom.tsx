import React, {useEffect} from 'react';
import '../style/style.css';
import {Language} from "../model";
import {Link, useLocation} from 'react-router-dom';

import {allMedicalUses, getAllHerbs} from "../services/herbs";
import {deleteSpace} from "../services/utilities";


// Page where user can see what herbs are good for a certain issue.
function HerbsBySymptom() {
    const {hash} = useLocation();
    let activeClassName: string;

    // selecting a chosen element to be able to move it in front of others
    useEffect(() => {
        const selectedId: any = document.getElementById(hash);
        console.log(selectedId);
        /*
        "adding a chosen div to the beginning of the list"
        chosenSymptom.push(selectedId);
        console.log(chosenSymptom)
        */
    }, [])

    const symptomsCard: any[] = [];
    allMedicalUses.map((use) => {
        let herbsWithSymptom = getAllHerbs().filter(herb => (herb.medicalUses).includes(use))

        if ('#' + deleteSpace(use) === hash) {
            activeClassName = 'card m-2 symptom-card text-center activated';
        } else {
            activeClassName = 'card m-2 symptom-card text-center'
        }

        symptomsCard.push(
            <div id={'#' + deleteSpace(use)}>
                <div className={"symptom-card" + activeClassName}>
                    <div>
                        <h5>{use}</h5>
                    </div>
                    <div>
                        {herbsWithSymptom.map((i) => (
                                <Link to={"/herb/" + i.id}>
                                    <p>{i.names[Language.english]}</p>
                                </Link>
                            )
                        )}
                    </div>
                </div>
            </div>
        )
    })

    return (<div>
            <div className="center-element high-div">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut
                    labore et dolore magna aliqua. Lectus vestibulum mattis ullamcorper velit sed ullamcorper.
                    In
                    nibh mauris cursus mattis. Amet est placerat in egestas erat. Tristique senectus et netus et
                    malesuada fames ac. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien.
                    Pellentesque elit uillamcorper dignissim cras tincidunt lobortis feugiat. At tempor commodo
                    ullamcorper a lacus vestibulum sed arcu non.</p>
            </div>
            <div className="space-around ">
                {symptomsCard}
            </div>
        </div>
    )
}

export default HerbsBySymptom;



