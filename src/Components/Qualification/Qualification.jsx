import React, { useState } from 'react';
import './qualification.css';

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className='qualification section'>
      <h2 className='section__title'>Qualification</h2>
      <span className='section__subtitle'>My personel journey</span>

      <div className='qualification__container container'>
        <div className='qualification__tabs'>
          <div
            className={
              toggleState === 1
                ? 'qualification__button button--flex qualification__active'
                : 'qualification__button button--flex '
            }
            onClick={() => toggleTab(1)}>
            <i className='uil uil-graduation-cap qualification__icon'></i>
            Education
          </div>
          <div
            className={
              toggleState === 2
                ? 'qualification__button button--flex qualification__active'
                : 'qualification__button button--flex '
            }
            onClick={() => toggleTab(2)}>
            <i className='uil uil-briefcase qualification__icon'></i>Experience
          </div>
        </div>
        <div className='qualification__sections'>
          <div
            className={
              toggleState === 1
                ? 'qualification__content qualification__content-active'
                : 'qualification__content '
            }>
            <div className='qualification__data'>
              <div>
                <h3 className='qualification__title'>
                  {' '}
                  Bachelor of Computer Applications.
                </h3>
                <span className='qualification__subtitle'>India - NGMC</span>

                <div className='qualification__calender'>
                  <i className='uil uil-calendar-alt'>2022 - present</i>
                </div>
              </div>
              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
            </div>
            <div className='qualification__data'>
              <div></div>
              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
              <div>
                <h3 className='qualification__title'>
                  Study(Higher Education)
                </h3>
                <span className='qualification__subtitle'>India - ptp</span>

                <div className='qualification__calendar'>
                  <i className='uil uil-calendar-alt'> 2020 - 2022</i>
                </div>
              </div>
            </div>

            <div className='qualification__data'>
              <div>
                <h3 className='qualification__title'>Study</h3>
                <span className='qualification__subtitle'>
                  India - JKP
                </span>

                <div className='qualification__calendar'>
                  <i className='uil uil-calendar-alt'>2012 -2019</i>
                </div>
              </div>
              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
            </div>
            <div className='qualification__data'>
              <div></div>
              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
              <div>
                <h3 className='qualification__title'>Study</h3>
                <span className='qualification__subtitle'>India - Oxford</span>

                <div className='qualification__calendar'>
                  <i className='uil uil-calendar-alt'>2010 - 2012</i>
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? 'qualification__content qualification__content-active'
                : 'qualification__content '
            }>
            <div className='qualification__data'>
              <div>
                <h3 className='qualification__title'>Freelancer</h3>
                <span className='qualification__subtitle'>India - Home</span>

                <div className='qualification__calendar'>
                  <i className='uil uil-calendar-alt'>2024 - present</i>
                </div>
              </div>
              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
            </div>
            <div className='qualification__data'>
              <div></div>
              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
              <div>
                <h3 className='qualification__title'>Job Name</h3>
                <span className='qualification__subtitle'>
                  Country - Institute
                </span>

                <div className='qualification__calendar'>
                  <i className='uil uil-calendar-alt'>Date - Date</i>
                </div>
              </div>
            </div>

            <div className='qualification__data'>
              <div>
                <h3 className='qualification__title'>Job Name</h3>
                <span className='qualification__subtitle'>
                  Country - Institute
                </span>

                <div className='qualification__calendar'>
                  <i className='uil uil-calendar-alt'>Date - Date</i>
                </div>
              </div>
              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
