import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="www.instagram.com"
        className="home__social-icon"
        target="__blank"
      >
        <i className="uil uil-instagram"></i>
      </a>

      <a href="www.dribbble.com" className="home__social-icon" target="__blank">
        <i className="uil uil-dribbble"></i>
      </a>

      <a
        href="https://github.com/LeonardoFate"
        className="home__social-icon"
        target="__blank"
      >
        <i className="uil uil-github-alt"></i>
      </a>
    </div>
  );
};

export default Social;
