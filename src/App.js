import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import ContentContext from './utility/ContentContext';
import theme from './utility/ColorScheme';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/pages/Contact';
import GameDev from './components/pages/GameDev';
import WebDev from './components/pages/WebDev';

const routeToTabNumber = {
  '/Portfolio/': 0,
  '/Portfolio/WebDev': 0,
  '/Portfolio/GameDev': 1,
  '/Portfolio/Contact': 2,
};

function App() {
  // const routes = [
  //   { label: 'Portfolio', path: '//', tabNumber: 0, PageComponent: Portfolio },
  //   { label: 'About', path: '/About', tabNumber: 1, PageComponent: About },
  //   { label: 'Contact', path: '/Contact', tabNumber: 2, PageComponent: Contact },
  // ];

  const routeTabNumber = routeToTabNumber[window.location.pathname];
  const selectedTabNumber = routeTabNumber ? routeTabNumber : 0;

  const [content, setContent] = useState(selectedTabNumber);
  const contentValue = { content, setContent };

  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ContentContext.Provider value={contentValue}>
            <BrowserRouter basename='/'>
              <Header />
              {/* need to incorporate a small backend to properly implement routing*/}
              <Routes>
                <Route path="/" element={<Navigate to="/Portfolio/" />} /> 
                <Route path="/Portfolio/" element={<WebDev />} />
                <Route path="/Portfolio/WebDev" element={<WebDev />} />
                <Route path="/Portfolio/GameDev" element={<GameDev />} />
                <Route path="/Portfolio/Contact" element={<Contact />} />
                <Route path="/Portfolio/*" element={<Navigate to="/Portfolio/" />} />
              </Routes>
              <Footer />
            </BrowserRouter>
        </ContentContext.Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
