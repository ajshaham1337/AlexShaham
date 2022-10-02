import * as React from 'react';
import { AppBar, Link, Tabs, Tab, Box, Toolbar, IconButton, Typography, Menu, Container, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import ContentContext from '../utility/ContentContext';
import { NavLink, useNavigate } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import WebDev from './pages/WebDev';
import GameDev from './pages/GameDev';

// const ROUTE_NOT_FOUND = -1;
const routes = [
  { label: 'WebDev', path: '/Portfolio/WebDev', PageComponent: WebDev },
  { label: 'GameDev', path: '/Portfolio/GameDev', PageComponent: GameDev },
  { label: 'About', path: '/Portfolio/About', PageComponent: About },
  { label: 'Contact', path: '/Portfolio/Contact', PageComponent: Contact },
];
const currentRouteId = routes.findIndex(({ path }) => path === window.location.pathname);

function LinkTab(props) {
  return (
    <Tab
      component={Link}
      to={props.path}
      {...props}
    />
  );
}

function allyProps(index) {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`
  };
}

function TopBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const { content, setContent } = React.useContext(ContentContext);

  const handleSetContent = (p) => {
    setContent(p);
    handleCloseNavMenu();
  }

  const handleChangeContent = (event, newContent) => {
    setContent(newContent);
  }

  // console.log(handleSetContent);
  // console.log(content); // to stop warning

  return (
    <AppBar position="static" sx={{ elevation: 2.0, bgcolor: 'rgb(44, 56, 126)' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography variant="h5" noWrap component="a" href="/Portfolio/"
            sx={{ display: { xs: 'none', lg: 'flex' }, fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.1rem', color: 'inherit', textDecoration: 'none', }}>
            ALEX SHAHAM
          </Typography>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              ml: 1,
              display: { xs: 'flex', lg: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Alex Shaham
          </Typography>

          <Box sx={{ justifyContent: 'flex-end', alignItems: 'flex-end', flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Tabs value={content} onChange={handleChangeContent} aria-label="nav tabs">
              {routes.map(({ label, path }, routeId) =>
                <LinkTab component={NavLink} key={routeId} label={label} path={path} highlighted={(currentRouteId === routeId).toString()} {...allyProps(routeId)} />
              )}
            </Tabs>
          </Box>

          <Box sx={{ justifyContent: 'flex-end', alignItems: 'flex-end', flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {routes.map(({ label, path }, routeId) =>
                <LinkTab component={NavLink} key={routeId} label={label} path={path} highlighted={(currentRouteId === routeId).toString()} {...allyProps(routeId)} />
              )}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default TopBar;
