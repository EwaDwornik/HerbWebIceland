import React, {useRef, useState} from 'react';
import {Link} from 'react-router-dom';
import arrowup from "../components/static/arrow-up.png"

import {Herb, Language} from "../model";
import {getAllHerbs} from "../services/herbs";

//Page where you can see all herbs in alphabetic chronology.

//function that sorts herbs by a chosen language
function sortByLanguage(herbs: Herb[], lang: Language): Herb[] {
    return [...herbs].sort((a: Herb, b: Herb) => (a.names[lang] > b.names[lang]) ? 1 : -1)
}

function HerbsByName() {
    const defaultLanguage = Language.english
    const [herbs, setHerbs] = useState(sortByLanguage(getAllHerbs(), defaultLanguage));
    const [sortedBy, setSortedBy] = useState(defaultLanguage);

    function sortStateBy(lang: Language) {
        setHerbs(sortByLanguage(herbs, lang));
        setSortedBy(lang)
    }

    const [searchTerm, setSearchTerm] = useState("");
    const handleChange = (event: any) => {
        setSearchTerm(event.target.value);
    };

    const results = herbs.filter(herb =>
        (herb.names[Language.latin]).toLowerCase().includes(searchTerm) ||
        (herb.names[Language.english]).toLowerCase().includes(searchTerm) ||
        (herb.names[Language.icelandic]).toLowerCase().includes(searchTerm)
    );

    const ref = useRef(null);

    const handleClick = () => {
        // @ts-ignore
        ref.current?.scrollIntoView({behavior: 'smooth'});
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (<div>
            <div id="first">
                <p className="animated bounceInLeft">YOU MIGHT THINK THAT ICELANDIC FLORA IS POOR...</p>
            </div>
            <div className="home-page-decription">
                <p>...and you might be right</p>
                But! Between the lava fields and glaciers you can find plenty of medical herbs, at least 85,
                that can help you to improve your life.<br/>
                Tough climate made them very potent, few leaves taken from birch won’t harm the tree, but their
                diuretic properties can help you with getting rid of excess water in your body. <br/>Some
                things are just good to know and that’s why this website exists. <br/>
                We categorised local herbs to
                help you find the ones for your current needs. <br/>
                Enjoy!
            </div>
            <div id="first"></div>
            <div className="high-div home-page-navigation ">
                <div onClick={handleClick}><Link to="/#herbs-by-name">Herbs by name</Link></div>
                <div><Link to="/symptom">Herbs by symptom</Link></div>
                <div><Link to="/contact">Contact</Link></div>
                <div><Link to="/workshops">Workshops</Link></div>
                <div><Link to="/articles">Articles</Link></div>
            </div>
            <div id="second"></div>
            <div ref={ref} className="center-element">
                <div className="space-around pos-relative">
                    <select
                        onChange={(e: any) => sortStateBy(e.target.value)}
                        className="effect-green">
                        <option selected> sort by language</option>
                        <option value="icelandic">Icelandic</option>
                        <option value="english">English</option>
                    </select>
                </div>

                <div className="center-element pos-relative">
                    <input
                        type="text"
                        placeholder=" search"
                        className="effect-green"
                        value={searchTerm}
                        onChange={handleChange}
                    />
                    <span className="focus-border"></span>

                </div>
            </div>
            <div className="space-around" id='/#herbs-by-name'>
                {results.map((single) =>
                    <Link to={"/herb/" + single.id}>
                        <div className="herb-card">
                            <div>
                                <img
                                    src={single.imageHerb}
                                    alt={single.names[Language.english]}
                                />
                            </div>
                            <div>
                                <h5 className="card-title">{single.names[sortedBy]} </h5>
                                <p className="card-text">{single.names[Language.latin]}</p>
                            </div>

                        </div>
                    </Link>
                )}
            </div>
            <div id="second">
                <Link to="/#first" onClick={scrollToTop}><img src={arrowup}/></Link>
                <div className="credits">
                    photos by <Link to="https://clementcoudeyre.com" target="_blank">Clément
                    Coudeyre</Link></div>
            </div>
        </div>

    )
}

export default HerbsByName;

