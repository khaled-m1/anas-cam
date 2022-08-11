import React from 'react';
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
} from '@chakra-ui/react';

const Gallery = () => {
  return (
    <>
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
                  اعمالي
                </Text>
                <Heading
                  color={useColorModeValue('#fff', 'gray.800')}
                  mb={5}
                  fontSize={{ base: '3xl', md: '5xl' }}
                >
                  لكل عمل حكاية
                </Heading>
                <Text fontSize={'xl'} color={'gray.400'}>
                  لكل عمل حكاية وكلها تعبر عن نجاحات خضناها جميعًا كفريق عمل
                  <br />
                  مبنية على مكامن قوة الابداع في قطاع الإعلام
                </Text>
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
                        height={'130px'}
                      >
                        <Box
                          as="iframe"
                          borderRadius={10}
                          src="https://www.youtube.com/embed/rtLqpEoctdI"
                          width="100%"
                          sx={{
                            aspectRatio: '16/9',
                          }}
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
                        height={'130px'}
                      >
                        <Box
                          as="iframe"
                          borderRadius={10}
                          src="https://www.youtube.com/embed/UtnfYdaRpCE"
                          width="100%"
                          sx={{
                            aspectRatio: '16/9',
                          }}
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
                        height={'130px'}
                      >
                        <Box
                          as="iframe"
                          borderRadius={10}
                          src="https://www.youtube.com/embed/DpgTuXV8B8M"
                          width="100%"
                          sx={{
                            aspectRatio: '16/9',
                          }}
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
                        height={'130px'}
                      >
                        <Box
                          as="iframe"
                          borderRadius={10}
                          src="https://www.youtube.com/embed/1NFYAYt2T30"
                          width="100%"
                          sx={{
                            aspectRatio: '16/9',
                          }}
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
                      </Stack>
                    </Box>
                  </Center>
                </Box>
                {/* 5 */}
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
                        height={'130px'}
                      >
                        <Box
                          as="iframe"
                          borderRadius={10}
                          src="https://www.youtube.com/embed/A7MTuE53fYU"
                          width="100%"
                          sx={{
                            aspectRatio: '16/9',
                          }}
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
                      </Stack>
                    </Box>
                  </Center>
                </Box>

                {/* secound video */}
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
                        height={'130px'}
                      >
                        <Box
                          as="iframe"
                          borderRadius={10}
                          src="https://www.youtube.com/embed/-4VHYJoudhQ"
                          width="100%"
                          sx={{
                            aspectRatio: '16/9',
                          }}
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
                        height={'130px'}
                      >
                        <Box
                          as="iframe"
                          borderRadius={10}
                          src="https://www.youtube.com/embed/SK_En8AKEhQ"
                          width="100%"
                          sx={{
                            aspectRatio: '16/9',
                          }}
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
                        height={'130px'}
                      >
                        <Box
                          as="iframe"
                          borderRadius={10}
                          src="https://www.youtube.com/embed/sDrJiBY4jSo"
                          width="100%"
                          sx={{
                            aspectRatio: '16/9',
                          }}
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
                        height={'130px'}
                      >
                        <Box
                          as="iframe"
                          borderRadius={10}
                          src="https://www.youtube.com/embed/M94oSeW6fJY"
                          width="100%"
                          sx={{
                            aspectRatio: '16/9',
                          }}
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
                      </Stack>
                    </Box>
                  </Center>
                </Box>
                {/* 5 */}
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
                        height={'130px'}
                      >
                        <Box
                          as="iframe"
                          borderRadius={10}
                          src="https://www.youtube.com/embed/hpwUC8XD0pk"
                          width="100%"
                          sx={{
                            aspectRatio: '16/9',
                          }}
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
                      </Stack>
                    </Box>
                  </Center>
                </Box>
              </SimpleGrid>
            </Stack>
            <Flex flex={1} />
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Gallery;
