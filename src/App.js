import React from 'react';

import { StateContext } from './context/StateContext';
import Internals from './Internals';
import './App.scss';

const App = () => {
  return (
    <StateContext>
      <Internals />
    </StateContext>
  )
}

export default App;