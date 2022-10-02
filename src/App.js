import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import ContentContext from './utility/ContentContext';
import TabContext from './utility/TabContext';
import theme from './utility/ColorScheme';
import TopBar from './components/TopBar';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import GameDev from './components/pages/GameDev';
import WebDev from './components/pages/WebDev';

const routeToTabNumber = {
  '/Portfolio/': 0,
  '/Portfolio/WebDev': 0,
  '/Portfolio/GameDev': 1,
  '/Portfolio/About': 2,
  '/Portfolio/Contact': 3,
};

function App() {
  // const routes = [
  //   { label: 'Portfolio', path: '//', tabNumber: 0, PageComponent: Portfolio },
  //   { label: 'About', path: '/About', tabNumber: 1, PageComponent: About },
  //   { label: 'Contact', path: '/Contact', tabNumber: 2, PageComponent: Contact },
  // ];

  const routeTabNumber = routeToTabNumber[window.location.pathname];
  const selectedTabNumber = routeTabNumber ? routeTabNumber : 0;
  console.log(selectedTabNumber);
  console.log(window.location.pathname);

  const [content, setContent] = useState(selectedTabNumber);
  const [tab, setTab] = useState(0);

  const contentValue = { content, setContent };
  const tabValue = { tab, setTab };

  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ContentContext.Provider value={contentValue}>
          <TabContext.Provider value={tabValue}>
            <BrowserRouter basename='/'>
              <TopBar />
          
              {/* {routeToTabNumber.map(({ path, tabNumber }) => {
                {selectedTabNumber === tabNumber && path}
              })} */}
              {/* {selectedTabNumber === 0 && <Portfolio />}
              {selectedTabNumber === 1 && <About />}
              {selectedTabNumber === 2 && <Contact />} */}

              {/* need to incorporate a small backend to properly implement routing*/}
              <Routes>
                <Route path="/" element={<Navigate to="/Portfolio/" />} /> 
                <Route path="/Portfolio/" element={<WebDev />} />
                <Route path="/Portfolio/WebDev" element={<WebDev />} />
                <Route path="/Portfolio/GameDev" element={<GameDev />} />
                <Route path="/Portfolio/About" element={<About />} />
                <Route path="/Portfolio/Contact" element={<Contact />} />
                <Route path="/Portfolio/*" element={<Navigate to="/Portfolio/" />} />
              </Routes>

            </BrowserRouter>
          </TabContext.Provider>
        </ContentContext.Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
