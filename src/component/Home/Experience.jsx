import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import "./css/experience.css";
import Bachelor from "../../themes/svg/Bachelor";
import WorkingSVG from "../../themes/svg/WorkingSVG";
import FamilySVG from "../../themes/svg/FamilySVG";

export default function Experience(){

    return (
        <section id="experience" className="section section--experience">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="heading p-t-0">
                            <h1 className="heading__title">Experience</h1>
                            <h6 className="heading__subtitle">
                            Experience
                            </h6>
                        </div>
                        <div className="section__row row">
                        <VerticalTimeline>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: '#C33', color: '#fff' }}
                                contentArrowStyle={{ borderRight: '7px solid  #C33' }}
                                date="11/2019 - 2/2020"
                                iconStyle={{ background: '#C33', color: '#fff' }}
                                icon={<WorkingSVG />}
                            >
                                <h3 className="vertical-timeline-element-title section--experience-title">
                                    Backend Asp.Net Developer
                                </h3>
                                <p className="section--experience-subtitle">
                                    <strong>Company:</strong>&nbsp;Công ty TNHH Công nghệ và truyền thông 3i
                                </p>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: '#2596be', color: '#fff' }}
                                contentArrowStyle={{ borderRight: '7px solid  #2596be' }}
                                date="2017 - 2021"
                                iconStyle={{ background: '#2596be', color: '#fff' }}
                                icon={<Bachelor />}
                            >
                                <h3 className="vertical-timeline-element-title section--experience-title">Bachelor’s Degree</h3>
                                <p className="section--experience-subtitle">
                                    <strong>University:</strong>&nbsp;Universiry Of Transport And Communications
                                </p>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                iconStyle={{ background: '#e869a3', color: '#fff' }}
                                icon={<FamilySVG />}
                            />
                            </VerticalTimeline>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}