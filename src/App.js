import './App.css';
import React, { useState } from 'react';

import { ContentContext } from './ContentContext';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import ResponsiveBody from './components/ResponsiveBody';

function App() {
  const [content, setContent] = useState('Games');
  const value = {content, setContent};

  return (
    <ContentContext.Provider value={value}>
      <ResponsiveAppBar/>
      <ResponsiveBody/>
    </ContentContext.Provider>
  );
}

export default App;
