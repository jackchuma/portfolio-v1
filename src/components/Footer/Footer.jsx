import React from 'react';

import { AppWrap, MotionWrap } from '../../wrapper';

const Footer = () => {
  return (
    <div>Footer</div>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
);