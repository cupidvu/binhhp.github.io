import helloweb from "../assets/video/hello.webm";
import hellomp4 from "../assets/video/hello.mp4";
import feet from "../assets/img/feet.jpg";
import React from "react";
import { Link } from "react-router-dom";


export default function Layout({ children }){
    return(
        <div className="menu__wrapper">
             <div id="skrollr-body">
                <div className="hello skrollable skrollable-between" data-0="height: 425px; transform: translateY(0px);" data-425="height: 0px; transform: translateY(100px)" 
                style={{height: "425px", transform: "translateY(0px)"}}>
                    <video id="hello__video" className="hello__video" autoPlay="" loop="">
                        <source src={helloweb} type="video/webm" />
                        <source src={hellomp4} type="video/mp4" />
                    </video>
                </div>
             </div>
            <Link to="" className="menu__toggle">
                <span></span>
                <span></span>
                <span></span>
            </Link>
            <Link target="_blank" className="sprite sprite--awwwards" to="http://www.awwwards.com/best-websites/hellomichael?subsection=all">&nbsp;</Link>
            { children }
            <div className="hello__feet skrollable skrollable-before" data-1600-end="top: -500px" data-425-end="top: 0" style={{top: "-500px"}}>
                <img src={feet} alt="Feet" />
            </div>
        </div>
    )
}