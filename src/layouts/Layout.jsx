import feet from "../assets/img/feet.jpg";
import React from "react";
import { Link } from "react-router-dom";
import anh from "../assets/video/hello.gif";
import Message from "./MessageEmail";

export default function Layout({ children, menu, hanlderMenu }){
    return(
        <React.Fragment>
            <div className={menu ? "menu__wrapper menu--is-active" : "menu__wrapper"}>
                <div id="skrollr-body">
                    <div className="hello skrollable skrollable-between" data-0="height: 425px; transform: translateY(0px);" data-425="height: 0px; transform: translateY(100px)" 
                    style={{height: "425px", transform: "translateY(0px)"}}>
                        <img src={anh} id="hello__video" className="hello__video" alt="binhhp"/>
                    </div>
                </div>
                <Link to="" onClick={() => hanlderMenu()} className="menu__toggle">
                    <i className={ menu ? "icon-clear" : "icon-menu"}></i>
                </Link>
                <Link target="_blank" className="sprite sprite--awwwards" to="http://www.awwwards.com/best-websites/hellomichael?subsection=all">&nbsp;</Link>
                { children }
                <div className="hello__feet skrollable skrollable-before" data-1600-end="top: -500px" data-425-end="top: 0" style={{top: "-500px"}}>
                    <img src={feet} alt="Feet" />
                </div>
            </div>
            <Message />
        </React.Fragment>
    )
}