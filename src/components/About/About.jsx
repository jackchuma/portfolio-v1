import React from 'react';

import { AppWrap, MotionWrap } from '../../wrapper';

const About = () => {
  return (
    <div>About</div>
  )
}

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg'
);