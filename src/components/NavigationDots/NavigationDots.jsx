import React from 'react';

import { useStateContext } from '../../context/StateContext';

const NavigationDots = () => {
  const { active } = useStateContext();
  return (
    <div className='app__navigation'>
      {['home', 'about', 'work', 'skills', 'testimonial', 'contact'].map((item, i) => (
        <a
          href={`#${item}`}
          key={item + i}
          className='app__navigation-dot'
          style={active === item ? { backgroundColor: '#313BAC' } : {}}
        >
          <div></div>
        </a>
      ))}
    </div>
  )
}

export default NavigationDots;