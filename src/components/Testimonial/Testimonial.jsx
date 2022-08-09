import React from 'react';

import { ComponentWrap, MotionWrap } from '../../wrapper';
import { useStateContext } from '../../context/StateContext';

const Testimonial = ({ isVisible }) => {
  const { setActive } = useStateContext();

  if (isVisible) setActive('testimonial');

  return (
    <div>Testimonial</div>
  )
}

export default ComponentWrap(
  MotionWrap(Testimonial, 'app__testimonial'),
  'testimonial',
  'app__primarybg'
);