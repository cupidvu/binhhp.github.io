import React, { useEffect } from "react";
import Aos from "aos";
import "./css/skill.css";

export default function Skills(){

    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <section id="skills" className="section section--skill">
                <div className="container-fluid">
                    <div className="col-xs-12 col-md-11 col-md-centered col-lg-10 col-lg-push-1">
                            <div className="heading">
                                        <h1 className="heading__title">Skills</h1>
                                        <h6 className="heading__subtitle">
                                            Have knowledge about
                                        </h6>
                                </div>
                                <div className="row">
                                    <div className="col-md-4" 
                                    data-aos="flip-right" 
                                    data-aos-easing="ease-in-out"
                                    data-aos-duration="1000">
                                        <div className="skill-box">
                                            <h5>Programing language</h5>
                                            <ul>
                                                <li>C#</li>
                                                <li>Javascript</li>
                                                <li>HTML/CSS</li>
                                            </ul>
                                            <h5>Platform &amp; Frameworks &amp; Libraries</h5>
                                            <ul>
                                                <li>Asp.Net Core</li>
                                                <li>Asp.Net Framework</li>
                                                <li>ReactJS / Redux</li>
                                                <li>Bootstrap</li>
                                                <li>OpenCV</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-4"
                                    data-aos="flip-right" 
                                    data-aos-easing="ease-in-out"
                                    data-aos-duration="1000"
                                    data-aos-delay="300">
                                        <div className="skill-box">
                                            <h5>Database</h5>
                                            <ul>
                                                <li>MS SQL</li>
                                                <li>Firebase</li>
                                            </ul>
                                            <h5>Version control</h5>
                                            <ul>
                                                <li>Git</li>
                                            </ul>
                                            <h5>IDE</h5>
                                            <ul>
                                                <li>Visual Studio</li>
                                                <li>Visual Studio Code</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-4"
                                    data-aos="flip-right" 
                                    data-aos-easing="ease-in-out"
                                    data-aos-delay="500"
                                    data-aos-duration="1000">
                                        <div className="skill-box">
                                            <h5>Knowledge</h5>
                                            <ul>
                                                <li>Understanding about OOP</li>
                                                <li>Restful API</li>
                                                <li>Design Patterns</li>
                                                <li>Dependency Injection</li>
                                                <li>Docker</li>
                                                <li>Selenium</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </section>
    )
}