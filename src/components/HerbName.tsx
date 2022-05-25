import React from 'react';

import '../style/style.css';
import {useParams} from 'react-router-dom';
import {herbsDB} from "../services/herbs";
import {Language} from "../model";


const HerbName = () => {
    const {id} = useParams();
    const herb = herbsDB.find((h: { id: number }) => h.id === Number(id));
    const values = Object.values(Language);
    let herbPrecautions;
    let herbUses;


    if (herb) {
        return (
            <div className='container'>

                <div className="row ">
                    <div className="col-6 col-md-3 sidenav">
                        <div className="HerbNameNames">
                            <img src={herb.imageHerb} alt={herb.names[Language.english]}/>
                            {values.map((lang: Language) => (
                                <p>{herb.names[lang]}</p>
                            ))}
                        </div>
                    </div>

                    <div className="col-md-9 wider-grid">
                        <div className="medical-uses-box">
                            <div className="row justify-content-evenly">
                                <div className="col-4">
                                    <ul className="list-unstyled">
                                        <h3>Medical uses</h3><br/>
                                        {herb.medicalUses.map((use: string) => (
                                            <li><h5>{use}</h5></li>)
                                        )}
                                    </ul>
                                </div>
                                <div className="col-4">
                                    <ul className="list-unstyled">
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
                                <h3>Vegatation information</h3><br />
                                <div className="col-4">{herb.vegetation}</div>
                                <div className="col-4"><img src={herb.vegetationPhoto} alt={herb.names.english}/></div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        )
    } else {
        return <h4>Herb with this id doesn;t exist in the data base yet.</h4>
    }
}
export default HerbName;

