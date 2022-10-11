import React, {useState} from 'react';
import '../style/style.css';
import {getAllArticles} from "../services/articles";
import {Link} from "react-router-dom";

// Page where you can read articles about herbs.
function Articles() {
    const [searchTerm, setSearchTerm] = useState("");
    const handleChange = (event: any) => {
        setSearchTerm(event.target.value);
    };

    const results = getAllArticles().filter(article =>
        (article.title).toLowerCase().includes(searchTerm) ||
        (article.shortDescription).toLowerCase().includes(searchTerm)
    );

    return (
        <div>
            <div className="center-element high-div">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut
                    labore et dolore magna aliqua. Lectus vestibulum mattis ullamcorper velit sed ullamcorper.
                    In
                    nibh mauris cursus mattis. Amet est placerat in egestas erat. Tristique senectus et netus et
                    malesuada fames ac. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien.
                    Pellentesque elit uillamcorper dignissim cras tincidunt lobortis feugiat. At tempor commodo
                    ullamcorper a lacus vestibulum sed arcu non.</p>
            </div>
            <div className="center-element">
                <div className="col-md-5">
                    <input
                        type="text"
                        className="form-control searching-child searching-articles"
                        placeholder="Search"
                        value={searchTerm}
                        onChange={handleChange}
                    />
                </div>
            </div>


            <div>
                {results.map((article) =>
                    <div>
                        <div className="center-element">
                            <div className="article-card">
                                <div className="article-img">
                                    <img src={article.imageArtilces} className="img-fluid rounded-start"
                                         alt={article.imageArtilces}/>
                                </div>
                                <div >
                                    <h5>{article.title}</h5>
                                    <p>{article.shortDescription}</p>
                                    <div className="collapse " id={"article" + article.id}>
                                        <div className="card card-body long-description-article">
                                            {article.longDescription}
                                        </div>
                                    </div>
                                    <Link to={"#article" + article.id} className="btn btn-article"
                                       data-bs-toggle="collapse"
                                       role="button" aria-expanded="false" aria-controls={"article" + article.id}>
                                        <span className="collapsed">
                                            Show more
                                        </span>
                                        <span className="expanded">
                                            Show less
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )
                })
            </div>
        </div>
    );
}

export default Articles;





