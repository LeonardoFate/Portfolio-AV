import React from "react";
import './footer.css'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Anthony</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              Sobre Mi
            </a>
          </li>
          <li>
            <a href="https://github.com/LeonardoFate" target="__blank" className="footer__link">
              Portafolio
            </a>
          </li>
          <li>
            <a href="#skills"   className="footer__link">
              Habilidades
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/anthony-villamar/"
            className="footer__social-link"
            target="__blank"
          >
            <i className="bx bxl-linkedin"></i>
          </a>

          {/* <a
            href="www.dribbble.com"
            className="footer__social-link"
            target="__blank"
          >
            <i className="bx bxl-dribbble"></i>
          </a> */}

          <a
            href="https://github.com/LeonardoFate"
            className="footer__social-link"
            target="__blank"
          >
            <i className="bx bxl-github"></i>
          </a>
        </div>

        <span className="footer__copy"> &#169;  Anthony Villamar. All rigths reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
