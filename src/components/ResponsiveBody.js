import React from 'react';

import ContentContext from '../utility/ContentContext';

import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';
import About from '../pages/About';

function ResponsiveBody() {
  const { content } = React.useContext(ContentContext);

  if (content === 'Portfolio') {
    return(<Portfolio/>);
  } else if (content === 'About') {
    return(<About/>);
  } else if (content === 'Contact') {
    return(<Contact/>);
  } else {
    return;
  }
}

export default ResponsiveBody;
