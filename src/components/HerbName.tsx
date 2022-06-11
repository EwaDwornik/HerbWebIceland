import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {NavHashLink} from "react-router-hash-link";


import '../style/style.css';
import {Language} from "../model";
import {deleteSpace} from "../services/utilities";
import {getAllHerbs} from "../services/herbs";

const HerbName = () => {
    const {id} = useParams();
    const herb = getAllHerbs().find((h: { id: number }) => h.id === Number(id));
    const values = Object.values(Language);

    if (herb) {
        return (
            <div className='container mx-auto'>
                <div className="row ">
                    <div className="col-6 col-md-3 sidenav">
                        <div className="text-center ">
                            <img className="w-80" src={herb.imageHerb} alt={herb.names[Language.english]}/>
                            {values.map((lang: Language) => (
                                <p>{herb.names[lang]}</p>
                            ))}
                        </div>
                    </div>

                    <div className="col-md-9 wider-grid">
                        <div className="medical-uses-box w-100">
                            <div className="row justify-content-evenly">
                                <div className="col-4">
                                    <ul className="list-unstyled text-center">
                                        <h3>Medical uses</h3><br/>
                                        {herb.medicalUses.map((use: string) => (
                                            <NavHashLink
                                                /*activeStyle={{
                                                    color: 'red'}}*/
                                                to={"/symptom#" + deleteSpace(use)}
                                            >
                                                <li><h5>{use}</h5></li>
                                            </NavHashLink>)
                                        )}
                                    </ul>
                                </div>
                                <div className="col-4">
                                    <ul className="list-unstyled text-center">
                                        <h3>Precautions</h3><br/>
                                        {herb.precautions.map((precaution: string) => (
                                            <li><h5>{precaution}</h5></li>)
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="vegetation">
                            <div className="row justify-content-evenly">
                                <h3>Vegetation information</h3><br/>
                                <div className="col-4">{herb.vegetation}</div>
                                <div className="col-4"><img src={herb.vegetationPhoto} alt={herb.names.english}/></div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        )
    } else {
        return <h4>Herb with this id doesn't exist in the data base yet.</h4>
    }
}
export default HerbName;


