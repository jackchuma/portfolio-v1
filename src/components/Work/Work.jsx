import React from 'react';

import { AppWrap, MotionWrap } from '../../wrapper';

const Work = () => {
  return (
    <div>Work</div>
  )
}

export default AppWrap(
  MotionWrap(Work, 'app__works'),
  'work',
  'app__primarybg'
);