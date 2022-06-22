import './App.css';
import React, { useState } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';

import ContentContext from './utility/ContentContext';
import theme from './utility/ColorScheme';

import ResponsiveAppBar from './components/ResponsiveAppBar';
import ResponsiveBody from './components/ResponsiveBody';
import TabContext from './utility/TabContext';


function App() {
  const [content, setContent] = useState('Portfolio');
  const [tab, setTab] = useState(0);

  const contentValue = {content, setContent};
  const tabValue = {tab, setTab};

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <ContentContext.Provider value={contentValue}>
        <TabContext.Provider value={tabValue}>
          <ResponsiveAppBar/>
          <ResponsiveBody/>
        </TabContext.Provider>
      </ContentContext.Provider>
    </ThemeProvider>
  );
}

export default App;
