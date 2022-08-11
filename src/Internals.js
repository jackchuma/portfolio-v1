import React from 'react';

import { About, Footer, Header, Navbar, NavigationDots, Experience, SocialMedia, Projects } from './components';

const Internals = () => {
  return (
    <div className='app__container-outter'>
      <SocialMedia />
      <div className='app__wrapper-outter'>
        <div className='app'>
          <Navbar />
          <Header />
          <About />
          <Projects />
          <Experience />
          <Footer />
        </div>
      </div>
      <NavigationDots />
    </div>
  )
}

export default Internals;