import React from 'react';

import { ComponentWrap, MotionWrap } from '../../wrapper';
import { useStateContext } from '../../context/StateContext';

const Footer = ({ isVisible }) => {
  const { setActive } = useStateContext();

  if (isVisible) setActive('contact');

  return (
    <div>Footer</div>
  )
}

export default ComponentWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact'
);