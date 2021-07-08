import React from "react";
import themes from "../../assets/includes/these-beats-are-dope/logo-inverse.png";
import themesthumb from "../../assets/includes/these-beats-are-dope/thumbnail.jpg";
import kenos from "../../assets/includes/keno/logo-inverse.png";
import kenosthumb from "../../assets/includes/keno/thumbnail.jpg";
import thisis from "../../assets/includes/this-is-neat/logo-inverse.png";
import thisisthum from "../../assets/includes/this-is-neat/thumbnail.jpg";
import web from "../../assets/includes/web-directions/logo-inverse.png";
import webthum from "../../assets/includes/web-directions/thumbnail.jpg";
import { Link } from "react-router-dom";

export default function Works()
{
    return (
        <section id="work" className="section section--work">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xs-12 col-md-11 col-md-centered col-lg-10 col-lg-push-1">
                                <div className="heading p-t-0">
                                    <h1 className="heading__title">Works</h1>
                                    <h6 className="heading__subtitle">
                                        A few projects have been built
                                    </h6>
                                </div>
                                <div className="section__row row row-thin">
                                    <div className="col-xs-12 col-sm-8">
                                        <Link to="these-beats-are-dope" className="ajax project project--these-beats-are-dope" style={{backgroundImage: `url(${themesthumb})`}}>
                                            <img className="project__logo" src={themes} alt="Pixi.js" />
                                            <span className="project__background"></span>

                                            <div className="project__description">
                                                <h4 className="project__title">
                                                    These Beats Are Dope
                                                </h4>

                                                <small className="project__caption">
                                                    An interactive playlist celebrating Kanye West's contribution to music, fashion, and art.
                                                </small>

                                                <small className="project__link">
                                                    View case study
                                                </small>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-xs-12 col-sm-4">
                                        <Link to="keno" className="ajax project project--keno" style={{backgroundImage: `url(${kenosthumb})`}}>
                                            <img className="project__logo" src={kenos} alt="Online gambling" />
                                            <span className="project__background"></span>

                                            <div className="project__description">
                                                <h4 className="project__title">
                                                    Keno
                                                </h4>

                                                <small className="project__caption">
                                                    An Angular app based on Australia's <br className="hidden-lg-down" />favorite lottery game.
                                                </small>

                                                <small className="project__link">
                                                    View case study
                                                </small>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="section__row row row-thin">
                                    <div className="col-xs-12 col-sm-4">
                                        <Link to="this-is-neat" className="ajax project project--this-is-neat" style={{backgroundImage: `url(${thisisthum})`}}>
                                            <img className="project__logo" src={thisis} alt="Bond back cleaning Sydney" />
                                            <span className="project__background"></span>

                                            <div className="project__description">
                                                <h4 className="project__title">
                                                    This is Neat
                                                </h4>

                                                <small className="project__caption">
                                                    A cleaning platform keeping tenants happy all across Australia.
                                                </small>

                                                <small className="project__link">
                                                    View case study
                                                </small>
                                            </div>
                                        </Link>
                                    </div>

                                    <div className="col-xs-12 col-sm-8">
                                        <Link to="web-directions" className="ajax project project--web-directions" style={{backgroundImage: `url(${webthum}`}}>
                                            <img className="project__logo" src={web} alt="Bond back cleaning Sydney" />
                                            <span className="project__background"></span>

                                            <div className="project__description">
                                                <h4 className="project__title">
                                                    Web Directions South
                                                </h4>

                                                <small className="project__caption">
                                                    A WebGl title sequence <br className="hidden-lg-down" />pushing the boundaries of what's capable in the browser.
                                                </small>

                                                <small className="project__link">
                                                    View case study
                                                </small>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </section>
    )
}