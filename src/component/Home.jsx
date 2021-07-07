import Layout from "../layouts/Layout";
import React from "react";
import themes from "../assets/includes/these-beats-are-dope/logo-inverse.png";
import themesthumb from "../assets/includes/these-beats-are-dope/thumbnail.jpg";
import kenos from "../assets/includes/keno/logo-inverse.png";
import kenosthumb from "../assets/includes/keno/thumbnail.jpg";
import thisis from "../assets/includes/this-is-neat/logo-inverse.png";
import thisisthum from "../assets/includes/this-is-neat/thumbnail.jpg";
import web from "../assets/includes/web-directions/logo-inverse.png";
import webthum from "../assets/includes/web-directions/thumbnail.jpg";
import LinkedinSVG from "../layouts/svg/LinkedinSVG";
import GithubSVG from "../layouts/svg/GithubSVG";
import handleft from "../assets/img/hand-left.png";
import handright from "../assets/img/hand-right.png";
import { Link } from "react-router-dom";
import TypedSpeedString from "../themes/TypedSpeedString";

export default function Home(){
    return (
        <Layout>
            <div id="content" data-start="modules/index" className="skrollable skrollable-between">
                <div className="hello__hand hello__hand--left">
                    <img src={handleft} alt="Left hand" />
                </div>
                <div className="hello__hand hello__hand--right">
                    <img src={handright} alt="Right hand" />
                </div>
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
                                        <p>I am Binh, a front end ReactJS and back end Asp.Net developer from Hai Phong City, Vietnam. I have rich experience in web site building and customization.</p>
                                        <p><i className="fa fa-phone"></i>&nbsp;+84 988401921</p>
                                        <p><i className="fa fa-envelope-open-text"></i>&nbsp;binhhp20@gmail.com</p>
                                        <p><i className="fa fa-home"></i>&nbsp;99 Nguyễn Chí Thanh, Đống Đa, Láng Thượng, Hà Nội.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="skill" className="section section--skill">
                    <div className="container-fluid">
                        <div className="col-xs-12 col-md-11 col-md-centered col-lg-10 col-lg-push-1">
                            <div className="heading">
                                        <h1 className="heading__title">Skill</h1>
                                        <h6 className="heading__subtitle">
                                            Programing language, Framework & Libraries
                                            <br className="hidden-xs-down" />
                                            Database, Version control, IDE
                                            <br className="hidden-xs-down" />
                                            Knowledge
                                        </h6>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="skill-box">
                                            <h5>Programing language</h5>
                                            <ul>
                                                <li>HTML/CSS/SASS</li>
                                                <li>Javascript</li>
                                                <li>Typescript</li>
                                                <li>Solidity</li>
                                            </ul>
                                            <h5>Frameworks &amp; Libraries</h5>
                                            <ul>
                                                <li>ReactJS / Redux / NodeJS</li>
                                                <li>Bootstrap/ Ant design/ Material ui</li>
                                                <li>Resful API / Json / XML</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="skill-box">
                                            <h5>Database</h5>
                                            <ul>
                                                <li>MS SQL</li>
                                                <li>Firebase</li>
                                            </ul>
                                            <h5>Version control</h5>
                                            <ul>
                                                <li>Git</li>
                                                <li>SVM</li>
                                            </ul>
                                            <h5>IDE</h5>
                                            <ul>
                                                <li>Visual Studio</li>
                                                <li>Visual Studio Code</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="skill-box">
                                            <h5>Programing language</h5>
                                            <ul>
                                                <li>HTML/CSS/SASS</li>
                                                <li>Javascript</li>
                                                <li>Typescript</li>
                                                <li>Solidity</li>
                                            </ul>
                                            <h5>Frameworks &amp; Libraries</h5>
                                            <ul>
                                                <li>ReactJS / Redux / NodeJS</li>
                                                <li>Bootstrap/ Ant design/ Material ui</li>
                                                <li>Resful API / Json / XML</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </section>
                <section id="work" className="section section--work">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xs-12 col-md-11 col-md-centered col-lg-10 col-lg-push-1">
                                <div className="heading p-t-0">
                                    <h1 className="heading__title">Work</h1>
                                    <h6 className="heading__subtitle">
                                        A showcase of design, 
                                        <br className="hidden-xs-down" />
                                        development and experiments
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
                                <div className="section__row row row-thin">
                                    <div className="col-xs-12 col-sm-4">
                                        <Link to="this-is-neat" className="ajax project project--this-is-neat" style={{backgroundImage: `url(${thisisthum}`}}>
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
                <section id="contact" className="section section--contact p-t-0">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xs-12 col-md-11 col-md-centered col-lg-10 col-lg-push-1">
                                <div className="heading">
                                    <h1 className="heading__title">Contact</h1>
                                    <h6 className="heading__subtitle">
                                        Currently available for contract or full-time work, <br className="hidden-xs-down" />
                                        and would love to hear from you
                                    </h6>
                                </div>

                                <div className="row">
                                    <div className="col-xs-12 col-sm-5 col-md-4">
                                        <small className="contact">
                                            michael@hellomichael.com<br />

                                            Vancouver / Melbourne<br />

                                            <Link target="_blank" to="http://ca.linkedin.com/in/hellomichael/">LinkedIn</Link> / <Link target="_blank" to="https://www.facebook.com/hello.michael.ngo">Facebook</Link> / <Link target="_blank" to="https://twitter.com/hellomichaelngo">Twitter</Link> / <Link target="_blank" to="https://instagram.com/hellomichaelngo">Instagram</Link>
                                        </small>
                                    </div>

                                    <div className="col-xs-12 col-sm-7 col-md-8">
                                        <form id="contact-form" className="form" method="post" action="includes/mailer">
                                            <input type="text" name="foo" style={{display: "none"}} />

                                            <div className="form__control">
                                                <input className="form__input" type="text" id="name" name="name" placeholder="Your name" />

                                                {/* <label className="form__label" for="name">
                                                    <svg className="form__icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g fill="#FFF"><path d="M8.518 11.45h.146c-.04-.032-.08-.065-.114-.1-1.157-1.043-2.038-3.074-2.038-4.714 0-2.322 1.9-3.848 3.697-3.848 1.795 0 3.6 1.65 3.6 3.972 0 1.64-.976 3.608-2.187 4.616.248.947 1.607 1.257 4.41 2.025 3.113.854 2.575 2.97 2.566 4.388H1.8c-.01-1.418-.78-3.534 2.332-4.387 2.725-.75 4.082-1.062 4.386-1.95z"></path><path d="M8.663 11.45h-.145l.03-.1c.035.038.075.068.115.1z"></path></g></svg>
                                                </label> */}
                                            </div>

                                            <div className="form__control">
                                                <input className="form__input" type="text" id="email" name="email" placeholder="Your email" />

                                                {/* <label className="form__label" for="email">
                                                    <svg className="form__icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g fill="#FFF"><path d="M10.267 12.27c-.093.094-.22.145-.352.145s-.26-.055-.355-.145L3.048 5.755C3.028 5.835 3 5.912 3 6v8c0 .552.447 1 1 1h12c.554 0 1-.447 1-1V6c0-.138-.023-.27-.076-.387l-6.657 6.657z"></path><path d="M9.915 11.208l6.187-6.188c-.038-.003-.065-.02-.1-.02H4c-.086 0-.164.03-.245.048l6.16 6.16z"></path></g></svg>
                                                </label> */}
                                            </div>

                                            <div className="form__control">
                                                <textarea className="form__textarea" id="message" name="message" placeholder="Your message"></textarea>

                                                {/* <label className="form__label" for="message">
                                                    <svg className="form__icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g fill="#FFF"><path d="M2.99 17l4.18-1.124-3.06-3.057M15.043 8.02l-7.497 7.498-3.073-3.072 7.497-7.5zM15.653 3.46c-.61-.613-1.57-.613-2.182 0L12.33 4.6l3.08 3.08 1.143-1.142c.61-.61.61-1.57 0-2.182l-.897-.897z"></path></g></svg>
                                                </label> */}
                                            </div>

                                            <div className="row row-xs-center">
                                                <div className="col-xs-7 col-md-9">
                                                    <small className="form__error"></small>
                                                </div>

                                                <div className="col-xs-5 col-md-3">
                                                    <button className="form__submit pull-xs-right" type="submit">Submit</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    )
}