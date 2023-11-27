import React from "react";
import "./portfolio.css";
import Work from "./Work";
const Portfolio = () => {
  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Portafolio</h2>
      <span className="section__subtitle">Introduccion</span>
      <Work />
    </section>
  );
};

export default Portfolio;
