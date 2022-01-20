import React from 'react';
import WhatsappIcon from './Components/WhatsappIcon'
import { LandPage } from './AppCss'
import Home from './Components/Home';
import About from './Components/About';
import Gallery from './Components/Gallery';
import Review from './Components/Review';

const App = () => {
  return (
    <LandPage>
      <WhatsappIcon />
      <Home />
      <About />
      <hr style={{width: "50%"}}/>
      <Gallery />
      <Review />
    </LandPage>
  );
};

export default App;