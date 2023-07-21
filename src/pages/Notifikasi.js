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
  Left,
  Heading,
  Center,
  FlatList,
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
import CommercialIcon from '../assets/icons/CommercialIcon';
import DiscountIcon from '../assets/icons/DiscountIcon';
import BellowIcon from '../assets/icons/BellowIcon';
const Notifikasi = route => {
  const Navigation = route.route.navigation;
  const insets = useSafeAreaInsets();
  const data = [
    {
      title: 'Promo 40% Discount for special day in the long weekend',
      time: '6 Hour Ago',
      icon: <DiscountIcon color="white" size={24} />,
      color: SECONDARY.SOFTRED,
    },
    {
      title:
        'The sistem will have a maintainance for a several hour in this day',
      time: '6 Hour Ago',
      icon: <CommercialIcon color="white" size={24} />,
      color: SECONDARY.PURPLE,
    },
    {
      title:
        'The sistem will have a maintainance for a several hour in this day',
      time: '6 Hour Ago',
      icon: <BellowIcon color="white" size={24} />,
      color: PRIMARY.ORANGE,
    },
    {
      title: 'Promo 40% Discount for special day in the long weekend',
      time: '6 Hour Ago',
      icon: <DiscountIcon color="white" size={24} />,
      color: SECONDARY.SOFTRED,
    },
    {
      title:
        'The sistem will have a maintainance for a several hour in this day',
      time: '6 Hour Ago',
      icon: <CommercialIcon color="white" size={24} />,
      color: SECONDARY.PURPLE,
    },
    {
      title:
        'The sistem will have a maintainance for a several hour in this day',
      time: '6 Hour Ago',
      icon: <BellowIcon color="white" size={24} />,
      color: PRIMARY.ORANGE,
    },
    {
      title: 'Promo 40% Discount for special day in the long weekend',
      time: '6 Hour Ago',
      icon: <DiscountIcon color="white" size={24} />,
      color: SECONDARY.SOFTRED,
    },
    {
      title:
        'The sistem will have a maintainance for a several hour in this day',
      time: '6 Hour Ago',
      icon: <CommercialIcon color="white" size={24} />,
      color: SECONDARY.PURPLE,
    },
    {
      title:
        'The sistem will have a maintainance for a several hour in this day',
      time: '6 Hour Ago',
      icon: <BellowIcon color="white" size={24} />,
      color: PRIMARY.ORANGE,
    },
  ];
  return (
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

      <VStack flex={1} pt={insets.top}>
        <HStack pb={2} mx={5} justifyContent={'center'} alignItems={'center'}>
          <Button
            size={8}
            colorScheme={'white'}
            bg={PRIMARY.BLUE}
            onPress={() => Navigation.goBack()}>
            <ArrowBackIcon color={'white'} size={6} />
          </Button>

          <Text
            fontWeight={'semibold'}
            color="white"
            flex={1}
            textAlign={'center'}
            fontSize="md">
            Notifkasi
          </Text>
          <Box size={8} />
        </HStack>
        <Box flex={1} bg="white">
          <FlatList
            showsVerticalScrollIndicator={false}
            bg="white"
            contentContainerStyle={{
              paddingBottom: insets.bottom,
            }}
            data={data}
            renderItem={({item, index}) => (
              <Pressable
                mx={5}
                borderBottomWidth={1}
                borderBottomColor={SECONDARY.GREY4}
                onPress={() => console.log('dss')}>
                <HStack space={4} py={5} flex={1}>
                  <Box
                    justifyContent={'center'}
                    alignItems={'center'}
                    h={37}
                    w={37}
                    bg={item.color}
                    rounded="md">
                    {item.icon}
                  </Box>
                  <VStack space={2} flex={1}>
                    <Text
                      fontWeight={'medium'}
                      numberOfLines={2}
                      flex={1}
                      fontSize="xs">
                      {item.title}
                    </Text>
                    <Text color={SECONDARY.GREY2} fontSize="xs">
                      {item.time}
                    </Text>
                  </VStack>
                </HStack>
              </Pressable>
            )}
          />
        </Box>
      </VStack>
    </Box>
  );
};

export default Notifikasi;
