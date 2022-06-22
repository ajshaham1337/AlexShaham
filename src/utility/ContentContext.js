import { createContext } from 'react';

const ContentContext = createContext({
  content: '',
  setContent: () => {},
});

export default ContentContext;
