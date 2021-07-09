import "./message.css";
import React, { useState } from "react";
import FormEmail from "./FormEmail";

export default function MessageEmail(){
    
    const [isMessage, setMessage] = useState(false);
    const hanlder = () => {
        setMessage(!isMessage);
    };

    return(
        <div>
            {
                isMessage ?
                <div id="open-message" className="meeychat__opened"> 
                    <div className="meeychat__list">
                        <div className="meeychat__header">
                            <div className="meeychat__header-avatar">
                                <div className="meeychat__header-logo">
                                    <i className="icon-mail11"></i>
                                </div>
                            </div> 
                            <div className="meeychat__header-user">
                                <div className="meeychat__header-name">
                                    Send email for me
                                </div>
                            </div> 
                            <div className="meeychat__header-close">
                                <button type="button" onClick={() => hanlder()} className="meeychat__header-button-close">
                                    <i className="icon-clear"></i>
                                </button>
                            </div>
                        </div>
                        <FormEmail></FormEmail>
                    </div>
                </div>
            :   <div onClick={() => hanlder()} className="message-widget" title="Send mail to me!!">
                    <button type="submit" className="meeychat-btn-toggle">
                        <i className="icon-mail11"></i>
                    </button>
                </div>
            }
        </div>
    )
}