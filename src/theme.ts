// src/theme.ts
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      100: '#FF5C7C', // Example custom brand color
    },
  },
  fonts: {
    heading: 'YourFont, sans-serif',
    body: 'YourFont, sans-serif',
  },
});

export default theme;
