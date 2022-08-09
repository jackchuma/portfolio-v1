import React from 'react';

import { About, Footer, Header, Navbar, NavigationDots, Skills, SocialMedia, Testimonial, Work } from './components';

const Internals = () => {
  return (
    <div className='app__container-outter'>
      <SocialMedia />
      <div className='app__wrapper-outter'>
        <div className='app'>
          <Navbar />
          <Header />
          <About />
          <Work />
          <Skills />
          <Testimonial />
          <Footer />
        </div>
      </div>
      <NavigationDots active={'home'} />
    </div>
  )
}

export default Internals;