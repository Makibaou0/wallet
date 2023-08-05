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
  Alert,
  useToast,
} from 'native-base';
import {PRIMARY, SECONDARY, WW} from '../statis/Statis';
import AnimatedLottieView from 'lottie-react-native';
import {Keyboard} from 'react-native';
import {CommonActions} from '@react-navigation/native';
import {POSTAPI} from '../utils/ConfigApi';
import axios from 'axios';
import {saveDataToMMKV} from '../utils/ConfigMMKV';

const Login = route => {
  const Navigation = route.route.navigation;
  const insets = useSafeAreaInsets();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const toast = useToast();

  const handleLogin = async () => {
    let data = {
      email: email.toLowerCase(),
      password: password,
    };

    const submit = await POSTAPI({
      key: 'login',
      params: data,
    });
    if (submit.status == 0) {
      toast.show({
        title: submit.message,
        background: 'success.500',
        duration: 1999,
      });
      saveDataToMMKV('token', submit.data.token);
      Navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'Result'}],
        }),
      );
    } else {
      toast.show({
        title: submit.message,
        background: 'danger.500',
        duration: 1999,
      });
    }
  };
  const handleRegist = () => {
    Navigation.navigate('Register');
  };
  const validateEmail = () => {
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    if (!emailPattern.test(email)) {
      toast.show({
        title: 'Periksa lagi email kamu',
        background: 'danger.500',
      });
    }
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

        <Box
          alignSelf={'center'}
          alignItems={'center'}
          mt={insets.top}
          size={WW * 0.7}
          p={4}
          space={1}>
          <AnimatedLottieView
            autoPlay
            source={require('../assets/lotties/login.json')}
            loop={false}
          />
        </Box>
        <VStack p={4} space={4}>
          <VStack space={2}>
            <Text fontWeight={'semibold'} color={'white'} fontSize="sm">
              Email
            </Text>
            <Input
              onChangeText={TEXT => setEmail(TEXT)}
              onBlur={() => validateEmail()}
              rounded={'md'}
              p2={2}
              borderWidth={1}
              borderColor={'white'}
              fontSize={'md'}
              bg={'blue.50'}
              placeholder="Email"
              _focus={{
                backgroundColor: 'blue.50',
                borderColor: PRIMARY,
              }}
            />
          </VStack>
          <VStack space={2}>
            <Text fontWeight={'semibold'} color={'white'} fontSize="sm">
              Password
            </Text>
            <Input
              secureTextEntry
              onChangeText={TEXT => setPassword(TEXT)}
              rounded={'md'}
              p2={2}
              borderWidth={1}
              borderColor={'white'}
              fontSize={'md'}
              bg={'blue.50'}
              placeholder="Password"
              _focus={{
                backgroundColor: 'blue.50',
                borderColor: PRIMARY,
              }}
            />
          </VStack>

          <VStack space={5}>
            <Button
              mt={5}
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
