import {
  Stack,
  Container,
  Box,
  Flex,
  Text,
  Heading,
  SimpleGrid,
  Center,
  useColorModeValue,
  Image,
  ButtonGroup,
  Link,
  Icon,
} from '@chakra-ui/react';
import Image1 from '../img/Image1.svg';
import Image2 from '../img/Image2.svg';
import Image3 from '../img/Image3.svg';
import Image4 from '../img/Image4.svg';
import {
  FaInstagram,
  FaWhatsapp,
  FaTwitter,
  FaFacebook,
} from 'react-icons/fa';

export default function StatsGridWithImage() {
  return (
    <Box bg={useColorModeValue('gray.800', '#fff')} position={'relative'}>
      <Container maxW={'7xl'} zIndex={10} position={'relative'}>
        <Stack direction={{ base: 'column', lg: 'row' }}>
          <Stack
           
            color={'gray.400'}
            justify={{ lg: 'center' }}
            py={{ base: 10, md: 10, xl: 20 }}
          >
            <Box mb={{ base: 8, md: 20 }}>
              <Text
                fontFamily={'heading'}
                fontWeight={700}
                textTransform={'uppercase'}
                mb={3}
                fontSize={'xl'}
                color={'gray.500'}
              >
                خدماتي
              </Text>
              <Heading
                color={useColorModeValue('#fff', 'gray.800')}
                mb={5}
                fontSize={{ base: '3xl', md: '5xl' }}
              >
                صانع افلام سينمائية
              </Heading>
              <Text fontSize={'xl'} color={'gray.400'}>
                اصنع الافلام بمسؤلية كاملة عن العمل وإدارة، وقيادة عملية الإنتاج
                واخراجها
                <br />
                 والاشراف عليها معتمد على خبراتي الإبداعية والقيادية في
                مجال السينما
              </Text>
              <ButtonGroup spacing="4" mt={6} mr={['5', '90px']}>
                <Link href="https://www.instagram.com/ans_cam/" isExternal>
                  <Icon as={FaInstagram} w={['8', '8']} h={['8', '8']} />
                </Link>
                <Link href="https://www.facebook.com/anasmoool" isExternal>
                  <Icon as={FaFacebook} w={['8', '8']} h={['8', '8']} />
                </Link>

                <Link href="https://wa.me/+966533613299" isExternal>
                  <Icon as={FaWhatsapp} w={['8', '8']} h={['8', '8']} />
                </Link>
                <Link href="https://twitter.com/anasabohala" isExternal>
                  <Icon as={FaTwitter} w={['8', '8']} h={['8', '8']} />
                </Link>
              </ButtonGroup>
            </Box>

            <SimpleGrid columns={{ base: 1, md: 4 }} spacing={10}>
              {/* 1 */}
              <Box>
                <Center py={12}>
                  <Box
                    role={'group'}
                    p={6}
                    maxW={'330px'}
                    w={'full'}
                    bg={useColorModeValue('white', 'gray.800')}
                    boxShadow={'2xl'}
                    rounded={'lg'}
                    pos={'relative'}
                    zIndex={1}
                  >
                    <Box
                      rounded={'lg'}
                      mt={-12}
                      pos={'relative'}
                      height={'230px'}
                      _after={{
                        transition: 'all .3s ease',
                        content: '""',
                        w: 'full',
                        h: 'full',
                        pos: 'absolute',
                        top: 5,
                        left: 0,
                        backgroundImage: { Image1 },
                        filter: 'blur(15px)',
                        zIndex: -1,
                      }}
                      _groupHover={{
                        _after: {
                          filter: 'blur(20px)',
                        },
                      }}
                    >
                      <Image
                        rounded={'lg'}
                        height={230}
                        width={282}
                        objectFit={'cover'}
                        src={Image1}
                      />
                    </Box>
                    <Stack pt={10} align={'center'}>
                      <Text
                        color={useColorModeValue('gray.800', 'white')}
                        fontSize={'sm'}
                        textTransform={'uppercase'}
                      >
                        تصوير فيديو/ فوتوغراف
                      </Text>
                      <Heading
                        fontSize={'2xl'}
                        color={useColorModeValue('gray.800', 'white')}
                        fontFamily={'body'}
                        fontWeight={500}
                      >
                        صناعة افلام وثائقية
                      </Heading>
                    </Stack>
                  </Box>
                </Center>
              </Box>
              {/* 2 */}
              <Box>
                <Center py={12}>
                  <Box
                    role={'group'}
                    p={6}
                    maxW={'330px'}
                    w={'full'}
                    bg={useColorModeValue('white', 'gray.800')}
                    boxShadow={'2xl'}
                    rounded={'lg'}
                    pos={'relative'}
                    zIndex={1}
                  >
                    <Box
                      rounded={'lg'}
                      mt={-12}
                      pos={'relative'}
                      height={'230px'}
                      _after={{
                        transition: 'all .3s ease',
                        content: '""',
                        w: 'full',
                        h: 'full',
                        pos: 'absolute',
                        top: 5,
                        left: 0,
                        backgroundImage: { Image2 },
                        filter: 'blur(15px)',
                        zIndex: -1,
                      }}
                      _groupHover={{
                        _after: {
                          filter: 'blur(20px)',
                        },
                      }}
                    >
                      <Image
                        rounded={'lg'}
                        height={230}
                        width={282}
                        objectFit={'cover'}
                        src={Image2}
                      />
                    </Box>
                    <Stack pt={10} align={'center'}>
                      <Text
                        color={useColorModeValue('gray.800', 'white')}
                        fontSize={'sm'}
                        textTransform={'uppercase'}
                      >
                        تصوير فيديو/ فوتوغراف
                      </Text>
                      <Heading
                        fontSize={'2xl'}
                        color={useColorModeValue('gray.800', 'white')}
                        fontFamily={'body'}
                        fontWeight={500}
                      >
                        صناعة افلام سينمائية
                      </Heading>
                    </Stack>
                  </Box>
                </Center>
              </Box>
              {/* 3 */}
              <Box>
                <Center py={12}>
                  <Box
                    role={'group'}
                    p={6}
                    maxW={'330px'}
                    w={'full'}
                    bg={useColorModeValue('white', 'gray.800')}
                    boxShadow={'2xl'}
                    rounded={'lg'}
                    pos={'relative'}
                    zIndex={1}
                  >
                    <Box
                      rounded={'lg'}
                      mt={-12}
                      pos={'relative'}
                      height={'230px'}
                      _after={{
                        transition: 'all .3s ease',
                        content: '""',
                        w: 'full',
                        h: 'full',
                        pos: 'absolute',
                        top: 5,
                        left: 0,
                        backgroundImage: { Image3 },
                        filter: 'blur(15px)',
                        zIndex: -1,
                      }}
                      _groupHover={{
                        _after: {
                          filter: 'blur(20px)',
                        },
                      }}
                    >
                      <Image
                        rounded={'lg'}
                        height={230}
                        width={282}
                        objectFit={'cover'}
                        src={Image3}
                      />
                    </Box>
                    <Stack pt={10} align={'center'}>
                      <Text
                        color={useColorModeValue('gray.800', 'white')}
                        fontSize={'sm'}
                        textTransform={'uppercase'}
                      >
                        تصوير فيديو/ فوتوغراف
                      </Text>
                      <Heading
                        fontSize={'2xl'}
                        color={useColorModeValue('gray.800', 'white')}
                        fontFamily={'body'}
                        fontWeight={500}
                      >
                        تغطية المؤتمرات
                      </Heading>
                    </Stack>
                  </Box>
                </Center>
              </Box>
              {/* 4 */}
              <Box>
                <Center py={12}>
                  <Box
                    role={'group'}
                    p={6}
                    maxW={'330px'}
                    w={'full'}
                    bg={useColorModeValue('white', 'gray.800')}
                    boxShadow={'2xl'}
                    rounded={'lg'}
                    pos={'relative'}
                    zIndex={1}
                  >
                    <Box
                      rounded={'lg'}
                      mt={-12}
                      pos={'relative'}
                      height={'230px'}
                      _after={{
                        transition: 'all .3s ease',
                        content: '""',
                        w: 'full',
                        h: 'full',
                        pos: 'absolute',
                        top: 5,
                        left: 0,
                        backgroundImage: { Image4 },
                        filter: 'blur(15px)',
                        zIndex: -1,
                      }}
                      _groupHover={{
                        _after: {
                          filter: 'blur(20px)',
                        },
                      }}
                    >
                      <Image
                        rounded={'lg'}
                        height={230}
                        width={282}
                        objectFit={'cover'}
                        src={Image4}
                      />
                    </Box>
                    <Stack pt={10} align={'center'}>
                      <Text
                        color={useColorModeValue('gray.800', 'white')}
                        fontSize={'sm'}
                        textTransform={'uppercase'}
                      >
                        تصوير فيديو/ فوتوغراف
                      </Text>
                      <Heading
                        fontSize={'2xl'}
                        color={useColorModeValue('gray.800', 'white')}
                        fontFamily={'body'}
                        fontWeight={500}
                      >
                        تصوير فوتوغرافي
                      </Heading>
                    </Stack>
                  </Box>
                </Center>
              </Box>
              {/* end */}
            </SimpleGrid>
          </Stack>
          <Flex flex={1} />
        </Stack>
      </Container>
    </Box>
  );
}
