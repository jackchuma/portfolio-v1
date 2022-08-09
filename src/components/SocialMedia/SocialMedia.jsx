import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div>
        <a className='app__flex' href='https://www.linkedin.com/in/john-chuma-a42327a9/' target='_blank' rel='noreferrer'>
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a className='app__flex' href='https://github.com/jackchuma' target='_blank' rel='noreferrer'>
          <BsGithub />
        </a>
      </div>
    </div>
  )
}

export default SocialMedia;