import React from 'react';

import { ComponentWrap, MotionWrap } from '../../wrapper';

const About = () => {
  return (
    <div>About</div>
  )
}

export default ComponentWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg'
);