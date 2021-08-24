import React from 'react';
import MainImg from './MainImg';


function Home({ scrollTo }) {
    return (
        <div className="section" id="Home">

            <div className="section-left">
                <div className="titles home-titles">
                    <h1>Not just a <span>Club</span></h1>
                    <h1>We nurture great<span className="secondary-span"> Minds</span></h1>
                </div>

                <div className="button-wrapper">
                    <button className="explore-button home-button"
                        onClick={() => window.scrollTo({ top: scrollTo, behavior: "smooth" })}
                    >
                        About Us
                    </button>
                </div>
            </div>
            <div className="section-right home-right">
                <MainImg />
            </div>
        </div>
    )
}

export default Home;