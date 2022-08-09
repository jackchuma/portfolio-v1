import React from 'react';

import { ComponentWrap } from '../../wrapper';
import { useStateContext } from '../../context/StateContext';

const Header = ({ isVisible }) => {
  const { setActive } = useStateContext();

  if (isVisible) setActive('home');

  return (
    <div>Header</div>
  )
}

export default ComponentWrap(Header, 'home');