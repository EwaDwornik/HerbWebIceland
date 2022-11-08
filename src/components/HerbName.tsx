import React from "react";
import {Link, useParams} from "react-router-dom";
import {Language} from "../model";
import {deleteSpace} from "../services/utilities";
import {getAllHerbs} from "../services/herbs";
import Navigation from "./Navigation";

// Page about a herb, user can read about it, see where it grows abd when to use it.
const HerbName = () => {
    const {id} = useParams();
    const herb = getAllHerbs().find((h: { id: number }) => h.id === Number(id));
    const values = Object.values(Language);

    if (herb) {
        return (
            <div>
                <Navigation/>
                <div className="space-around">
                    {values.map((lang: Language) => (
                        <div key={herb.id}>{herb.names[lang]}</div>
                    ))}
                </div>
                <div id="herbID"></div>
                <div className="animated bounceInLeft">
                    <div className="herbSymptoms">
                        <div>
                            <p><h3>Medical uses:</h3></p>
                            {herb.medicalUses.map((use: string) => (
                                <Link key={deleteSpace(use)}
                                      to={"/symptom?searchedSymptom=" + deleteSpace(use)}
                                >
                                    <a><p>{use}</p></a>
                                </Link>)
                            )}
                        </div>
                        <div className="circleBox">
                            <img src={herb.imageHerb} alt={herb.names[Language.english]} />
                        </div>
                        <div>
                            <p><h3>Precautions:</h3></p>

                            {herb.precautions.map((precaution: string) => (
                                <p key={herb.id}>{precaution}</p>)
                            )}
                        </div>
                    </div>
                </div>
                <div id="herbID"></div>
                <div className="vegetation-box">
                    <div>{herb.vegetation}</div>
                    <img className="vegetation-img" src={herb.vegetationPhoto} alt={herb.names.english}/>
                </div>
                <div className="credits">
                    photo is taken by <Link to="https://www.pexels.com/@arthousestudio/" target="_blank">ArtHouse
                    Studio</Link>
                </div>
            </div>
        )
    } else {
        return (<div className="page">
            <h4>Herb with this id doesn't exist in the data base yet.</h4>
        </div>)
    }
}
export default HerbName;


