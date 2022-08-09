import React from 'react';
import { NavigationDots, SocialMedia } from '../components';

const AppWrap = (Component, idName) => function HOC() {
  return (
    <div className='app__container-outter'>
        <SocialMedia />
        <div className='app__wrapper-outter'>
            <Component />
        </div>
        <NavigationDots active={idName} />
    </div>
  )
}

export default AppWrap;