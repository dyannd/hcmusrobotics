import React from 'react';

function CourseCard(props) {
    const { title, des, img, offset } = props
    return (
        <div className="course">

            <div className="course-img">
                <img src={img} style={{transform: offset}} ></img>
            </div>

            <div className="course-des">
                <div className="course-des-wrapper">
                    <h2>{title}</h2>
                    <p>{des} </p>
                </div>
            </div>
        </div>
    )
}

export default CourseCard;