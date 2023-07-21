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
} from 'native-base';
import {PRIMARY, SECONDARY, WH, WW} from '../statis/Statis';
import AnimatedLottieView from 'lottie-react-native';
import {CodeField, Cursor} from 'react-native-confirmation-code-field';

import CountDown from 'react-native-countdown-component';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Keyboard} from 'react-native';
const Register = route => {
  const Navigation = route.route.navigation;
  const Params = route.route.route.params;
  const [resendEnabled, setResendEnabled] = useState(false);
  const insets = useSafeAreaInsets();
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
  return (
    <Box
      style={{
        backgroundColor: PRIMARY.BLUE,
        flex: 1,
      }}>
      <Pressable onPress={() => Keyboard.dismiss()}>
        <Image
          position={'absolute'}
          source={require('../assets/images/BgCard.png')}
          alt="Alternate Text"
          size="full"
        />

        <VStack px={2} pt={insets.top}>
          <HStack>
            <Button
              colorScheme={'white'}
              bg={PRIMARY.BLUE}
              onPress={() => Navigation.goBack()}>
              <ArrowBackIcon color={'white'} size={6} />
            </Button>
          </HStack>
          <Box alignItems={'center'} justifyContent={'center'}>
            <AnimatedLottieView
              autoPlay
              style={{
                width: WW,
                height: WW * 0.7,
              }}
              loop={false}
              source={require('../assets/lotties/otp.json')}
            />
          </Box>
          <VStack p={5}>
            <Text color="white" fontWeight={'semibold'} fontSize="2xl">
              Enter OTP
            </Text>
            <Text color={SECONDARY.GREY4} fontSize="md">
              An 4 digits code has been sent to +62 {Params}
            </Text>
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
            onPress={() => Navigation.navigate('TabStack')}>
            <Text color="white" fontSize="md" fontWeight={'semibold'}>
              Verifikasi
            </Text>
          </Button>
        </VStack>
      </Pressable>
    </Box>
  );
};

export default Register;
