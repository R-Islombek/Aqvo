import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import Logo from "./images/logo.png"
import "./Navbar.css"

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('uz');

    const handleLanguageChange = (e) => {
        const lang = e.target.value;
        setSelectedLanguage(lang);
        i18n.changeLanguage(lang);
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <div className='navbar'>
                <div className='container'>
                    <div className="navbar__container">
                        <ul className='navbar__list'>
                            <li className='navbar__item navbar__left'>
                                <button className="navbar__burger" onClick={toggleSidebar}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </button>
                                <a href="#" className="navbar__link">{t("navbar.home")}</a>
                                <a href="#" className="navbar__link">{t("navbar.about")}</a>
                            </li>
                            
                            
                            <li className='navbar__item navbar__center'>
                                <a href="#" className="navbar__logo">
                                    <img className='navbar__logo' src={Logo} alt="Logo" />
                                </a>
                            </li>
                            
                            <li className='navbar__item navbar__right'>
                                <select 
                                    className="navbar__select" 
                                    value={selectedLanguage}
                                    onChange={handleLanguageChange}
                                >
                                    <option value="uz">UZ</option>
                                    <option value="ru">RU</option>
                                    <option value="en">ENG</option>
                                </select>
                                <button className='navbar__btn' onClick={openModal}>
                                    {t("navbar.button")}
                                </button>
                            </li>
                        </ul>
                    </div>
                </div> 
            </div>

            {isModalOpen && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal}>×</button>
                        <h2>{t("modal.title", "Ro'yxatdan o'tish")}</h2>
                        <form className="modal-form">
                            <input type="text" placeholder={t("modal.name", "Ismingiz")} />
                            <input type="email" placeholder={t("modal.email", "Email")} />
                            <input type="tel" placeholder={t("modal.phone", "Telefon")} />
                            <button type="submit" className="modal-submit-btn">
                                {t("modal.submit", "Yuborish")}
                            </button>
                        </form>
                    </div>
                </div>
            )}

            <div className={`sidebar ${isSidebarOpen ? 'sidebar--open' : ''}`}>
                <button className="sidebar-close" onClick={toggleSidebar}>×</button>
                <nav className="sidebar-nav">
                    <a href="#" className="sidebar-link">{t("navbar.home")}</a>
                    <a href="#" className="sidebar-link">{t("navbar.about")}</a>
                    <a href="#" className="sidebar-link">{t("sidebar.services", "Xizmatlar")}</a>
                    <a href="#" className="sidebar-link">{t("sidebar.products", "Mahsulotlar")}</a>
                    <a href="#" className="sidebar-link">{t("sidebar.contact", "Aloqa")}</a>
                </nav>
            </div>
            
            {isSidebarOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}
        </>
    )
}

export default Navbar;