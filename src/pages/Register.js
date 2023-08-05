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
  ChevronLeftIcon,
} from 'native-base';
import {PRIMARY, SECONDARY, WW, inset} from '../statis/Statis';
import AnimatedLottieView from 'lottie-react-native';
import {Keyboard} from 'react-native';
import {CommonActions} from '@react-navigation/native';
import {POSTAPI} from '../utils/ConfigApi';
import {saveDataToMMKV} from '../utils/ConfigMMKV';

const Registrasi = route => {
  const Navigation = route.route.navigation;
  const insets = useSafeAreaInsets();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [validEmail, setvalidEmail] = useState(false);
  const toast = useToast();

  const handleSubmit = async () => {
    const params = {
      email: email,
      password: password,
      first_name: firstName,
      last_name: lastName,
    };
    // console.log(params);
    const post = await POSTAPI({
      key: 'registration',
      params: params,
    });

    toast.show({
      title: post.message,
      background: post.status != 0 ? 'danger.500' : 'success.500',
      duration: 1000,
    });

    if (post.status == 0) {
      const paramsLogin = {
        email: post.data.email,
        password: password,
      };
      const login = await POSTAPI({
        key: 'login',
        params: paramsLogin,
      });
      saveDataToMMKV('token', login.data.token);
      Navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'TabStack'}],
        }),
      );
    } else {
      toast.show({
        title: post.message,
        background: 'danger.500',
        duration: 1000,
      });
    }
  };

  const validateEmail = () => {
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    if (!emailPattern.test(email)) {
      toast.show({
        title: 'Periksa lagi email kamu',
        background: 'danger.500',
      });
      setvalidEmail(false);
    } else {
      setvalidEmail(true);
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
        <HStack alignItems={'center'} space={4} px={4} pt={inset().top}>
          <Pressable onPress={() => Navigation.goBack()}>
            <ChevronLeftIcon color="white" />
          </Pressable>
          <Text fontWeight={'semibold'} fontSize="md" color="white">
            Registration
          </Text>
        </HStack>

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
              First Name
            </Text>
            <Input
              onChangeText={TEXT => setFirstName(TEXT)}
              rounded={'md'}
              p2={2}
              borderWidth={1}
              borderColor={'white'}
              fontSize={'md'}
              bg={'blue.50'}
              placeholder="First Name"
              _focus={{
                backgroundColor: 'blue.50',
                borderColor: PRIMARY,
              }}
            />
          </VStack>
          <VStack space={2}>
            <Text fontWeight={'semibold'} color={'white'} fontSize="sm">
              Last Name
            </Text>
            <Input
              onChangeText={TEXT => setLastName(TEXT)}
              rounded={'md'}
              p={2}
              borderWidth={1}
              borderColor={'white'}
              fontSize={'md'}
              bg={'blue.50'}
              placeholder="Last Name"
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
              p={2}
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
              disabled={!validEmail}
              mt={4}
              py={4}
              rounded={'xl'}
              bg={validEmail == true ? PRIMARY.ORANGE : SECONDARY.GREY2}
              colorScheme="blue"
              onPress={() => handleSubmit()}>
              <Text fontWeight={'semibold'} color="white" fontSize="md">
                Login
              </Text>
            </Button>
          </VStack>
        </VStack>
      </Box>
    </Pressable>
  );
};

export default Registrasi;
