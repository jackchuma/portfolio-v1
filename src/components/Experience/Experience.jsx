import React, { useState, useEffect } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { MdLocationOn } from 'react-icons/md';
import { FaExternalLinkSquareAlt } from 'react-icons/fa';

import { ComponentWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Experience.scss';

const Experience = () => {
  const [experiences, setExperiences] = useState([]);
  const [activeExperience, setActiveExperience] = useState({ company: '' });

  useEffect(() => {
    const query = '*[_type == "experience"]';
    client.fetch(query).then(data => {
      setExperiences(data);
      setActiveExperience(data[0]);
    });
  }, []);

  function toggleActive(experience) {
    if (activeExperience.company === experience.company) {
      setActiveExperience({ company: '' });
    }  else setActiveExperience(experience);
  }

  return (
    <>
      <h2 className='head-text'>Professional Experience</h2>
      <div className='app__experience-container'>
        {experiences?.map((experience, i) => (
          <div className='app__experience' key={i}>
            <div className='app__experience-head' onClick={() => toggleActive(experience)}>
              <div className='app__experience-title'>
                <h4>{experience.jobTitle} @ {experience.company}</h4>
              </div>
              <div className='app__experience-dates app__flex'>
                <h4>{experience.startingYear} - {experience.endingYear}</h4>
                <AiOutlinePlus 
                  className={activeExperience.company === experience.company ? 'hidden' : ''} 
                />
                <AiOutlineMinus 
                  className={activeExperience.company === experience.company ? '' : 'hidden'} 
                />
              </div>
            </div>
            <div id={experience.company} className={`app__experience-body ${activeExperience.company === experience.company ? '' : 'close-down'}`}>
              <div className='app__experience-body-content'>
                <div className='app__experience-company-info'>
                  <div className='app__experience-location'>
                    <MdLocationOn />
                    <p>{experience.location}</p>
                  </div>
                  <div className='app__experience-link'>
                    <a href={experience.companyWebsite} target='_blank' rel='noreferrer'>
                      <p><FaExternalLinkSquareAlt /> {experience.companyWebsite}</p>
                    </a>
                  </div>
                </div>
                <div className='app__experience-description'>
                  <p>{experience.description}</p>
                </div>
                <div className='app__experience-tags'>
                  {experience.tags?.map((tag, i) => (
                    <div className='app__experience-tag' key={tag + i}>
                      <p className='p-text'>{tag}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className='app__experience-body-logo app__flex'>
                <img src={urlFor(experience.logo)} alt='logo' />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default ComponentWrap(
  MotionWrap(Experience, 'app__experiences'),
  'experience'
);