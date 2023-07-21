import React, {useEffect, useState} from 'react';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import {
  Center,
  Image,
  VStack,
  Text,
  Input,
  SunIcon,
  HStack,
  Pressable,
  Button,
  Box,
} from 'native-base';
import {PRIMARY, SECONDARY, WW} from '../statis/Statis';
import AnimatedLottieView from 'lottie-react-native';
import {Keyboard} from 'react-native';

const Login = route => {
  const Navigation = route.route.navigation;
  const insets = useSafeAreaInsets();
  const [phone, setphone] = useState(0);
  const handleLogin = () => {
    Navigation.navigate('Otp', phone);
  };
  const handleRegist = () => {
    Navigation.navigate('Register');
  };

  return (
    <Pressable flex={1} onPress={() => Keyboard.dismiss()}>
      <Box
        style={{
          backgroundColor: PRIMARY.BLUE,
          flex: 1,
        }}>
        <Image
          position={'absolute'}
          source={require('../assets/images/BgCard.png')}
          alt="Alternate Text"
          size="full"
        />

        <Box mt={insets.top} size={WW} p={4} space={1}>
          <AnimatedLottieView
            autoPlay
            source={require('../assets/lotties/login.json')}
            loop={false}
          />
          {/* <Text fontWeight={'semibold'} color={PRIMARY} fontSize="xl">
          Login
        </Text>
        <Text numberOfLines={2} color={'gray.400'} fontSize="sm">
          We happy to see you again. To use your account, you must log in first.
        </Text> */}
        </Box>
        <VStack p={4} space={8}>
          <VStack space={2}>
            <Text fontWeight={'semibold'} color={'white'} fontSize="xl">
              Phone Number
            </Text>
            <Input
              onChangeText={TEXT => setphone(TEXT)}
              rounded={'xl'}
              p={5}
              borderWidth={1}
              borderColor={'white'}
              fontSize={'md'}
              bg={'blue.50'}
              placeholder="8229282323"
              _focus={{
                backgroundColor: 'blue.50',
                borderColor: PRIMARY,
              }}
              leftElement={
                <Text ml={5} fontSize="md">
                  62
                </Text>
              }
            />
            <Pressable>
              <Text color={SECONDARY.GREY4} textAlign={'right'} fontSize="xs">
                Forgot Password?
              </Text>
            </Pressable>
          </VStack>
          <VStack space={5}>
            <Button
              py={4}
              rounded={'xl'}
              bg={PRIMARY.ORANGE}
              colorScheme="blue"
              onPress={() => handleLogin()}>
              <Text fontWeight={'semibold'} color="white" fontSize="lg">
                Login
              </Text>
            </Button>
            <HStack space={2} justifyContent={'center'}>
              <Text color={SECONDARY.GREY4} fontSize="xs">
                Don't have any account?
              </Text>
              <Pressable p="0" borderWidth="0" onPress={() => handleRegist()}>
                <Text color={'white'} fontWeight={'semibold'} fontSize="xs">
                  Register
                </Text>
              </Pressable>
            </HStack>
          </VStack>
        </VStack>
      </Box>
    </Pressable>
  );
};

export default Login;
