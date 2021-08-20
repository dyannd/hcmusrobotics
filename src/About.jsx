import React from 'react';
import main from './styles/main_club.jpg';
import kid from './styles/kid.jpg';
import kid2 from './styles/kid2.jpg';
function About() {
    return (
        <div className="section" id="About">

            <div className="section-left about-left">

                <div className="titles about-titles">
                    <div className="title-child">
                        <h1> <span>Who</span> We Are</h1>
                        <p>We have been here since 2015, as a sub-branch of AI-LAB, University of Science, Ho Chi Minh City.</p>
                    </div>
                    <div className="title-child">
                        <h1><span>Our</span> Missions</h1>
                        <p>Create a scientific environment to connect students with interests in studying and researching Robotics & Internet
                            of Things.
                        </p>
                    </div>

                    <div className="button-wrapper">
                        <button className="explore-button about-button" >
                            <a href="#Courses">Our Offers</a>
                        </button>
                    </div>

                </div>

            </div>
            <div className="section-right about-right">

                <div className="pic-holder">
                    <img src={main} className="hero-pic"></img>
                    <img src={kid} className="kid-pic"></img>
                    <img src={kid2} className="kid2-pic"></img>
                </div>

            </div>
        </div>
    )
}

export default About;