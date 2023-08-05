import {Box, Image, Text} from 'native-base';
import React, {useEffect, useState} from 'react';
import {PRIMARY} from '../statis/Statis';
import {Animated} from 'react-native';
import {getDataFromMMKV, saveDataToMMKV} from '../utils/ConfigMMKV';
import axios from 'axios';
import {POSTAPI} from '../utils/ConfigApi';
import {CommonActions} from '@react-navigation/native';

const Splash = route => {
  const Navigation = route.route.navigation;

  const token = getDataFromMMKV('token');

  useEffect(() => {
    setTimeout(() => {
      if (token !== null) {
        Navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{name: 'TabStack'}], // Replace 'Home' with the name of the screen you want to navigate to
          }),
        );
      } else {
        Navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{name: 'Login'}], // Replace 'Home' with the name of the screen you want to navigate to
          }),
        );
      }
    }, 500); //
  }, []);
  return (
    <Box
      bg={PRIMARY.BLUE}
      flex={1}
      alignItems={'center'}
      justifyContent={'center'}>
      <Image
        position={'absolute'}
        source={require('../assets/images/BgCard.png')}
        alt="Alternate Text"
        size="full"
      />
      <Text color="white" fontWeight={'semibold'} fontSize="xl">
        Nutech Wallet
      </Text>
    </Box>
  );
};

export default Splash;
