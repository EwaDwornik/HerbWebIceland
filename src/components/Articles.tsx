import React from 'react';
import '../style/style.css';
import {getAllArticles} from "../services/articles";
import {Article} from "../model";


// Page where you can read articles about herbs.
function Articles() {

    const articlesCard: any[] = [];
    for (let article of getAllArticles()) {
        articlesCard.push(
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <h5 className="card-header">{article.title}</h5>
                            <div className="card-body">
                                <p className="card-text">{article.shortDescription}</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        {article.imageArtilces}
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
                    malesuada fames ac. Am et mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien.
                    Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. At tempor commodo
                    ullamcorper a lacus vestibulum sed arcu non.</p>
            </div>
            <div className="wider-grid">
                <div>
                    {articlesCard}
                </div>
            </div>
        </div>
    );
}

export default Articles;




