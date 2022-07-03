import React, {useState} from 'react';
import '../style/style.css';

import {getAllWorkshops} from "../services/workshops";
import WorkshopForm from "./WorkshopForm";
import {Workshop} from "../model";

//list of all herbal workshops that happen in Iceland.

function Workshops() {
    const [list, updateList] = useState(getAllWorkshops());

    const addWorkshop = (workshop: Workshop) => {
        updateList([...list, workshop])
    }

    const workshopCards: any[] = [];
    for (let workshop of getAllWorkshops()) {
        workshopCards.push(
            <div className="card mb-3">
                <div className="row g-0 workshop-card">
                    <div className="col-md-4 ">
                        <img src={workshop.imageWorkshop} className="img-fluid rounded-start"
                             alt={workshop.imageWorkshop}/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{workshop.title}</h5>
                            <h5 className="card-title">{workshop.date}</h5>
                            <p className="card-text">{workshop.description}</p>
                            <p className="card-text"><small className="text-muted">Link to the event: <a
                                href={workshop.event}>click here!</a></small></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container mx-auto">
            <div className="col-6 col-md-3 mx-auto sidenav">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut
                    labore et dolore magna aliqua. Lectus vestibulum mattis ullamcorper velit sed ullamcorper.
                    In
                    nibh mauris cursus mattis. Amet est placerat in egestas erat. Tristique senectus et netus et
                    malesuada fames ac. Am et mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien.
                    Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. At tempor commodo
                    ullamcorper a lacus vestibulum sed arcu non.</p>
                <div className="add-workshop ">
                    <a href="#collapseExample" className="btn " data-bs-toggle="collapse"
                          role="button" aria-expanded="false" aria-controls="collapseExample">
                    Add workshop
                    </a>
                </div>
            </div>
            <div className="wider-grid">
                <div className="collapse" id="collapseExample">
                    <div className="card card-body">
                        <WorkshopForm addWorkshop={addWorkshop}/>
                    </div>
                </div>

                <div>
                    <p className="mb-3 mt-5"><h3>Workshops in Iceland:</h3></p>
                    {workshopCards}
                </div>
            </div>
        </div>
    );
}

export default Workshops;




