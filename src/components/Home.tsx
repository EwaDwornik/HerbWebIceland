import React from 'react';
import '../style/style.css';
import symptom from "../components/static/symptom.png"
import name from "../components/static/name.png"


function Home() {
    return (<div>
            <div className="background">
                <div className="transbox">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Lectus vestibulum mattis ullamcorper velit sed ullamcorper. In
                        nibh mauris cursus mattis. Amet est placerat in egestas erat. Tristique senectus et netus et
                        malesuada fames ac.  </p>
                </div>
                <div className="row justify-content-md-center">
                    <div className="col-6">
                        <a className="nav-link" href="/name">
                        <div className="card card-home-custom col-md-auto">
                            <img src={name} className="card-img-top" alt="nameCard"/>
                            <div className="card-body card-block">
                                <p className="card-text">Search herbs by name</p>
                            </div>
                        </div></a>
                    </div>
                    <div className="col-6 col-md-auto">
                        <a className="nav-link" href="/symptom">
                        <div className="card card-home-custom">
                            <img src={symptom} className="card-img-top" alt="symptomCard"/>
                            <div className="card-body card-block">
                                <p className="card-text">Search herbs by symptom</p>
                            </div>
                        </div></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;

