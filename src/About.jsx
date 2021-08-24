import React from 'react';
import main from './styles/main_club.jpg';
import kid from './styles/kid.jpg';
import kid2 from './styles/kid2.jpg';
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin';
function About({ scrollTo }) {
    return (
        <div className="section" id="About">

            <div className="section-left about-left">
                <div className="section-intro">
                    <h1 className="intro-one-about">About</h1>
                    <h1 className="intro-two-about">Us</h1>
                </div>
                <div className="about-content">
                    <div className="titles about-titles">
                        <div className="title-child">
                            <h1> <span>Who</span> We Are</h1>
                            <p>We have been here since 2015, as a sub-branch of AI-LAB (Artificial Intelligence Lab), University of Science, Ho Chi Minh City.</p>
                        </div>
                        <div className="title-child">
                            <h1><span>What</span> We Do</h1>
                            <p>We provide a scientific environment to connect students with interests in studying and researching Robotics & Internet
                                of Things. Nurturing and acquiring STEM talents is our main focus.
                            </p>
                        </div>


                        <div className="button-wrapper">
                            <button className="explore-button about-button"
                                onClick={() => window.scrollTo({ top: scrollTo, behavior: "smooth" })}
                            >
                                Our Offers
                            </button>
                        </div>

                    </div>
                </div>

                <div className="about-content">
                    <div className="pic-holder">
                        <img src={main} className="hero-pic"></img>
                        <img src={kid} className="kid-pic"></img>
                        <img src={kid2} className="kid2-pic"></img>
                    </div>
                </div>
            </div>

            <div className="section-right about-right">
            </div>
        </div>
    )
}

export default About;