import React from 'react';
import {Box, Image} from 'native-base';
import {CommonActions} from '@react-navigation/native';
import {PRIMARY, WW} from '../statis/Statis';
import AnimatedLottieView from 'lottie-react-native';

const Result = route => {
  const Navigation = route.route.navigation;
  // Delay the navigation reset by 3 seconds
  setTimeout(() => {
    Navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'TabStack'}],
      }),
    );
  }, 2000);

  return (
    <Box
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: PRIMARY.BLUE,
        flex: 1,
      }}>
      <Image
        position={'absolute'}
        source={require('../assets/images/BgCard.png')}
        alt="Alternate Text"
        size="full"
      />
      <Box size={WW}>
        <AnimatedLottieView
          autoPlay
          source={require('../assets/lotties/success.json')}
        />
      </Box>
    </Box>
  );
};

export default Result;
