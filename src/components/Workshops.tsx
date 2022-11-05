import React, {useState} from 'react';

import {Workshop} from "../model";
import workshop from "../components/static/workshop.jpg"
import {workshopDB} from "../services/workshops";
import WorkshopForm from "./WorkshopForm";
import {Link} from "react-router-dom";
import Navigation from "./Navigation";

//list of all herbal workshops that happen in Iceland.

function Workshops() {
    const [list, updateList] = useState(workshopDB);

    const addWorkshop = (workshop: Workshop) => {
        updateList([...list, workshop])
    }

    return (<>
            <Navigation/>
            <div className="workshop-background">

                <div className="workshop-box animated bounceInLeft">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut
                        labore et dolore magna aliqua. Lectus vestibulum mattis ullamcorper velit sed ullamcorper.
                        In
                        nibh mauris cursus mattis. Amet est placerat in egestas erat. Tristique senectus et netus et
                        malesuada fames ac. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien.
                        Pellentesque elit uillamcorper dignissim cras tincidunt lobortis feugiat. At tempor commodo
                        ullamcorper a lacus vestibulum sed arcu non.
                    </p>
                    <div>
                        <img src={workshop} alt="workshop"/>
                    </div>

                </div>

                <button type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseWorkshop"
                        aria-expanded="false" aria-controls="collapseExample">
                    add workshop
                </button>

                <div className="collapse" id="collapseWorkshop">

                    <WorkshopForm addWorkshop={addWorkshop}/>

                </div>

                <div>
                    {workshopDB.map((workshop) =>
                        <div className="workshop-card" key={workshop.title}>
                            <div className="image-wrapper">
                                <img className="image-1" src={workshop.imageWorkshop} alt={workshop.title}/>
                                <img className="image-2" src={workshop.imageWorkshop} alt={workshop.title}/>
                                <img className="image-3" src={workshop.imageWorkshop} alt={workshop.title}/>
                                <img className="image-4" src={workshop.imageWorkshop} alt={workshop.title}/>
                            </div>

                            <div className="workshop-description">
                                <h5 className="card-title">{workshop.title}</h5>
                                <h5 className="card-title">{workshop.date}</h5>
                                <p className="card-text">{workshop.description}</p>
                                <p className="card-text"><small className="text-muted">Link to the event: <a
                                    href={workshop.event}>click here!</a></small></p>
                            </div>
                        </div>
                    )}
                    <div className="credits">
                        photo is taken by <Link to="https://www.pexels.com/@madsdonald/" target="_blank">Mads
                        Thomsen</Link>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Workshops;




