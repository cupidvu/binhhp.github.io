import "./message.css";
import React, { useState } from "react";

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
                        <div className="meeychat__body">
                            <div className="meeychat__address">
                                <p>To email: binhhp20@gmail.com</p>
                            </div>
                            <div className="meeychat__subtitle">
                                <input placeholder="Subscribe"/>
                            </div>
                            <div className="meeychat__content">
                                <textarea className="form-text" placeholder="Content"></textarea>
                            </div>
                        </div>
                        <div className="meeychat__footer">
                            <button title="Send mail for me" type="submit" className="send__mail">
                                <i className="icon-paper-plane"></i>
                            </button>
                        </div>
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