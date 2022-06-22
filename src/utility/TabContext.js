import { createContext } from 'react';

const TabContext = createContext({
  tab: '',
  setTab: () => {},
});

export default TabContext;
