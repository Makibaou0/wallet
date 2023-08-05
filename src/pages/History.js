import React, {useEffect, useState} from 'react';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import {
  ArrowDownIcon,
  ArrowUpIcon,
  Box,
  Button,
  FlatList,
  HStack,
  Image,
  Pressable,
  ScrollView,
  Text,
  VStack,
} from 'native-base';
import {PRIMARY, SECONDARY, WH, WW, inset} from '../statis/Statis';
import EyeHideIcon from '../assets/icons/EyeHideIcon';
import BellIcon from '../assets/icons/BellIcon';
import EyeShowIcon from '../assets/icons/EyeShowIcon';
import PlusIcon from '../assets/icons/PlusIcon';
import UpwardIcon from '../assets/icons/UpwardIcon';
import BellowIcon from '../assets/icons/BellowIcon';
import InternetIcon from '../assets/icons/InternetIcon';
import GoldIcon from '../assets/icons/GoldIcon';
import ElectricityIcon from '../assets/icons/ElectricityIcon';
import OthersIcon from '../assets/icons/OthersIcon';
import ImageIcon from '../assets/icons/ImageIcon';
import {formattedCurrency} from '../utils/FormatCurrency';
import {GETAPI} from '../utils/ConfigApi';
import {SAMPLEDATA} from '../statis/SampleData';
import axios from 'axios';
import {getDataFromMMKV} from '../utils/ConfigMMKV';

const History = () => {
  const [transactions, setTransactions] = useState([]);
  const insets = useSafeAreaInsets();
  useEffect(() => {
    getHistory();
  }, []);
  const getHistory = async () => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://tht-api.nutech-integrasi.app/transactionHistory',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getDataFromMMKV('token')}`,
      },
    };

    axios
      .request(config)
      .then(response => {
        setTransactions(response.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <Box flex={1} bg="white">
      <Box bg={PRIMARY.BLUE} position={'absolute'}>
        <Image
          source={require('../assets/images/Wallpaper.png')}
          alt="Alternate Text"
          w={WW}
          h={187}
          resizeMode="stretch"
        />
      </Box>
      <HStack
        alignItems={'center'}
        justifyContent={'space-between'}
        pt={insets.top + WH * 0.02}
        px={5}
        rounded="lg">
        <VStack>
          <HStack space={3}>
            <Text fontWeight={'bold'} fontSize={'2xl'} color="white">
              History
            </Text>
          </HStack>
        </VStack>
      </HStack>
      <Box flex={1} mt={5}>
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flexGrow: 1,
            paddingBottom: inset().bottom * 3,
            backgroundColor: 'white',
          }}
          data={transactions}
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
                  bg={
                    item.transaction_type == 'transfer'
                      ? 'danger.500'
                      : 'success.500'
                  }
                  rounded="md">
                  {item.transaction_type == 'transfer' ? (
                    <UpwardIcon color="white" size={24} />
                  ) : (
                    <PlusIcon size={22} color={'white'} />
                  )}
                </Box>
                <VStack space={2} flex={1}>
                  <Text
                    fontWeight={'medium'}
                    numberOfLines={2}
                    flex={1}
                    fontSize="xs">
                    {item.transaction_type.toUpperCase()}
                  </Text>
                  <Text
                    fontWeight={'medium'}
                    numberOfLines={2}
                    flex={1}
                    fontSize="xs">
                    Rp {formattedCurrency(item.amount)}
                  </Text>
                  <Text color={SECONDARY.GREY2} fontSize="xs">
                    {item.transaction_time}
                  </Text>
                </VStack>
              </HStack>
            </Pressable>
          )}
        />
      </Box>
    </Box>
  );
};

export default History;
