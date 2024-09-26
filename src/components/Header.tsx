import React from 'react';
import { Box, Image, Flex } from '@chakra-ui/react';

const Header: React.FC = () => {
  return (
    <Box
      as="header"
      bg="white"
      p={4}
      shadow="md"
      position="sticky"
      top={0}
      zIndex={10}
    >
      <Flex justify="center">
        <Image src="/path-to-logo.png" alt="Playboo Logo" height="50px" />
      </Flex>
    </Box>
  );
};

export default Header;
