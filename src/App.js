import React from 'react';
import WhatsappIcon from './Components/WhatsappIcon'
import { LandPage } from './AppCss'
import Home from './Components/Home';
import About from './Components/About';

const App = () => {
  return (
    <LandPage>
      <WhatsappIcon />
      <Home />
      <About />
    </LandPage>
  );
};

export default App;