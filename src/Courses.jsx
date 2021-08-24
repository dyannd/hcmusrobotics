import React from 'react';
import CourseCard from './CourseCard';
import wedo from './styles/wedo.jpg';
import arduino from './styles/arduino.jpg';
import nao from './styles/nao.jpg';
import mindstorms from './styles/mindstorms.jpg';
function Courses() {
    return (
        <div id="Courses" className="section">
            <div className="section-left courses-left">
                <div className="courses-panel">
                    <CourseCard
                        title="Mindstorms"
                        des="Explore the basics of programming, logical and creative thinking, as well as scientific communications, through 
                    building and functioning LEGO EV3 robots."
                        img={mindstorms}
                        offset="translateY(10%)"
                    />
                    <CourseCard
                        title="WEDO"
                        des="Exclusively for elementary students, with an aim to provide new experience on crafting, programming, and 
                    operating robots, through lessons on familiar topics."
                        img={wedo}
                        offset="translateY(-10%)"
                    />
                    <CourseCard
                        title="Arduino"
                        des="Explore the fundamentals of electronics including hardwares and programming. Upon completing the course, 
                    students will have understanding of IoT and logical problem-solving."
                        img={arduino}
                        offset="translateX(-16%) translateY(-10%)"
                    />
                    <CourseCard
                        title="NAO"
                        des="Explore NAO - a modern human-shape robot - through programming and interacting with its sensors. Students will understand 
                    how robot functions, and will get a chance to express their creative ideas through NAO. "
                        img={nao}
                        offset="translateX(6%) translateY(5%)"
                    />
                </div>
            </div>
            <div className="section-right courses-right">
                <div className="section-intro intro-courses">
                    <h1 className="intro-one-courses">Our</h1>
                    <h1 className="intro-two-courses">Courses</h1>
                </div>
            </div>
        </div>
    )
}

export default Courses;