import './App.css';
import React, { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
// import { format } from 'date-fns';
import { CssBaseline, ThemeProvider } from '@mui/material';

import ContentContext from './utility/ContentContext';
import TabContext from './utility/TabContext';
import theme from './utility/ColorScheme';

import TopBar from './components/TopBar';

import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Missing from './components/pages/Missing';
import Portfolio from './components/pages/Portfolio';

const ROUTE_NOT_FOUND = -1;
const routeToTabNumber = {
  '/Missing': -1,
  '/': 0,
  // '/Portfolio': 0,
  '/About': 1,
  '/Contact': 2,
};
const routeTabNumber = routeToTabNumber[window.location.pathname];
const selectedTabNumber = routeTabNumber !== undefined ? routeTabNumber : ROUTE_NOT_FOUND;

function App() {
  console.log(window.location.pathname);
  // const routes = [
  //   { },
  // ];

  const [content, setContent] = useState(selectedTabNumber);
  const [tab, setTab] = useState(0);

  const contentValue = { content, setContent };
  const tabValue = { tab, setTab };
  
  // {currentRouteId === -1 && <Missing />}
  // {currentRouteId === 0 && <Portfolio />}
  // {currentRouteId === 1 && <About />}
  // {currentRouteId === 2 && <Contact />}

  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ContentContext.Provider value={contentValue}>
          <TabContext.Provider value={tabValue}>
            <TopBar />
            {/* {routeToTabNumber.map(({ path, tabNumber }) => {
              {selectedTabNumber === tabNumber && }
            })} */}
            {/* {selectedTabNumber === -1 && <Missing />}
            {selectedTabNumber === 0 && <Portfolio />}
            {selectedTabNumber === 1 && <About />}
            {selectedTabNumber === 2 && <Contact />} */}
            <Routes>
              <Route path="/" element={<Portfolio />} /> 
              {/* <Route path="/portfolio" element={<Navigate to="/" />} /> */}
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/*" element={<Missing />} />
            </Routes>
          </TabContext.Provider>
        </ContentContext.Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
