import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Navigate } from 'react-router-dom';
// import { format } from 'date-fns';
import { CssBaseline, ThemeProvider } from '@mui/material';

import ContentContext from './utility/ContentContext';
import TabContext from './utility/TabContext';
import theme from './utility/ColorScheme';

import TopBar from './components/TopBar';

import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Portfolio from './components/pages/Portfolio';

const routeToTabNumber = {
  '/Portfolio/': 0,
  '/Portfolio/About': 1,
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
              {selectedTabNumber === 0 && <Portfolio />}
              {selectedTabNumber === 1 && <About />}
              {selectedTabNumber === 2 && <Contact />}

              {/* <Routes> */}
                {/* <Route path="/" element={<Portfolio />} />  */}
                {/* <Route path="/portfolio" element={<Navigate to="/" />} /> */}
                {/* <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes> */}

            </BrowserRouter>
          </TabContext.Provider>
        </ContentContext.Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
