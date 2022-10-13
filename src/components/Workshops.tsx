import React, {useState} from 'react';
import '../style/style.css';

import {getAllWorkshops} from "../services/workshops";
import WorkshopForm from "./WorkshopForm";
import {Workshop} from "../model";
import {Link} from "react-router-dom";
import workshop from "../components/static/workshop.png"

//list of all herbal workshops that happen in Iceland.

function Workshops() {
    const [list, updateList] = useState(getAllWorkshops());

    const addWorkshop = (workshop: Workshop) => {
        updateList([...list, workshop])
    }


    return (
        <div className="page">
            <div className="workshop-box">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut
                    labore et dolore magna aliqua. Lectus vestibulum mattis ullamcorper velit sed ullamcorper.
                    In
                    nibh mauris cursus mattis. Amet est placerat in egestas erat. Tristique senectus et netus et
                    malesuada fames ac. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien.
                    Pellentesque elit uillamcorper dignissim cras tincidunt lobortis feugiat. At tempor commodo
                    ullamcorper a lacus vestibulum sed arcu non.
                </p>
                <img src={workshop} alt="workshop"/>
            </div>

            <Link to="#collapseWorkshop" className="btn" data-bs-toggle="collapse" role="button"
                  aria-expanded="false" aria-controls="collapseWorkshop">add workshop</Link>
            <div className="collapse middle-high-div" id="collapseWorkshop">
                <div className="card form-workshop card-body">
                    <WorkshopForm addWorkshop={addWorkshop}/>
                </div>
            </div>

            <div>
                {getAllWorkshops().map((workshop) =>
                    <div className="workshop-card">
                        <div className="workshop-img">
                            <img src={workshop.imageWorkshop} className="img-fluid rounded-start"
                                 alt={workshop.imageWorkshop}/>
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
            </div>
        </div>
    )
}

export default Workshops;




