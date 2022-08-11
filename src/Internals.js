import React from 'react';

import { About, Footer, Header, Navbar, NavigationDots, Skills, SocialMedia, Testimonial, Projects } from './components';

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
          <Skills />
          <Testimonial />
          <Footer />
        </div>
      </div>
      <NavigationDots />
    </div>
  )
}

export default Internals;