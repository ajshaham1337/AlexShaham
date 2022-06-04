import React from 'react';
import { ContentContext } from '../ContentContext';

import Tools from '../pages/Tools';
import Games from '../pages/Games';
import Contact from '../pages/Contact';
import About from '../pages/About';

const ResponsiveBody = () => {
  const { content } = React.useContext(ContentContext);

  if (content === 'Games') {
    return(<Games/>);
  } else if (content === 'Tools') {
    return(<Tools/>);
  } else if (content === 'About') {
    return(<About/>);
  } else if (content === 'Contact') {
    return(<Contact/>);
  } else {
    return;
  }
}

export default ResponsiveBody;
