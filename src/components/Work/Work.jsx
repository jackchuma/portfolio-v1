import React from 'react';

import { ComponentWrap, MotionWrap } from '../../wrapper';
import { useStateContext } from '../../context/StateContext';

const Work = ({ isVisible }) => {
  const { setActive } = useStateContext();

  if (isVisible) setActive('work');

  return (
    <div>Work</div>
  )
}

export default ComponentWrap(
  MotionWrap(Work, 'app__works'),
  'work',
  'app__primarybg'
);