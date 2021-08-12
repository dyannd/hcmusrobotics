import React from 'react';
import MainImg from './MainImg';


function Home() {
    return (
        <div className="section" id="Home">
            <div className="section-left">
                <div className="titles home-titles">
                    <h1>Not just a <span>Club</span></h1>
                    <h1>We nurture great<span> Minds</span></h1>
                </div>

                <div className="button-wrapper">
                    <button className="explore-button" >
                        <a href="#Courses">Explore</a>
                    </button>
                </div>
            </div>
            <div className="section-right">
                <MainImg />
            </div>
        </div>
    )
}

export default Home;