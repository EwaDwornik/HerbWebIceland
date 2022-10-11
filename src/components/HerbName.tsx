import React from "react";
import {useParams} from "react-router-dom";

import '../style/style.css';
import {Language} from "../model";
import {deleteSpace} from "../services/utilities";
import {getAllHerbs} from "../services/herbs";
import {HashLink} from "react-router-hash-link";

// Page about a herb, user can read about it, see where it grows abd when to use it.
const HerbName = () => {
    const {id} = useParams();
    const herb = getAllHerbs().find((h: { id: number }) => h.id === Number(id));
    const values = Object.values(Language);

    if (herb) {
        return (
            <div>
                <div className="space-around middle-high-div">
                    {values.map((lang: Language) => (
                        <div>{herb.names[lang]}</div>
                    ))}
                </div>
                <div className="space-around">
                    <div className="one-third box">
                        {herb.medicalUses.map((use: string) => (
                            <HashLink
                                to={"/symptom/#" + deleteSpace(use)}
                                scroll={(el) => el.scrollIntoView({behavior: 'auto', block: 'end'})}
                            >
                                <h5>{use}</h5>
                            </HashLink>)
                        )}
                    </div>
                    <div className="one-third">
                        <img className="herb-img" src={herb.imageHerb} alt={herb.names[Language.english]}/>

                    </div>
                    <div className="one-third box">
                        {herb.precautions.map((precaution: string) => (
                            <HashLink
                                to={"/symptom/#" + deleteSpace(precaution)}
                                scroll={(el) => el.scrollIntoView({behavior: 'auto', block: 'end'})}
                            >
                                <h5>{precaution}</h5>
                            </HashLink>)
                        )}
                    </div>

                </div>
                <div className="space-around">
                    <h3>Vegetation information</h3>
                </div>
                <div className="space-around">
                    <div>{herb.vegetation}</div>
                    <img className="vegetation-img" src={herb.vegetationPhoto} alt={herb.names.english}/>
                </div>
            </div>

        )
    } else {
        return <h4>Herb with this id doesn't exist in the data base yet.</h4>
    }
}
export default HerbName;


