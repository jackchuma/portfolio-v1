import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { ComponentWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Projects.scss';

const projectTags = ['Front End', 'Back End', 'Full Stack', 'Blockchain', 'Next JS', 'All'];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [projects, setProjects] = useState([]);
  const [filterProjects, setFilterProjects] = useState([]);

  useEffect(() => {
    const query = '*[_type == "projects"]';
    client.fetch(query).then(data => {
      setProjects(data);
      setFilterProjects(data);
    });
  }, []);

  const handleFilter = item => {
    setActiveFilter(item);
    setAnimateCard({ y: 100, opacity: 0 });
    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 });
      if (item === 'all') setFilterProjects(projects);
      else setFilterProjects(projects.filter(project => project.tags.includes(item)));
    }, 500);
  }

  return (
    <>
      <h2 className='head-text'>check out some of my <span>work!</span></h2>
      <div className='app__projects-filter'>
        {projectTags.map((item, i) => (
          <div
            key={i}
            onClick={() => handleFilter(item)}
            className={`app__projects-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >{item}</div>
        ))}
      </div>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className='app__projects-portfolio'
      >
        {filterProjects?.map((project, i) => (
          <div className='app__project-item app__flex' key={i}>
            <div className='app__project-img app__flex'>
              <img src={urlFor(project.imgUrl)} alt={project.name} />
              <div className='app__project-hover app__flex'>
                <a href={project.projectLink} target='_blank' rel='noreferrer'>
                  <div className='app__flex'>
                    <AiFillEye />
                  </div>
                </a>
                <a href={project.codeLink} target='_blank' rel='noreferrer'>
                  <div className='app__flex'>
                    <AiFillGithub />
                  </div>
                </a>
              </div>
            </div>
            <div className='app__project-content app__flex'>
              <h4 className='bold-text'>{project.title}</h4>
              <p className='app__project-description p-text'>{project.description}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  )
}

export default ComponentWrap(
  MotionWrap(Projects, 'app__projects'),
  'projects'
);