import React from 'react';
import WhatsappIcon from './Components/WhatsappIcon'
import { LandPage } from './AppCss'
import Home from './Components/Home';
import About from './Components/About';
import Gallery from './Components/Gallery';

const App = () => {
  return (
    <LandPage>
      <WhatsappIcon />
      <Home />
      <About />
      <Gallery />
    </LandPage>
  );
};

export default App;