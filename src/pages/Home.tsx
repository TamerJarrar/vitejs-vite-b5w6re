// src/pages/Home.tsx
import React from 'react';
import { Box, Grid, Heading, Image, Text } from '@chakra-ui/react';

const Home: React.FC = () => {
  return (
    <Box textAlign="center" p={10} bg="gray.50">
      <Heading as="h1" size="2xl" color="pink.400">
        Discover Playboo
      </Heading>
      <Grid
        templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
        gap={6}
        mt={8}
        justifyItems="center"
      >
        <Box p={5} shadow="md" borderRadius="lg" bg="white">
          <Image src="/path-to-game1.png" alt="Game 1" boxSize="100px" mb={4} />
          <Text fontWeight="bold">Game 1</Text>
        </Box>
        <Box p={5} shadow="md" borderRadius="lg" bg="white">
          <Image src="/path-to-game2.png" alt="Game 2" boxSize="100px" mb={4} />
          <Text fontWeight="bold">Game 2</Text>
        </Box>
        {/* Add more game cards */}
      </Grid>
    </Box>
  );
};

export default Home;
