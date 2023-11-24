import React from 'react'

const Infor = () => {
  return (
  <div className="about__info grid">
    <div className="about__box">
        <i className="bx bx-award about__icon"></i>
        <h3 className="about__title">Experiencia</h3>
        <span className="about_subtitle">1 año Freelancer</span>
    </div>

    <div className="about__box">
    <i className="bx bx-briefcase-alt about__icon"></i>
        <h3 className="about__title">Completado</h3>
        <span className="about_subtitle">+10 Projectos</span>
    </div>

    <div className="about__box">
    <i className="bx bx-support about__icon"></i>
        <h3 className="about__title">Soporte</h3>
        <span className="about_subtitle">Online 24/7</span>
    </div>
  </div>
  )
}

export default Infor
