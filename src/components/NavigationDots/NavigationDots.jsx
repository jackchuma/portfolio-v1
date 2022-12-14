import React from 'react';

import { useStateContext } from '../../context/StateContext';

const NavigationDots = () => {
  const { active } = useStateContext();
  return (
    <div className='app__navigation'>
      {['home', 'about', 'projects', 'experience', 'contact'].map((item, i) => (
        <a
          href={`#${item}`}
          key={item + i}
          className='app__navigation-dot'
          style={active === item ? { backgroundColor: 'var(--primary-color)' } : {}}
        >
          <div></div>
        </a>
      ))}
    </div>
  )
}

export default NavigationDots;