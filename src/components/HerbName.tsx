import React from 'react';

import '../style/style.css';
import { useParams} from 'react-router-dom';
import {herbsDB} from "../services/herbs";
import {Language} from "../model";


const HerbName = () => {
    const {id} = useParams();
    const herb = herbsDB.find((h: { id: number }) => h.id === Number(id));
    let herbPrecautions;
    let herbUses;
    const values = Object.values(Language);

    if (herb) {
    return (
        <div>
            <div id="mySidenav" className="sidenav">
                <img src={herb.imageHerb} alt={herb.names[Language.english]}/>
                <div className="HerbNameNames">
                    {values.map((lang: Language) => (
                        <p>{herb.names[lang]}</p>
                    ))}
                </div>
            </div>
        </div>
    )} else {
        return <h4>No herb</h4>
    }
}
export default HerbName;

