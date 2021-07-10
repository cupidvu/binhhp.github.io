import React from "react";
import TypedSpeedString from "../../themes/TypedSpeedString";
import LinkedinSVG from "../../themes/svg/LinkedinSVG";
import GithubSVG from "../../themes/svg/GithubSVG";
import MyCV from "../../assets/cv/CV_VuTatBinh.pdf";
import "./css/about.css";

export default function About()
{
    return (
        <section id="about" className="section section--about">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xs-12 col-md-11 col-md-centered col-lg-10 col-lg-push-1">
                                <div className="row">
                                    <div className="col-xs-12">
                                        <div className="heading">
                                            <h1 className="heading__title">
                                                <img alt="coder" src="https://media.giphy.com/media/WUlplcMpOCEmTGBtBW/giphy.gif" width="30"/>
                                                &nbsp;&nbsp;Binhhp&nbsp;&nbsp;
                                                <img alt="coder" src="https://media.giphy.com/media/WUlplcMpOCEmTGBtBW/giphy.gif" width="30"/>
                                            </h1>
                                            <h4 className="heading__subtitle subtitle">
                                                <TypedSpeedString 
                                                strings={["Front-end ReactJS Developer", "Back-end Asp.Net Developer"]}>
                                                </TypedSpeedString>
                                            </h4>
                                            <div className="download-cv" >
                                                <a
                                                href={MyCV} target="_blank" 
                                                download rel="noopener noreferrer">
                                                    <img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width="30" alt="Download my CV!"/>
                                                    &nbsp;My CV!&nbsp;
                                                    <img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width="30" alt="Download my CV!"/>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-lg-4 col-lg-push-8 col-xl-3 col-xl-push-9">
                                        <div className="row">
                                            <div className="col-xs-6 col-sm-4 col-sm-push-2 col-lg-push-0 col-lg-12 text-xs-right">
                                                <a href="https://www.linkedin.com/in/vu-binh-7a28a817b/"
                                                 className="ajax menu__link menu__link--alt" 
                                                 target="_blank"
                                                 rel="noopener noreferrer">
                                                    <LinkedinSVG></LinkedinSVG>
                                                    <h4 className="menu__title">Linkedin</h4>
                                                    <h6 className="menu__subtitle">View Profile</h6>
                                                </a>
                                            </div>
                                            <div className="col-xs-6 col-sm-4 col-sm-push-2 col-lg-push-0 col-lg-12">
                                                <a className="menu__link menu__link--alt" 
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    href="https://github.com/hellomichael">
                                                    <GithubSVG></GithubSVG>
                                                    <h4 className="menu__title">Github</h4>
                                                    <h6 className="menu__subtitle">View Repository</h6>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-lg-8 col-lg-pull-4 col-xl-9 col-xl-pull-3">
                                        <p>I am Binh, my fullname is Vu Tat Binh, a front end ReactJS and back end Asp.Net developer from Hai Phong City, Vietnam. I have knowledge in web site building and customization.</p>
                                        <p><i className="icon-phone4"></i>&nbsp;+84 988401921</p>
                                        <p><i className="icon-envelope1"></i>&nbsp;binhhp20@gmail.com</p>
                                        <p><i style={{fontSize: `21px`}} className="icon-home"></i>&nbsp;99 Nguyễn Chí Thanh, Đống Đa, Láng Thượng, Hà Nội.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
    )
}