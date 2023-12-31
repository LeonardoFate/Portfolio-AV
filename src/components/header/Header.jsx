import React, { useState } from 'react'
import "./header.css";
const Header = () => {
    
/*================ Toggle Menu ===================*/
    const [Toggle, showMenu] = useState(false);
    
  return (
    <header className="header">
        <nav className="nav container">
            <a href="index.html" className="nav__logo">Anthony Villamar</a>
        
            <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                <ul className="nav__list grid">
                    <li className="nav__item">
                        <a href="#home" className="nav__link active-link">
                            <i className="uil uil-estate nav__icon"></i>
                            <span className="nav__text">Inicio</span>
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#about" className="nav__link">
                            <i className="uil uil-user nav__icon"></i>
                            <span className="nav__text">Sobre Mi</span>
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#skills" className="nav__link">
                            <i className="uil uil-file-alt nav__icon"></i>
                            <span className="nav__text">Habilidades</span>
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#experience" className="nav__link">
                            <i className="uil uil-briefcase-alt nav__icon"></i>
                            <span className="nav__text">Experiencia</span>
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#portfolio" className="nav__link">
                            <i className="uil uil-scenery nav__icon"></i>
                            <span className="nav__text">Portafolio</span>
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#contact" className="nav__link">
                            <i className="uil uil-message nav__icon"></i>
                            <span className="nav__text">Contacto</span>
                        </a>
                    </li>
                </ul>

                <i className="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
            </div>

            <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                <i className="uil uil-apps"></i>
            </div>
        </nav>
    </header>
  )
}

export default Header
