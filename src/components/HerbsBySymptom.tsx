import React, {useState} from 'react';
import {Language} from "../model";
import {Link, useLocation} from 'react-router-dom';
import ginkgo from '../components/static/ginkgo-pill.png'
import {allMedicalUses, getAllHerbs} from "../services/herbs";
import {deleteSpace} from "../services/utilities";
import Navigation from "./Navigation";


// Page where user can see what herbs are good for a certain issue.
function HerbsBySymptom() {
    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = (event: any) => {
        setSearchTerm(event.target.value);
    };

    const results = allMedicalUses.filter(medicalUse =>
        medicalUse.includes(searchTerm))

    const {hash} = useLocation();
    let activeClassName: string;

    const symptomsCard: any[] = [];
    results.map((use) => {
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
            <Navigation/>
            <div className="symptom-box animated bounceInLeft">
                <div>
                    <img src={ginkgo} alt="ginkgo"/>
                </div>
                <div className="symptom-box-search">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut
                        labore et dolore magna aliqua. Lectus vestibulum mattis ullamcorper velit sed ullamcorper.
                        In
                        nibh mauris cursus mattis. Amet est placerat in egestas erat. Tristique senectus et netus et
                        malesuada fames ac. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien.
                        Pellentesque elit uillamcorper dignissim cras tincidunt lobortis feugiat. At tempor commodo
                        ullamcorper a lacus vestibulum sed arcu non.
                    </p>
                    <div className="pos-relative">
                        <input
                            type="text"
                            className="searching-medicalUse effect-green"
                            placeholder="Search symptoms"
                            value={searchTerm}
                            onChange={handleChange}
                        />
                        <span className="focus-border"></span>
                    </div>
                </div>
            </div>

            <div className="space-around ">
                {symptomsCard}
            </div>

            <div className="credits">
                photo by <Link to="https://www.pexels.com/@matthardy/" target="_blank">MaTT Hardy</Link>
            </div>
        </div>
    )
}

export default HerbsBySymptom;



