import { createContext } from 'react';

export const ContentContext = createContext({
  content: '',
  setContent: () => {},
});
