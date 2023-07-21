import React, {useEffect, useState} from 'react';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import {
  ArrowBackIcon,
  Box,
  Button,
  HStack,
  VStack,
  Text,
  Alert,
  Image,
  Pressable,
  useToast,
} from 'native-base';
import {PRIMARY, SECONDARY, SHADE, WH, WW} from '../statis/Statis';
import AnimatedLottieView from 'lottie-react-native';
import {CodeField, Cursor} from 'react-native-confirmation-code-field';

import CountDown from 'react-native-countdown-component';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Keyboard} from 'react-native';
import LockIcon from '../assets/icons/LockIcon';
import DangerIcon from '../assets/icons/DangerIcon';
import {CommonActions} from '@react-navigation/native';
const Otp = route => {
  const Navigation = route.route.navigation;
  const Params = route.route.route.params;
  const [resendEnabled, setResendEnabled] = useState(false);
  const insets = useSafeAreaInsets();
  const toast = useToast();
  const handleResendOTP = () => {
    // Logika untuk mengirim ulang OTP
    Alert.alert('OTP dikirim ulang!');
    setResendEnabled(false);
  };

  const handleCountdownFinish = () => {
    setResendEnabled(true);
  };

  const [otp, setOTP] = useState('');

  const handleOTPChange = code => {
    console.log(code);
    setOTP(code);
  };
  useEffect(() => {
    if (otp.length === 4) {
      Keyboard.dismiss();
    }
  }, [otp]);
  const handleSubmit = () => {
    if (otp != 1111) {
      toast.show({
        title: 'The OTP code is invalid',
        duration: 1500,

        backgroundColor: SECONDARY.RED,
        render: () => (
          <HStack
            space={2}
            pr={10}
            alignItems={'center'}
            bg={SECONDARY.RED}
            pl={2}
            py={4}
            rounded="lg">
            <DangerIcon color="white" size={20} />
            <Text color="white" fontSize="xs" fontWeight={'semibold'}>
              The OTP code is invalid!
            </Text>
          </HStack>
        ),
      });
    } else {
      Navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'TabStack'}], // Replace 'Home' with the name of the screen you want to navigate to
        }),
      );
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

        <VStack flex={1} px={2} pt={insets.top} pb={insets.bottom}>
          <HStack>
            <Button
              colorScheme={'white'}
              bg={PRIMARY.BLUE}
              onPress={() => Navigation.goBack()}>
              <ArrowBackIcon color={'white'} size={6} />
            </Button>
          </HStack>
          <VStack mt={10} alignItems={'center'} justifyContent={'center'}>
            <LockIcon color="white" size={WW * 0.12} />

            <Box
              position={'absolute'}
              size={WW * 0.2}
              bg="white"
              rounded="full"
              opacity={0.1}
            />
          </VStack>
          <VStack mt={10} alignItems={'center'}>
            <Text color="white" fontWeight={'semibold'} fontSize="xl">
              Enter The OTP Code
            </Text>
            <Text color={SHADE.LIGHTBLUE} fontSize="md">
              We've sent you an OTP code to
            </Text>
            <Text color={'white'} fontSize="md" fontWeight={'bold'}>
              0{Params}
            </Text>
          </VStack>
          <VStack my={10} p={5}>
            <CodeField
              value={otp}
              onChangeText={handleOTPChange}
              cellCount={4}
              keyboardType="number-pad"
              textContentType="oneTimeCode"
              renderCell={({index, symbol, isFocused}) => (
                <Box
                  borderWidth={0.4}
                  borderColor={SECONDARY.GREY4}
                  my={5}
                  rounded={'xl'}
                  justifyContent={'center'}
                  alignItems={'center'}
                  size={16}
                  key={index}>
                  <Text color="white" fontSize={'xl'} fontWeight={'semibold'}>
                    {symbol || (isFocused ? <Cursor /> : null)}
                  </Text>
                </Box>
              )}
            />
          </VStack>

          <Button
            rounded={'xl'}
            mx={5}
            py={4}
            bg={PRIMARY.ORANGE}
            colorScheme="orange"
            onPress={() => handleSubmit()}>
            <Text color="white" fontSize="md" fontWeight={'semibold'}>
              Verifikasi
            </Text>
          </Button>
        </VStack>
      </Box>
    </Pressable>
  );
};

export default Otp;
