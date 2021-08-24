import React from 'react';

function Contact() {
    return (

        <div className="section" id="Contacts">
            <div className="section-left">
                <div className="section-intro intro-contact">
                    <h1 >Contact <span>Us</span>   </h1>
                </div>
                <div className="titles contact-titles">
                    <h1>Let's <span>Talk</span></h1>
                    <h5>Have a chat</h5>

                    <a className="link" target="_blank" href="https://www.facebook.com/RoboticsHCMUS">
                        Facebook
                    </a>

                    <h5>Reach us through</h5>
                    <p>+84028325929</p>
                    <p>robotics@hcmus.edu.vn</p>
                    <h5>Visit us at </h5>
                    <p>227 Nguyen Van Cu St, Ward 4, District 5, Ho Chi Minh City, Vietnam.</p>
                </div>
            </div>
            <div className="section-right contact-right">

                <div className="titles contact-titles">
                    <h1 className="contact-main-title">Or <span>drop</span> a message!</h1>
                    <form action="https://formsubmit.co/anhdng8@gmail.com" method="POST" className="contact-form">
                        <div className="field-splitter">
                            <label htmlFor="name">Name</label>
                            <label htmlFor="contact">Email</label>
                            <input type="text" name="name" required placeholder="Anh D Nguyen" className="name"/>  
                            <input type="text" name="contact" required placeholder="anhdng8@gmail.com" />
                        </div>
                        <label htmlFor="details">Your Message</label>
                        <textarea placeholder="Hi I am Anh and I want to know more about Mindstorms!" name="details" required />
                        <button className="explore-button " type="submit" >
                            Submit
                        </button>
                    </form>
                </div>

            </div>
        </div>

    )
}

export default Contact;