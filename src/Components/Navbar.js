import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  Image,
  useColorMode,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import logoColor from '../img/logoColor.png';
import logoWhite from '../img/logoWhite.png';

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box px={4} mb={10}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box boxSize="80px">
            <Image src={useColorModeValue(logoColor, logoWhite)} alt="LOGO" />
          </Box>

          <Flex alignItems={'center'} mt={6}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
