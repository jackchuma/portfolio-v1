import React from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';

import './Navbar.scss';

const sections = ['home', 'about', 'work', 'skills', 'contact'];

const Navbar = () => {

  function toggleHiddenMenu(show) {
    const menu = document.getElementById('hidden');
    if (show) menu.style.transform = 'translateX(0)';
    else menu.style.transform = 'translateX(101%)';
  }

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo logo-text'>
        <a href={'#home'}>
          <p>Jack <span>Chuma</span></p>
        </a>
      </div>
      <ul className='app__navbar-links'>
        {sections.map(item => (
          <li className='app__flex p-text' key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <div className='app__navbar-menu'>
        <HiMenuAlt4 onClick={() => toggleHiddenMenu(true)} />
        <div id='hidden' className='app__navbar-menu-hidden'>
          <HiX onClick={() => toggleHiddenMenu(false)} />
          <ul>
            {sections.map(item => (
              <li key={item}>
                <a href={`#${item}`} onClick={() => toggleHiddenMenu(false)}>{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;