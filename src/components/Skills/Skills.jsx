import React from 'react';

import { ComponentWrap, MotionWrap } from '../../wrapper';
import { useStateContext } from '../../context/StateContext';

const Skills = ({ isVisible }) => {
  const { setActive } = useStateContext();

  if (isVisible) setActive('skills');

  return (
    <div>Skills</div>
  )
}

export default ComponentWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills'
);