import React from 'react';
import { useStateContext } from '../context/StateContext';

const ComponentWrap = (Component, idName, classNames) => function HOC() {
  const { setActive } = useStateContext();
  return (
    <div onMouseEnter={() => setActive(idName)} id={idName} className={`app__container ${classNames}`}>
        <div className='app__wrapper app__flex'>
            <Component />
            <div className='copyright'>
                <p className='p-text'>@2022 Jack Chuma</p>
                <p className='p-text'>All rights reserved</p>
            </div>
        </div>
    </div>
  )
}

export default ComponentWrap;