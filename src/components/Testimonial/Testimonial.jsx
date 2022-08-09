import React from 'react';

import { AppWrap, MotionWrap } from '../../wrapper';

const Testimonial = () => {
  return (
    <div>Testimonial</div>
  )
}

export default AppWrap(
  MotionWrap(Testimonial, 'app__testimonial'),
  'testimonials',
  'app__primarybg'
);