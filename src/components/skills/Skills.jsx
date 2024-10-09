import React from 'react';
import Backend from './Backend';
import Frontend from './Frontend';
import BD from './BD';
import './skills.css';
const Skills = () => {
  return (
    <section className='skills section' id='skills'>
    <h2 className="section__title">Habilidades</h2>
    <span className='section__subtitle'>Tecnologias que uso</span>
    <div className="skills__container container grid">
    <Frontend />

    <Backend />

    <BD/>

    </div>

  </section>
  )
}

export default Skills;
