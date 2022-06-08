import './App.css';
import React, { useState } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';

import ContentContext from './ContentContext';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import ResponsiveBody from './components/ResponsiveBody';
import theme from './utility/ColorScheme';


function App() {
  const [content, setContent] = useState('Games');
  const value = {content, setContent};

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <ContentContext.Provider value={value}>
        <ResponsiveAppBar/>
        <ResponsiveBody/>
      </ContentContext.Provider>
    </ThemeProvider>
  );
}

export default App;
