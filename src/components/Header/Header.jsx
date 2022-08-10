import React from 'react';

import { ComponentWrap } from '../../wrapper';
import './Header.scss';

const Header = () => {
  return (
    <>
      <div className='app__header-background'></div>
      <div className='app__header-image'></div>
      <h1 className='app__header'>Jack Chuma</h1>
      <h2 className='app__sub-header'>Software Engineer & Solidity Developer</h2>
    </>
  )
}

export default ComponentWrap(Header, 'home');