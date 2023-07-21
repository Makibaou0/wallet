import React from 'react';
import {
  ArrowForwardIcon,
  Box,
  Button,
  ChevronRightIcon,
  HStack,
  Image,
  Text,
  VStack,
} from 'native-base';
import {WW, WH, BG, PRIMARY} from '../statis/Statis';

const Ob = route => {
  const Navigation = route.route.navigation;
  const handleNav = () => {
    Navigation.reset({
      index: 0,
      routes: [{name: 'Login'}],
    });
  };
  return (
    <Box bg={BG} w={WW} h={WH}>
      <Image
        flex={3}
        source={{
          uri: 'https://wallpaperaccess.com/full/317501.jpg',
        }}
        alt="Alternate Text"
        size={WW}
      />
      <VStack
        justifyContent={'space-between'}
        space={2}
        p={4}
        pb={10}
        flex={2}
        bg={PRIMARY.BLUE}>
        <VStack space={2}>
          <Text color="white" fontWeight={'semibold'} fontSize="3xl">
            Easy Way To Start Busines
          </Text>
          <Text numberOfLines={3} color="gray.300" fontSize="md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </VStack>
        <HStack justifyContent={'space-between'}>
          <Box />
          <Button
            p={4}
            rounded={'full'}
            bg="white"
            _pressed={{
              opacity: 0,
            }}
            colorScheme="white"
            onPress={() => handleNav()}>
            <ArrowForwardIcon size={4} color={PRIMARY} />
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Ob;
