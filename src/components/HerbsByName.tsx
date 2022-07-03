import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

import '../style/style.css';
import {Herb, Language} from "../model";
import {getAllHerbs} from "../services/herbs";

function sortByLanguage(herbs: Herb[], lang: Language): Herb[] {
    return [...herbs].sort((a: Herb, b: Herb) => (a.names[lang] > b.names[lang]) ? 1 : -1)
}

function HerbsByName() {
    const defaultLanguage = Language.english
    const [herbs, setHerbs] = useState(sortByLanguage(getAllHerbs(), defaultLanguage));
    const [sortedBy, setSortedBy] = useState(defaultLanguage);
    const [data, setData] = useState([])

    function sortStateBy(lang: Language) {
        setHerbs(sortByLanguage(herbs, lang));
        setSortedBy(lang)
    }

    useEffect(()=> {
        (async ()=> {
           const endpoint = 'http://localhost:4000/herbs';
           const response = await fetch(endpoint);
           const dataSource =  await response.json()
           setData(dataSource)
        })()
    }, [])

    const [searchTerm, setSearchTerm] = useState("");
    const handleChange = (event: any) => {
        setSearchTerm(event.target.value);
    };

    const results = herbs.filter(herb =>
        (herb.names[Language.latin]).toLowerCase().includes(searchTerm) ||
        (herb.names[Language.english]).toLowerCase().includes(searchTerm) ||
        (herb.names[Language.icelandic]).toLowerCase().includes(searchTerm)
    );

    const herbCards: any[] = [];
    for (let herb of results) {

        herbCards.push(
            <div className="col">
                <Link to={"/herb/" + herb.id}>
                    <div className="card card-names-custom">
                        <div className="card-body">
                            <img className="card-img-top" src={herb.imageHerb} alt={herb.names[Language.english]}/>
                        </div>
                        <div className="card-footer footer-by-name">
                            <h5 className="card-title">{herb.names[sortedBy]} </h5>
                            <p className="card-text">{herb.names[Language.latin]}</p>
                        </div>
                    </div>
                </Link>
            </div>
        )
    }


    return (
        <div className='container mx-auto'>

            <div className="row">
                <div className="col-6 col-md-3 sidenav text-center">
                    <p><h4>You might think that Icelandic flora is poor</h4>and you might be right. <br /> <br />
                        But! Between the lava fields and glaciers you can find plenty of medical herbs, at least 85,
                        that can help you to improve your life.
                        Tough climate made them very potent, few leaves taken from birch won’t harm the tree, but their
                        diuretic properties can help you with getting rid of excess water in your body. <br/>Some
                        things are just good to know and that’s why this website exists. <br />
                        We categorised local herbs to
                        help you find the ones for your current needs. Enjoy!</p>
                </div>

                <div className='container col-md-9 wider-grid'>
                    <div className="row g-3 searching">
                        <div className="col-md-5">
                            <select
                                className="form-select searching-child"
                                onChange={(e: any) => sortStateBy(e.target.value)}>
                                <option selected>Choose language to sort herbs</option>
                                <option value="icelandic">Icelandic</option>
                                <option value="english">English</option>
                            </select>
                        </div>
                        <div className="col-md-5">
                            <input
                                type="text"
                                className="form-control searching-child"
                                placeholder="Search"
                                value={searchTerm}
                                onChange={handleChange}
                            />
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

