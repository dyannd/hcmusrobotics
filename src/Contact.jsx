import React from 'react';

function Contact() {
    return (

        <div className="section" id="Contacts">
            <div className="section-left">
                <div className="titles contact-titles">
                    <h1 className="contact-main-title"><span>Contact</span> Us</h1>
                    <form>
                        <input type="email" placeholder="Your email" />
                        <textarea placeholder="Your enquiry" />
                    </form>
                    <p>or a quick chat with us on <a href="http://m.me/RoboticsHCMUS"> Messenger</a></p>
                </div>

                <div className="button-wrapper">
                    <button className="explore-button contact-button" >
                        <a href="">Submit</a>
                    </button>
                </div>
            </div>
            <div className="section-right contact-right">

            </div>
        </div>

    )
}

export default Contact;