import "./message.css";

export default function MessageEmail(){
    return(
        <div>
            <div className="message-widget" title="Send mail to me!!">
            <button className="meeychat-btn-toggle">
                <i className="icon-letter1"></i>
            </button>
            </div>
            <div class="meeychat__opened meeychat__row"> 
                <div class="meeychat__col">
                    <div class="meeychat__list">
                        <div class="meeychat__header">
                            <div class="meeychat__header-avatar meeychat__bg-white">
                                <div class="meeychat__header-logo meeychat__absolute-full">
                                </div>
                            </div> 
                            <div class="meeychat__header-user">
                                <div class="meeychat__header-name">
                                    Danh sách chat
                                </div>
                            </div> 
                            <div class="meeychat__header-close">
                                <button class="meeychat__header-button meeychat__header-button--close">
                                    Chăm sóc khách hàng
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}