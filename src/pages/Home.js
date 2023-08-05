import React, {useEffect, useState} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {
  Actionsheet,
  Box,
  Button,
  FlatList,
  HStack,
  Image,
  Input,
  Pressable,
  Text,
  VStack,
  useDisclose,
  useToast,
} from 'native-base';
import {PRIMARY, SECONDARY, WH, WW} from '../statis/Statis';
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
import axios from 'axios';
import {getDataFromMMKV} from '../utils/ConfigMMKV';

const Home = route => {
  const Navigation = route.route.navigation;
  const [showBalance, setshowBalance] = useState(true);
  const [balance, setBalance] = useState(0);
  const [amount, setamount] = useState(0);
  const [sheet, setSheet] = useState('');
  const insets = useSafeAreaInsets();
  const {isOpen, onClose, onOpen} = useDisclose();
  useEffect(() => {
    getBalance();
  }, [amount]);
  const getBalance = async () => {
    const bal = await GETAPI({
      key: 'balance',
    });
    setBalance(bal.data.balance);
  };
  const MainCard = [
    {
      title: 'topup',
      icon: <PlusIcon size={24} color={'white'} />,
      color: PRIMARY.ORANGE,
    },
    {
      title: 'transfer',
      icon: <UpwardIcon size={24} color={'white'} />,
      color: SECONDARY.PURPLE,
    },
    {
      title: 'Request',
      icon: <BellowIcon size={24} color={'white'} />,
      color: SECONDARY.SOFTRED,
    },
  ];
  const ShortCut = [
    {
      title: 'Internet',
      icon: <InternetIcon size={24} color={PRIMARY.ORANGE} />,
    },
    {
      title: 'Gold',
      icon: <GoldIcon size={24} color={PRIMARY.ORANGE} />,
    },
    {
      title: 'Electricity',
      icon: <ElectricityIcon size={24} color={PRIMARY.ORANGE} />,
    },
    {
      title: 'Others',
      icon: <OthersIcon size={24} color={PRIMARY.ORANGE} />,
    },
  ];
  const toast = useToast();
  const handleSubmit = () => {
    let data = JSON.stringify({
      amount: amount,
    });
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `https://tht-api.nutech-integrasi.app/${sheet}`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getDataFromMMKV('token')}`,
      },
      data: data,
    };

    axios
      .request(config)
      .then(response => {
        console.log(response.data);

        toast.show({
          title: response.data.message,
          background: 'success.500',
          duration: 1999,
        });
        setamount(0);
        onClose();
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
          <Text fontSize="md" color="white">
            Balance
          </Text>
          <HStack space={3}>
            <Text fontWeight={'bold'} fontSize={'2xl'} color="white">
              {showBalance === true
                ? ` Rp. ${formattedCurrency(balance)}`
                : '• • • • • • •'}
            </Text>
            <Pressable
              onPress={() => setshowBalance(!showBalance)}
              opacity={0.5}
              justifyContent={'center'}>
              {showBalance === true ? (
                <EyeHideIcon size={24} color={'white'} />
              ) : (
                <EyeShowIcon size={24} color={'white'} />
              )}
            </Pressable>
          </HStack>
        </VStack>
        <Pressable
          justifyContent={'center'}
          alignItems={'center'}
          onPress={() => Navigation.navigate('Notifikasi')}>
          <Box rounded={'full'} bg="white" size={50} opacity={0.2} />

          <Box position="absolute">
            <BellIcon size={24} color="white" />
          </Box>
        </Pressable>
      </HStack>
      <Box
        mt={5}
        mx={5}
        shadow={3}
        style={{
          shadowColor: SECONDARY.GREY2,
        }}
        bg="white"
        py={5}
        rounded="lg">
        <HStack justifyContent={'space-evenly'}>
          {MainCard.map((item, index) => {
            return (
              <VStack space={1} key={index} alignItems={'center'}>
                <Pressable
                  alignItems={'center'}
                  justifyContent={'center'}
                  size={41}
                  rounded={'lg'}
                  bg={item.color}
                  onPress={() => {
                    setSheet(item.title), onOpen();
                  }}>
                  {item.icon}
                </Pressable>
                <Text fontSize="sm">{item.title.toUpperCase()}</Text>
              </VStack>
            );
          })}
        </HStack>
      </Box>
      <HStack justifyContent={'space-between'} mt={5} mx={5}>
        {ShortCut.map((item, index) => {
          return (
            <VStack
              key={index}
              space={1}
              alignItems={'center'}
              justifyContent={'center'}
              w={70}
              h={71}
              borderWidth={1}
              borderColor={SECONDARY.GREY4}
              bg="white"
              rounded="lg">
              {item.icon}
              <Text fontSize="2xs">{item.title}</Text>
            </VStack>
          );
        })}
      </HStack>
      <VStack mt={3} space={2}>
        <Text px={5} fontWeight={'semibold'} fontSize="xl">
          Promo For You
        </Text>
        <FlatList
          showsHorizontalScrollIndicator={false}
          px={5}
          horizontal
          data={[1, 2, 3]}
          scrollEventThrottle={1}
          renderItem={() => (
            <Box mr={5} bg={PRIMARY.BLUE} px="5" py={8} rounded="xl">
              <HStack alignItems="center" space={2}>
                <VStack>
                  <Text color="white" fontWeight={'semibold'} fontSize="md">
                    Doorprice Handphone
                  </Text>
                  <Text color="white" fontSize="xs">
                    Get Coupuns Now
                  </Text>
                </VStack>
                <ImageIcon size={24} color="white" />
              </HStack>
            </Box>
          )}
        />
      </VStack>
      <VStack mt={3} space={2}>
        <Text px={5} fontWeight={'semibold'} fontSize="xl">
          Financial Articles
        </Text>
        <FlatList
          showsHorizontalScrollIndicator={false}
          px={5}
          horizontal
          data={[1, 2, 3]}
          scrollEventThrottle={1}
          renderItem={() => (
            <VStack w={200} mr={5} rounded="xl">
              <Image
                rounded={'lg'}
                source={{
                  uri: 'https://wallpaperaccess.com/full/317501.jpg',
                }}
                alt="Alternate Text"
                w={200}
                h={130}
              />
              <Text fontWeight={'semibold'} fontSize="md">
                Lorem Ipsum Dolor
              </Text>
              <Text color={SECONDARY.GREY1} numberOfLines={1} fontSize="xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              </Text>
            </VStack>
          )}
        />
      </VStack>
      <Actionsheet isOpen={isOpen} onClose={() => onClose()}>
        <Actionsheet.Content>
          <VStack space={5} w="100%" h={WH * 0.5} p="5" rounded="lg">
            <Text fontSize="md">Masukan Jumlah {sheet}</Text>
            <Input
              value={amount.toString()}
              keyboardType="number-pad"
              onChangeText={Text => setamount(Text)}
              fontSize={'20'}
            />
            <Text color="danger.500" fontSize="xs">
              Minimum {sheet} Rp. 10.000
            </Text>
            <Button
              disabled={amount < 10000 ? true : false}
              bg={amount >= 10000 ? PRIMARY.ORANGE : SECONDARY.GREY2}
              colorScheme="orange"
              onPress={() => handleSubmit()}>
              <Text fontWeight={'semibold'} color="white" fontSize="md">
                Selesai
              </Text>
            </Button>
          </VStack>
        </Actionsheet.Content>
      </Actionsheet>
    </Box>
  );
};

export default Home;
