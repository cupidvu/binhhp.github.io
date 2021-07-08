import React from "react";
import AboutSVG from "../../themes/svg/AboutSVG";
import WorkSVG from "../../themes/svg/WorkSVG";
import ContactSVG from "../../themes/svg/ContactSVG";
import "./header.css";

export default function Header({ menu }){

    return(
        <React.Fragment>
          <div className={ menu ? "menu menu--is-active" : "menu"}>
            <div className="menu__content">
              <a className="ajax menu__link" href="#about">
                <h3 className="menu__title">About</h3>
                <AboutSVG></AboutSVG>
                <h6 className="menu__subtitle subtitle">
                  Read Bio
                </h6>
              </a>
              <a className="ajax menu__link" href="#skills">
                <h3 className="menu__title">Skills</h3>
                <AboutSVG></AboutSVG>
                <h6 className="menu__subtitle subtitle">
                  View programming
                </h6>
              </a>
              <a className="ajax menu__link" href="#experience">
                <h3 className="menu__title">Experience</h3>
                <ContactSVG></ContactSVG>
                <h6 className="menu__subtitle subtitle">
                  Get in touch
                </h6>
              </a>
              <a className="ajax menu__link" href="#work">
                <h3 className="menu__title">Works</h3>
                <WorkSVG></WorkSVG>
                <h6 className="menu__subtitle subtitle">
                  View Case Studies
                </h6>
              </a>
            </div>
          
            <h6 className="menu__good-people">
              Copy @2021 - built by binhhp
            </h6>
          </div>
          
        </React.Fragment>
    )
}