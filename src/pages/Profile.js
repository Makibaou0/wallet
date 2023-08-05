import React, {useEffect, useState} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {
  Box,
  Button,
  HStack,
  Image,
  Input,
  Pressable,
  Text,
  VStack,
  useToast,
} from 'native-base';
import {PRIMARY, WH, WW} from '../statis/Statis';

import {GETAPI, POSTAPI} from '../utils/ConfigApi';
import axios from 'axios';
import {getDataFromMMKV, saveDataToMMKV} from '../utils/ConfigMMKV';
import {CommonActions} from '@react-navigation/native';

const Profile = route => {
  const Navigation = route.route.navigation;
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const insets = useSafeAreaInsets();
  const toast = useToast();
  useEffect(() => {
    getProfile();
  }, []);
  const getProfile = async () => {
    const profile = await GETAPI({
      key: 'getProfile',
    });

    setFirstName(profile.data.first_name);
    setLastName(profile.data.last_name);
  };
  const handleSubmit = async () => {
    let data = JSON.stringify({
      first_name: firstName,
      last_name: lastName,
    });

    const submit = await POSTAPI({
      key: 'updateProfile',
      params: data,
    });
    if (submit.status == 0) {
      toast.show({
        title: submit.message,
        background: 'success.500',
        duration: 1999,
      });

      Navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'Result'}],
        }),
      );
    }
  };
  const handleLogout = () => {
    saveDataToMMKV('token', null);
    Navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'Login'}],
      }),
    );
  };
  return (
    <Box flex={1} bg="white">
      <Box bg={PRIMARY.BLUE}>
        <Image
          source={require('../assets/images/Wallpaper.png')}
          alt="Alternate Text"
          w={WW}
          h={187}
          resizeMode="stretch"
        />
      </Box>
      <HStack
        position={'absolute'}
        alignItems={'center'}
        justifyContent={'space-between'}
        pt={insets.top + WH * 0.02}
        px={5}
        rounded="lg">
        <HStack flex={1} space={3} justifyContent={'space-between'}>
          <Text fontWeight={'bold'} fontSize={'2xl'} color="white">
            Profile
          </Text>
          <Pressable
            rounded="md"
            p="2"
            bg="danger.500"
            onPress={() => handleLogout()}>
            <Text fontWeight={'bold'} fontSize={'xl'} color="white">
              Logout
            </Text>
          </Pressable>
        </HStack>
      </HStack>
      <VStack space={2} p={5}>
        <Text fontSize="xs">Fist Name</Text>
        <Input
          value={firstName}
          placeholder="First Name"
          onChangeText={Text => setFirstName(Text)}
        />
        <Text fontSize="xs">FiLastst Name</Text>
        <Input
          value={lastName}
          placeholder="First Name"
          onChangeText={Text => setLastName(Text)}
        />
      </VStack>
      <Button
        mx={5}
        bg={PRIMARY.ORANGE}
        colorScheme="orange"
        onPress={() => handleSubmit()}>
        <Text color="white" fontSize="xs">
          Simpan
        </Text>
      </Button>
    </Box>
  );
};

export default Profile;
