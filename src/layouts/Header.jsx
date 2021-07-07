import React from "react";
import AboutSVG from "../layouts/svg/AboutSVG";
import WorkSVG from "../layouts/svg/WorkSVG";
import ContactSVG from "../layouts/svg/ContactSVG";

export default function Header(){
    return(
        <div className="menu">
            <div className="menu__content">
              <a className="ajax menu__link" href="#about">
                <h3 className="menu__title">About</h3>
                <AboutSVG></AboutSVG>
                <h6 className="menu__subtitle subtitle">
                  Read Bio
                </h6>
              </a>
              <a className="ajax menu__link" href="#about">
                <h3 className="menu__title">Skills</h3>
                <AboutSVG></AboutSVG>
                <h6 className="menu__subtitle subtitle">
                  View programming
                </h6>
              </a>

              <a className="ajax menu__link" href="#work">
                <h3 className="menu__title">Work</h3>
                <WorkSVG></WorkSVG>
                <h6 className="menu__subtitle subtitle">
                  View Case Studies
                </h6>
              </a>
          
              <a className="ajax menu__link" href="#contact">
                <h3 className="menu__title">Contact</h3>
                <ContactSVG></ContactSVG>
                <h6 className="menu__subtitle subtitle">
                  Get in touch
                </h6>
              </a>
            </div>
          
            <h6 className="menu__good-people">
              Thanks to these <a className="ajax" href="good-people"><small>good people</small></a> who've helped me a long the way.
            </h6>
          </div>
    )
}