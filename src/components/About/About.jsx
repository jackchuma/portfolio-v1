import React, { useState, useEffect } from 'react';

import { ComponentWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './About.scss';

const About = () => {
  const [aboutInfo, setAboutInfo] = useState();
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "about"]';
    const skillsQuery = '*[_type == "skills"]';
    client.fetch(query).then(data => setAboutInfo(data));
    client.fetch(skillsQuery).then(data => setSkills(data));
  }, []);

  return (
    <>
      <h2 className='head-text'>About Me</h2>
      {aboutInfo && (
        <div className='app__about-description'>
          <img src={urlFor(aboutInfo[0].imgUrl)} alt='profile' />
          <p>{aboutInfo[0].description}</p>
        </div>
      )}
      <div className='app__skills app__flex'>
        <h3>A FEW OF MY CURRENT SKILLS:</h3>
        <div className='app__skills-container'>
          {skills?.map(skill => (
            <div className='app__skills-item app__flex'>
              <div className='app__flex'>
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className='p-text'>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default ComponentWrap(
  MotionWrap(About, 'app__about'),
  'about'
);