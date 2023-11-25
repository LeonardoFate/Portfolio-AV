import React, { useState } from "react";
import './experience.css';
const Experience = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) =>{
      setToggleState(index);
    }
    
  return (
    <section className="experience section" id="experience">
      <h2 className="section__title">EXPERIENCIA</h2>
      <span className="section__subtitle">My personel journey</span>

      <div className="experience__container container">
        <div className="experience__tabs">
          <div className={toggleState ===1 ?"experience__button experience__active buttom--flex": "experience__button button--flex"} onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap experience__icon"></i>{" "}
            Educacion 
          </div>
          <div className={toggleState ===2  ?"experience__button experience__active buttom--flex": "experience__button button--flex" }onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt experience__icon"></i>{" "}   
            Experiencia
          </div>
        </div>

        <div className="experience__sections">
          <div className={toggleState ===1 ? "experience__content experience__content-active": "experience__content"}>
            <div className="experience__data">
              <div>
                <h3 className="experience__title">Computacion</h3>
                <span className="experience__subtitle">
                  Guayaquil - Universidad Politecnica Salesiana
                </span>
                <div className="experience__calender">
                  <i className="uil uil-calendar-alt"></i>2021 - presente
                </div>
              </div>
              <div>
                <span className="experience__rounder"></span>
                <span className="experience__line"></span>
              </div>
            </div>

            <div className="experience__data">
              <div></div>
              <div>
                <span className="experience__rounder"></span>
                <span className="experience__line"></span>
              </div>
              <div>
                <h3 className="experience__title">Computacion</h3>
                <span className="experience__subtitle">
                  Guayaquil - Universidad Politecnica Salesiana
                </span>
                <div className="experience__calender">
                  <i className="uil uil-calendar-alt"></i>2021 - presente
                </div>
              </div>
            </div>


            <div className="experience__data">
              <div>
                <h3 className="experience__title">Computacion</h3>
                <span className="experience__subtitle">
                  Guayaquil - Universidad Politecnica Salesiana
                </span>
                <div className="experience__calender">
                  <i className="uil uil-calendar-alt"></i>2021 - presente
                </div>
              </div>

              <div>
                <span className="experience__rounder"></span>
                <span className="experience__line"></span>
              </div>
            </div>

            <div className="experience__data">
              <div></div>
              <div>
                <span className="experience__rounder"></span>
                <span className="experience__line"></span>
              </div>
              <div>
                <h3 className="experience__title">Computacion</h3>
                <span className="experience__subtitle">
                  Guayaquil - Universidad Politecnica Salesiana
                </span>
                <div className="experience__calender">
                  <i className="uil uil-calendar-alt"></i>2021 - presente
                </div>
              </div>
            </div>
          </div>



          <div className={toggleState === 2 ? "experience__content experience__content-active": "experience__content"}>
            <div className="experience__data">
              <div>
                <h3 className="experience__title">dfdfsdfsdf</h3>
                <span className="experience__subtitle">
                  Guayaquil - Universidad Politecnica Salesiana
                </span>
                <div className="experience__calender">
                  <i className="uil uil-calendar-alt"></i>2021 - presente
                </div>
              </div>

              <div>
                <span className="experience__rounder"></span>
                <span className="experience__line"></span>
              </div>
            </div>

            <div className="experience__data">
              <div></div>
              <div>
                <span className="experience__rounder"></span>
                <span className="experience__line"></span>
              </div>
              <div>
                <h3 className="experience__title">asdasdasdasd</h3>
                <span className="experience__subtitle">
                  Guayaquil - Universidad Politecnica Salesiana
                </span>
                <div className="experience__calender">
                  <i className="uil uil-calendar-alt"></i>2021 - presente
                </div>
              </div>
            </div>


            <div className="experience__data">
              <div>
                <h3 className="experience__title">asdasdasdasdasd</h3>
                <span className="experience__subtitle">
                  Guayaquil - Universidad Politecnica Salesiana
                </span>
                <div className="experience__calender">
                  <i className="uil uil-calendar-alt"></i>2021 - presente
                </div>
              </div>

              <div>
                <span className="experience__rounder"></span>
                <span className="experience__line"></span>
              </div>
            </div>

            <div className="experience__data">
              <div></div>
              <div>
                <span className="experience__rounder"></span>
                <span className="experience__line"></span>
              </div>
              <div>
                <h3 className="experience__title">asdasdasdasd</h3>
                <span className="experience__subtitle">
                  Guayaquil - Universidad Politecnica Salesiana
                </span>
                <div className="experience__calender">
                  <i className="uil uil-calendar-alt"></i>2021 - presente
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
