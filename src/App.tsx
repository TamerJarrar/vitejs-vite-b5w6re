import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <Home />
    </ChakraProvider>
  );
};

export default App;
