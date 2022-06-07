import React, {useState} from 'react';

import {workshopDB} from "../services/workshops";
import {generateIdWorkshop} from "../services/utilities";
import {Herb, Workshop} from "../model";


const initialState: Workshop = {
    id: -1,
    title: '',
    date: '',
    imageWorkshop: '',
    email: '',
    description: '',
    event: ''
};


export function WorkshopForm({addWorkshop}: any) {
    const [formState, setFormState] = useState(initialState);

    const handleSubmit = (event: any) => {
        event.preventDefault();
        workshopDB.push({...formState, id: generateIdWorkshop()});
        workshopDB.sort((a, b) => (b.date > a.date) ? 1 : -1)
        addWorkshop(formState);
        setFormState(initialState);
    };

    return (
        <div className="workshop-cards">
            <form onSubmit={handleSubmit} className="row g-3">
                <div className="col-md-5">
                    <label className="form-label">Title:</label>
                    <input
                        type='text'
                        className="form-control"
                        required
                        value={formState.title}
                        onChange={e => {
                            setFormState({...formState, title: e.target.value});
                        }}/>
                </div>

                <div className="col-md-5">
                    <label className="form-label">Date:</label>
                    <input
                        type='date'
                        className="form-control"
                        required
                        value={formState.date}
                        onChange={e => {
                            setFormState({...formState, date: e.target.value});
                        }}/>
                </div>
                <div className="col-md-5">
                    <label className="form-label">Photo URL:</label>
                    <input
                        type='text'
                        className="form-control"
                        placeholder="http://"
                        required
                        value={formState.imageWorkshop}
                        onChange={e => {
                            setFormState({...formState, imageWorkshop: e.target.value});
                        }}/>
                </div>
                <div className="col-md-5">
                    <label className="form-label">Email:</label>
                    <input
                        type='text'
                        className="form-control"
                        required
                        value={formState.email}
                        onChange={e => {
                            setFormState({...formState, email: e.target.value});
                        }}/></div>
                <div className="col-md-10">
                    <label className="form-label">Description:</label>
                    <textarea
                        className="form-control"
                        rows={5}
                        maxLength={450}
                        required
                        value={formState.description}
                        onChange={e => {
                            setFormState({...formState, description: e.target.value});
                        }}/></div>
                <div className="col-md-5">
                    <label className="form-label">Link to the event:</label>
                    <input
                        type='text'
                        className="form-control"
                        placeholder="http://"
                        required
                        value={formState.event}
                        onChange={e => {
                            setFormState({...formState, event: e.target.value});
                        }}/></div>

                <div className="col-md-5">
                    <label className="form-label">Add event:</label>

                    <button type="submit" className="btn btn-primary form-control">Submit</button>
                </div>

            </form>
        </div>
    )
}

export default WorkshopForm;
