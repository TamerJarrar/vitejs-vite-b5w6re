// src/components/Footer.tsx
import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const Footer: React.FC = () => {
  return (
    <Box as="footer" bg="gray.100" p={4} textAlign="center">
      <Text>&copy; 2024 Playboo</Text>
    </Box>
  );
};

export default Footer;
