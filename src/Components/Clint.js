import {
  Box,
  Container,
  SimpleGrid,
  Text,
  VStack,
  Image,
  Stack,
} from '@chakra-ui/react';
import React from 'react';
import logo1 from '../img/logo1.1.png';
import logo2 from '../img/logo1.2.png';
import logo3 from '../img/logo1.3.png';
import logo4 from '../img/logo1.4.png';
import logo5 from '../img/logo1.5.png';
import logo6 from '../img/logo1.6.png';

const Clint = () => {
  return (
    <Stack bg="#fff" height={['500px', '300px']}>
      <VStack mt={10}>
        <Container ml={['0', '26vw']}>
          <Text fontSize="4xl" color="#000">
            تشرفت بالعمل معهم
          </Text>
        </Container>
      </VStack>
      <SimpleGrid minChildWidth="120px" spacing="30px" mb={10}>
        <Box height="80px">
          <Image boxSize="150px" objectFit="cover" src={logo1} alt="LOGO" />
        </Box>
        <Box height="80px">
          <Image boxSize="150px" objectFit="cover" src={logo2} alt="LOGO" />
        </Box>
        <Box height="80px">
          <Image boxSize="150px" objectFit="cover" src={logo3} alt="LOGO" />
        </Box>
        <Box height="80px">
          <Image boxSize="150px" objectFit="cover" src={logo4} alt="LOGO" />
        </Box>
        <Box height="80px">
          <Image boxSize="150px" objectFit="cover" src={logo5} alt="LOGO" />
        </Box>
        <Box height="80px">
          <Image boxSize="150px" objectFit="cover" src={logo6} alt="LOGO" />
        </Box>
      </SimpleGrid>
    </Stack>
  );
};

export default Clint;
