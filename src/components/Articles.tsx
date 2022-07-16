import React, {useState} from 'react';
import '../style/style.css';
import {getAllArticles} from "../services/articles";

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

    const articlesCard: any[] = [];
    for (let article of results) {

        articlesCard.push(
            <div>
                <div className="card mb-3">
                    <div className="row g-0 workshop-card">
                        <div className="col-md-4 ">
                            <img src={article.imageArtilces} className="img-fluid rounded-start"
                                 alt={article.imageArtilces}/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{article.title}</h5>
                                <p className="card-text">{article.shortDescription}</p>
                            </div>
                        </div>
                        <div className="collapse " id={"article" + article.id}>
                            <div className="card card-body long-description-article">
                                {article.longDescription}
                            </div>
                        </div>
                        <a href={"#article" + article.id} className="btn btn-article" data-bs-toggle="collapse"
                           role="button" aria-expanded="false" aria-controls={"article" + article.id}>
                            <span className="collapsed">
                                Show more
                            </span>
                            <span className="expanded">
                                Show less
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container">
            <div className="col-6 col-md-3 sidenav">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut
                    labore et dolore magna aliqua. Lectus vestibulum mattis ullamcorper velit sed ullamcorper.
                    In
                    nibh mauris cursus mattis. Amet est placerat in egestas erat. Tristique senectus et netus et
                    malesuada fames ac. Am et mauris commodo quis imperdiet massa tincidunt nunc pulvinar
                    sapien.
                    Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. At tempor commodo
                    ullamcorper a lacus vestibulum sed arcu non.</p>
            </div>
            <div className="wider-grid">
                <div className="row g-3 ">
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
                    {articlesCard}
                </div>
            </div>
        </div>
    );
}

export default Articles;





