import React from "react";
import handleft from "../../assets/img/hand-left.png";
import handright from "../../assets/img/hand-right.png";
import About from "./About";
import Experience from "./Experience";
import Skills from "./Skills";
import Works from "./Works";
import feet from "../../assets/img/feet.jpg";

export default function Home(){

    return (
        <React.Fragment>
            <div id="content" data-start="modules/index" className="skrollable skrollable-between">
                <div className="binhhp__hand binhhp__hand--left">
                    <img src={handleft} alt="Left hand" />
                </div>
                <div className="binhhp__hand binhhp__hand--right">
                    <img src={handright} alt="Right hand" />
                </div>
                <About></About>
                <Skills></Skills>
                <Experience></Experience>
                <Works></Works>
            </div>
        
            <div className="binhhp__feet skrollable skrollable-before">
                <img  src={feet} alt="Feet" />
            </div>
        </React.Fragment>
    )
}