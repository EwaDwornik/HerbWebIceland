import React, {useState} from 'react';
import '../style/style.css';
import {Link} from 'react-router-dom';

import {Herb, Language} from "../model";
import {herbsDB} from "../services/herbs";

function sortByLanguage(herbs: Herb[], lang: Language): Herb[] {
    return [...herbs].sort((a: Herb, b: Herb) => (a.names[lang] > b.names[lang]) ? 1 : -1)
}

function HerbsByName() {
    const defaultLanguage = Language.english
    const [herbs, setHerbs] = useState(sortByLanguage(herbsDB, defaultLanguage));
    const [sortedBy, setSortedBy] = useState(defaultLanguage);

    function sortStateBy(lang: Language) {
        setHerbs(sortByLanguage(herbs, lang));
        setSortedBy(lang)
    }

    const herbCards: any[] = [];
    for (let herb of herbs) {

        herbCards.push(
            <div className="col">
                <Link to={"/herb/" + herb.id}>
                    <div className="card card-names-custom">
                        <div className="card-body">
                            <img className="card-img-top" src={herb.imageHerb} alt={herb.names[Language.english]}/>
                        </div>
                        <div className="card-footer">
                            <h5 className="card-title">{herb.names[sortedBy]} </h5>
                            <p className="card-text">{herb.names[Language.latin]}</p>
                        </div>
                    </div>
                </Link>
            </div>
        )
    }

    return (
        <div className='container'>

        <div className="row">
            <div className="col-6 col-md-3 sidenav">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut
                    labore et dolore magna aliqua. Lectus vestibulum mattis ullamcorper velit sed ullamcorper.
                    In
                    nibh mauris cursus mattis. Amet est placerat in egestas erat. Tristique senectus et netus et
                    malesuada fames ac. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien.
                    Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. At tempor commodo
                    ullamcorper a lacus vestibulum sed arcu non.</p>
            </div>

            <div className='container col-md-9 wider-grid'>
                <div className="row ">
                    <select
                        className="form-select"
                        onChange={(e: any) => sortStateBy(e.target.value)}>
                        <option selected>Choose language to sort herbs</option>
                        <option value="icelandic">Icelandic</option>
                        <option value="english">English</option>
                    </select>
                    <div className="input-group rounded form-select">
                        <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search"
                               aria-describedby="search-addon"/>
                        <span className="input-group-text border-0" id="search-addon">
                        <i className="fas fa-search"></i>
                    </span>
                    </div>
                </div>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
                    {herbCards}
                </div>
            </div>
        </div>
        </div>
    )
}

export default HerbsByName;
