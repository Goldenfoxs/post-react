import React from "react";

function Contact() {
    return(
        <div className="contact">
            <div className="connection">
                <p className="contact_connection_main">
                    Як з нами зв'язатися?
                </p>
                <a href="#" className="link">Telegram</a>
                <a href="#" className="link">Viber</a>
                <a href="#" className="link">Skype</a>
            </div>
            <div className="services">
                <p className="contact_connection_main">
                    Послуги
                </p>
                <a href="#" className="services_info">
                    Landing page
                </a>
                <a href="#" className="services_info">
                    Корпоративні сайти
                </a>
                <a href="#" className="services_info">
                    Інтернет магазин
                </a>
                <a href="#" className="services_info">
                    Сайт-візитка
                </a>
                <a href="#" className="services_info">
                    Просування та аналітика сайту
                </a>
            </div>
            <div className="information">
                <p className="contact_connection_main">
                    Інформація
                </p>
                <a href="#" className="services_info">
                    Про нас
                </a>
                <a href="#" className="services_info">
                    Послуги
                </a>
                <a href="#" className="services_info">
                    Портфоліо
                </a>
                <a href="#" className="services_info">
                    Форма зворотнього зв'язку
                </a>
            </div>
        </div>
    )    
};

export default Contact;