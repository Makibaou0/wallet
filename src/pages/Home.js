import React, {useEffect, useRef, useState} from 'react';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import {
  Actionsheet,
  AddIcon,
  ArrowDownIcon,
  ArrowUpIcon,
  Box,
  Button,
  ChevronRightIcon,
  FlatList,
  HStack,
  Image,
  Pressable,
  QuestionIcon,
  StatusBar,
  Text,
  VStack,
  useDisclose,
} from 'native-base';
import {PRIMARY, SECONDARY, WH, WW, dataTransaksi} from '../statis/Statis';

import {Animated} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import PlusIcon from '../assets/icons/PlusIcon';
import UpwardIcon from '../assets/icons/UpwardIcon';
import BellowIcon from '../assets/icons/BellowIcon';
import QrIcon from '../assets/icons/QrIcon';
import InternetIcon from '../assets/icons/InternetIcon';
import GoldIcon from '../assets/icons/GoldIcon';
import ElectricityIcon from '../assets/icons/ElectricityIcon';
import OthersIcon from '../assets/icons/OthersIcon';
import BellIcon from '../assets/icons/BellIcon';
import axios from 'axios';
import {GETAPI} from '../utils/ConfigApi';
import {formattedCurrency} from '../utils/FormatCurrency';

const Home = route => {
  const insets = useSafeAreaInsets();
  const Navigation = route.route.navigation;
  const {isOpen, onClose, onOpen} = useDisclose();
  const [saldo, setsaldo] = useState(0);

  const [dataUser, setdataUser] = useState({
    id: 1,
    name: 'Mohammad Roffi',
    email: 'aeropie13@gmail.com',
    email_verified_at: null,
    created_at: null,
    updated_at: null,
    pin: '$2y$10$RsRuRzFNoHuPu247zRHToutDd8FqG3VfsId3zRQACAO0wHXACbLqW',
  });
  const [dataLayanan, setdataLayanan] = useState([
    {
      title: 'MOBILE LEGENDS',
      image:
        'https://i.pinimg.com/originals/c9/13/7e/c9137e7a2879f90e22df9fc5cd3bf85f.jpg',
      kategori: 'prabayar',
    },
    {
      title: 'PLN',
      image:
        'https://pln24.files.wordpress.com/2013/07/perusahaan_listrik_negara.png?w=1680',
      kategori: 'prabayar',
    },
    {
      title: 'TELKOMSEL',
      image:
        'https://1.bp.blogspot.com/-8gBJqY4Qkbs/XvV2abjU6ZI/AAAAAAAAGRA/q00Ot8cebqs4Taf0JN9NtIgDlmpiAZpSQCK4BGAsYHg/s1000/logo-telkomsel-vektor.png',
      kategori: 'prabayar',
    },
    {
      title: 'INDOSAT',
      image:
        'https://e7.pngegg.com/pngimages/640/583/png-clipart-indosat-logo-im3-ooredoo-internet-im-text-logo.png',
      kategori: 'prabayar',
    },
    {
      title: 'AXIS',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Axis_logo_2015.svg/1200px-Axis_logo_2015.svg.png',
      kategori: 'prabayar',
    },
    {
      title: 'SMARTFREN',
      image:
        'https://1.bp.blogspot.com/-w7jbXEmMmVQ/YIK2bxHsLjI/AAAAAAAACmY/5ZjQHOu2kOI-EhFLpgntSTbt6lylzoX2QCNcBGAsYHQ/s2048/Smartfren.png',
      kategori: 'prabayar',
    },
    {
      title: 'TRI',
      image:
        'https://upload.wikimedia.org/wikipedia/id/thumb/6/68/3-brand.svg/1200px-3-brand.svg.png',
      kategori: 'prabayar',
    },
    {
      title: 'XL',
      image:
        'https://upload.wikimedia.org/wikipedia/id/thumb/5/55/XL_logo_2016.svg/1200px-XL_logo_2016.svg.png',
      kategori: 'prabayar',
    },
    {
      title: 'GO PAY',
      image: 'https://gopay.co.id/icon.png',
      kategori: 'prabayar',
    },
    {
      title: 'SHOPEE PAY',
      image:
        'https://play-lh.googleusercontent.com/B9cLFGLw4H6KD8I1nGElIZB9lKWjx3tTBEp4FmqCk0ietXHxJQq8YV5TwDIRxqof6A=w240-h480-rw',
      kategori: 'prabayar',
    },

    {
      title: 'PLN PASCABAYAR',
      image:
        'https://pln24.files.wordpress.com/2013/07/perusahaan_listrik_negara.png?w=1680',
      kategori: 'pascabayar',
    },
    {
      title: 'PDAM',
      image:
        'https://static.tildacdn.com/tild3530-6431-4261-b564-663864373330/PDAM.png',
      kategori: 'pascabayar',
    },
    {
      title: 'BPJS KESEHATAN',
      image:
        'https://blog.pengajartekno.com/wp-content/uploads/2022/11/logo-bpjs-kesehatan.png',
      kategori: 'pascabayar',
    },
    {
      title: 'INTERNET PASCABAYAR',
      image:
        'https://img2.pngdownload.id/20180611/xal/kisspng-internet-postpaid-mobile-phone-cablaggio-prepaymen-5b1f0ab1b91fb7.7987972115287610097583.jpg',
      kategori: 'pascabayar',
    },
    {
      title: 'PBB',
      image:
        'https://scontent.fcgk42-1.fna.fbcdn.net/v/t39.30808-6/300749108_596330598854579_8028178614901614106_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=FgrOdLKhuHUAX-f4tby&_nc_ht=scontent.fcgk42-1.fna&oh=00_AfDNOR0crYUwE3DRgU_OluD7bM3psxAoM8n2MvGU343Vfg&oe=64B14BEB',
      kategori: 'pascabayar',
    },
    {
      title: 'GAS NEGARA',
      image:
        'https://static.vecteezy.com/system/resources/previews/000/596/840/original/fire-flame-logo-template-vector-icon-oil-gas-and-energy-logo.jpg',
      kategori: 'pascabayar',
    },
    {
      title: 'TV PASCABAYAR',
      image:
        'https://static.vecteezy.com/system/resources/previews/007/688/855/original/tv-logo-free-vector.jpg',
      kategori: 'pascabayar',
    },
  ]);

  const [dataPrabayar, setdataPrabayar] = useState(
    dataLayanan.filter(item => item.kategori === 'prabayar'),
  );
  const [dataPacabayar, setdataPacabayar] = useState(
    dataLayanan.filter(item => item.kategori === 'pascabayar'),
  );
  const [dataSheet, setdataSheet] = useState(dataPrabayar);
  const scrollY = useRef(new Animated.Value(0)).current;
  const [elementHeight, setElementHeight] = useState(100);
  // Threshold untuk menentukan seberapa jauh ScrollView harus digulir untuk menghilangkan elemen
  const HIDE_THRESHOLD = 150;

  // Membuat animasi transparansi berdasarkan posisi scroll
  const opacity = scrollY.interpolate({
    inputRange: [0, HIDE_THRESHOLD],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });
  const height = scrollY.interpolate({
    inputRange: [0, 200], // Rentang scroll yang ingin Anda gunakan
    outputRange: [WH * 0.3, WH * 0.14], // Rentang tinggi elemen yang ingin Anda terapkan
    extrapolate: 'clamp', // Membatasi nilai outputRange agar tidak melampaui batas yang ditentukan
  });

  const positionY = scrollY.interpolate({
    inputRange: [0, 100], // Rentang scroll yang ingin Anda gunakan
    outputRange: [WH * 0.15, 10], // Rentang posisi Y elemen yang ingin Anda terapkan
    extrapolate: 'clamp', // Membatasi nilai outputRange agar tidak melampaui batas yang ditentukan
  });
  const data1 = [
    {
      title: 'Top Up',
      icon: <PlusIcon size={22} color={'white'} />,
      color: PRIMARY.ORANGE,
    },
    {
      title: 'Bayar Tagihan',
      icon: <UpwardIcon size={22} color={'white'} />,
      color: SECONDARY.PURPLE,
    },
    // {
    //   title: 'Minta',
    //   icon: <BellowIcon size={22} color={'white'} />,
    //   color: SECONDARY.SOFTRED,
    // },
  ];
  const data2 = [
    {
      title: 'PLN Pascabayar',
      icon: <ElectricityIcon size={30} color={PRIMARY.ORANGE} />,
    },
    {
      title: 'Pulsa & Paket Data',
      icon: <InternetIcon size={30} color={PRIMARY.ORANGE} />,
    },
    {
      title: 'PLN Token',
      icon: <ElectricityIcon size={30} color={PRIMARY.ORANGE} />,
    },
    {
      title: 'BPJS',
      icon: <OthersIcon size={30} color={PRIMARY.ORANGE} />,
    },
  ];
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const b = await GETAPI({
      key: 'profile',
    });
    const c = await GETAPI({
      key: 'check-saldo',
    });
    setsaldo(c.data.saldo);
    setdataUser(b.data);
  };
  const handleClicSheet = item => {
    onClose();
    Navigation.navigate('InputId', {
      title: item.title,
      kategori: item.kategori,
    });
  };

  const handleOpen = item => {
    setdataSheet(item);
    onOpen();
  };
  return (
    <VStack bg={PRIMARY.BLUE} flex={1} pb={insets.bottom}>
      <VStack pb={5}>
        <Animated.View
          style={{
            opacity,
          }}>
          <Box position={'absolute'}>
            <Image
              source={require('../assets/images/Wallpaper.png')}
              alt="Alternate Text"
              size={WW}
            />
          </Box>
        </Animated.View>
        <Animated.View
          style={{
            opacity,
          }}>
          <Pressable
            alignItems={'center'}
            justifyContent={'center'}
            position="absolute"
            m={5}
            right={0}
            mt={insets.top + 10}
            onPress={() => Navigation.navigate('Notifikasi')}>
            <BellIcon size={24} color={'white'} />
            <Box
              rounded="full"
              position="absolute"
              size={45}
              bg={'white'}
              opacity={0.2}
            />
          </Pressable>
        </Animated.View>
        <Animated.View
          style={{
            paddingTop: insets.top,
            height,
            transform: [{translateY: positionY}],
          }}>
          <VStack w={WW} p={5}>
            <HStack justifyContent={'space-between'} alignItems={'center'}>
              <VStack>
                <Text color="white" fontSize="xs">
                  Saldo
                </Text>
                <Text color="white" fontWeight={'bold'} fontSize="xl">
                  Rp. {formattedCurrency(saldo)}
                </Text>
              </VStack>
            </HStack>

            {/* <HStack mx={5} pt={5} justifyContent={'space-between'}>
              {data1.map((item, index) => {
                return (
                  <VStack key={index} alignItems={'center'} space={2}>
                    <Button
                      key={index}
                      size={12}
                      rounded={'full'}
                      bg={item.color}
                      colorScheme={PRIMARY.BLUE}
                      onPress={() => {
                        console.log('hello');
                      }}>
                      {item.icon}
                    </Button>
                    <Text color="white" fontWeight={'bold'} fontSize="xs">
                      {item.title}
                    </Text>
                  </VStack>
                );
              })}
            </HStack> */}
          </VStack>
        </Animated.View>
      </VStack>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: insets.bottom,
        }}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {
            useNativeDriver: false,
          },
        )}
        scrollEventThrottle={1} // Nilai throttle untuk mengurangi update event scroll
      >
        <VStack flex={1} px={5} bg="white" space={2}>
          <Animated.View
            style={{
              opacity,
            }}>
            <VStack mt={5} space={5}>
              <Text fontWeight={'semibold'} fontSize="sm">
                Top Up
              </Text>

              <HStack justifyContent={'space-between'} rounded="lg">
                {dataPrabayar.slice(0, 3).map((item, index) => {
                  return (
                    <Pressable
                      key={index}
                      onPress={() =>
                        Navigation.navigate('InputId', {
                          title: item.title,
                          kategori: item.kategori,
                        })
                      }>
                      <VStack
                        w={61}
                        key={index}
                        space={2}
                        alignItems={'center'}>
                        <Box
                          bg={SECONDARY.GREY4}
                          alignItems={'center'}
                          justifyContent={'center'}
                          key={index}
                          rounded="full">
                          <Image
                            source={{
                              uri: item.image,
                            }}
                            alt="Logo"
                            size={47}
                            rounded={'full'}
                          />
                        </Box>
                        <Text
                          numberOfLines={2}
                          textAlign={'center'}
                          fontSize="2xs">
                          {item.title}
                        </Text>
                      </VStack>
                    </Pressable>
                  );
                })}
                <Pressable onPress={() => handleOpen(dataPrabayar)}>
                  <VStack w={61} space={2} alignItems={'center'}>
                    <Box
                      bg={SECONDARY.GREY4}
                      alignItems={'center'}
                      justifyContent={'center'}
                      rounded="full"
                      p={3}>
                      <OthersIcon size="24" color={PRIMARY.ORANGE} />
                    </Box>
                    <Text numberOfLines={2} textAlign={'center'} fontSize="2xs">
                      Lihat Semua
                    </Text>
                  </VStack>
                </Pressable>
              </HStack>
              <Text fontWeight={'semibold'} fontSize="sm">
                Bayar Tagihan
              </Text>

              <HStack justifyContent={'space-between'} rounded="lg">
                {dataPacabayar.slice(0, 3).map((item, index) => {
                  return (
                    <Pressable
                      key={index}
                      onPress={() =>
                        Navigation.navigate('InputId', {
                          title: item.title,
                          kategori: item.kategori,
                        })
                      }>
                      <VStack
                        w={61}
                        key={index}
                        space={2}
                        alignItems={'center'}>
                        <Box
                          bg={SECONDARY.GREY4}
                          alignItems={'center'}
                          justifyContent={'center'}
                          key={index}
                          rounded="full">
                          <Image
                            source={{
                              uri: item.image,
                            }}
                            alt="Logo"
                            size={47}
                            rounded={'full'}
                          />
                        </Box>
                        <Text
                          numberOfLines={2}
                          textAlign={'center'}
                          fontSize="2xs">
                          {item.title}
                        </Text>
                      </VStack>
                    </Pressable>
                  );
                })}
                <Pressable onPress={() => handleOpen(dataPacabayar)}>
                  <VStack w={61} space={2} alignItems={'center'}>
                    <Box
                      bg={SECONDARY.GREY4}
                      alignItems={'center'}
                      justifyContent={'center'}
                      rounded="full"
                      p={3}>
                      <OthersIcon size="24" color={PRIMARY.ORANGE} />
                    </Box>
                    <Text numberOfLines={2} textAlign={'center'} fontSize="2xs">
                      Lihat Semua
                    </Text>
                  </VStack>
                </Pressable>
              </HStack>
            </VStack>
          </Animated.View>
          <Box>
            <HStack alignItems={'center'} justifyContent={'space-between'}>
              <Text fontWeight={'semibold'} fontSize="md">
                Recent Transactions
              </Text>
              <Pressable onPress={() => Navigation.navigate('History')}>
                <HStack alignItems={'center'} space={2}>
                  <Text fontWeight={'semibold'} fontSize="sm">
                    See All
                  </Text>
                  <ChevronRightIcon color={PRIMARY.BLUE} size="sm" />
                </HStack>
              </Pressable>
            </HStack>
          </Box>

          {dataTransaksi.map((item, index) => {
            return (
              <HStack key={index} space={2} mb={5} bg="white" rounded="lg">
                <Box bg="blueGray.100" p="2" rounded="lg">
                  {item.kategori === 'Income' ? (
                    <ArrowDownIcon color="success.500" />
                  ) : (
                    <ArrowUpIcon color="danger.500" />
                  )}
                </Box>
                <HStack flex={1} justifyContent={'space-between'}>
                  <VStack>
                    <Text fontWeight={'semibold'} fontSize="xs">
                      {item.title}
                    </Text>
                    <Text color="gray.400" fontSize="2xs">
                      {item.desc}
                    </Text>
                  </VStack>
                  <VStack alignItems={'flex-end'}>
                    <Text
                      color={
                        item.kategori === 'Income'
                          ? 'success.500'
                          : 'danger.500'
                      }
                      fontWeight={'semibold'}
                      fontSize="xs">
                      {item.kategori === 'Income' ? '+ ' : '- '}
                      {'Rp ' + item.nominal}
                    </Text>
                    <Text color="gray.400" fontSize="2xs">
                      {item.date}
                    </Text>
                  </VStack>
                </HStack>
              </HStack>
            );
          })}
        </VStack>
      </ScrollView>
      <Actionsheet isOpen={isOpen} onClose={() => onClose()}>
        <Actionsheet.Content>
          <FlatList
            numColumns={4}
            flexWrap={'wrap'}
            data={dataSheet}
            renderItem={({item, index}) => (
              <Pressable
                alignItems={'center'}
                size={WW * 0.25}
                mb={5}
                onPress={() => handleClicSheet(item)}>
                <VStack space={2} alignItems={'center'}>
                  <Image
                    source={{
                      uri: item.image,
                    }}
                    alt="Alternate Text"
                    size={WW * 0.15}
                    resizeMode="contain"
                    rounded={'full'}
                  />
                  <Text textAlign={'center'} numberOfLines={2} fontSize="2xs">
                    {item.title}
                  </Text>
                </VStack>
              </Pressable>
            )}
          />
        </Actionsheet.Content>
      </Actionsheet>
    </VStack>
  );
};

export default Home;

// import React, {useState} from 'react';
// import {useSafeAreaInsets} from 'react-native-safe-area-context';
// import {
//   Box,
//   Button,
//   FlatList,
//   HStack,
//   Image,
//   Pressable,
//   Text,
//   VStack,
// } from 'native-base';
// import {PRIMARY, SECONDARY, WH, WW} from '../statis/Statis';
// import EyeHideIcon from '../assets/icons/EyeHideIcon';
// import BellIcon from '../assets/icons/BellIcon';
// import EyeShowIcon from '../assets/icons/EyeShowIcon';
// import PlusIcon from '../assets/icons/PlusIcon';
// import UpwardIcon from '../assets/icons/UpwardIcon';
// import BellowIcon from '../assets/icons/BellowIcon';
// import InternetIcon from '../assets/icons/InternetIcon';
// import GoldIcon from '../assets/icons/GoldIcon';
// import ElectricityIcon from '../assets/icons/ElectricityIcon';
// import OthersIcon from '../assets/icons/OthersIcon';
// import ImageIcon from '../assets/icons/ImageIcon';

// const Home = () => {
//   const [showBalance, setshowBalance] = useState(true);
//   const insets = useSafeAreaInsets();
//   const MainCard = [
//     {
//       title: 'Top Up',
//       icon: <PlusIcon size={24} color={'white'} />,
//       color: PRIMARY.ORANGE,
//     },
//     {
//       title: 'Send',
//       icon: <UpwardIcon size={24} color={'white'} />,
//       color: SECONDARY.PURPLE,
//     },
//     {
//       title: 'Request',
//       icon: <BellowIcon size={24} color={'white'} />,
//       color: SECONDARY.SOFTRED,
//     },
//   ];
//   const ShortCut = [
//     {
//       title: 'Internet',
//       icon: <InternetIcon size={24} color={PRIMARY.ORANGE} />,
//     },
//     {
//       title: 'Gold',
//       icon: <GoldIcon size={24} color={PRIMARY.ORANGE} />,
//     },
//     {
//       title: 'Electricity',
//       icon: <ElectricityIcon size={24} color={PRIMARY.ORANGE} />,
//     },
//     {
//       title: 'Others',
//       icon: <OthersIcon size={24} color={PRIMARY.ORANGE} />,
//     },
//   ];
//   return (
//     <Box flex={1} bg="white">
//       <Box bg={PRIMARY.BLUE} position={'absolute'}>
//         <Image
//           source={require('../assets/images/Wallpaper.png')}
//           alt="Alternate Text"
//           w={WW}
//           h={187}
//           resizeMode="stretch"
//         />
//       </Box>
//       <HStack
//         alignItems={'center'}
//         justifyContent={'space-between'}
//         pt={insets.top + WH * 0.02}
//         px={5}
//         rounded="lg">
//         <VStack>
//           <Text fontSize="md" color="white">
//             Balance
//           </Text>
//           <HStack space={3}>
//             <Text fontWeight={'bold'} fontSize={'2xl'} color="white">
//               {showBalance === true ? 'Rp 5.000.000' : '• • • • • • •'}
//             </Text>
//             <Pressable
//               onPress={() => setshowBalance(!showBalance)}
//               opacity={0.5}
//               justifyContent={'center'}>
//               {showBalance === true ? (
//                 <EyeHideIcon size={24} color={'white'} />
//               ) : (
//                 <EyeShowIcon size={24} color={'white'} />
//               )}
//             </Pressable>
//           </HStack>
//         </VStack>
//         <Pressable
//           justifyContent={'center'}
//           alignItems={'center'}
//           onPress={() => {
//             console.log('hello');
//           }}>
//           <Box rounded={'full'} bg="white" size={50} opacity={0.2} />

//           <Box position="absolute">
//             <BellIcon size={24} color="white" />
//           </Box>
//         </Pressable>
//       </HStack>
//       <Box
//         mt={5}
//         mx={5}
//         shadow={3}
//         style={{
//           shadowColor: SECONDARY.GREY2,
//         }}
//         bg="white"
//         py={5}
//         rounded="lg">
//         <HStack justifyContent={'space-evenly'}>
//           {MainCard.map((item, index) => {
//             return (
//               <VStack space={1} key={index} alignItems={'center'}>
//                 <Pressable
//                   alignItems={'center'}
//                   justifyContent={'center'}
//                   size={41}
//                   rounded={'lg'}
//                   bg={item.color}
//                   onPress={() => {
//                     console.log('hello');
//                   }}>
//                   {item.icon}
//                 </Pressable>
//                 <Text fontSize="sm">{item.title}</Text>
//               </VStack>
//             );
//           })}
//         </HStack>
//       </Box>
//       <HStack justifyContent={'space-between'} mt={5} mx={5}>
//         {ShortCut.map((item, index) => {
//           return (
//             <VStack
//               space={1}
//               alignItems={'center'}
//               justifyContent={'center'}
//               w={70}
//               h={71}
//               borderWidth={1}
//               borderColor={SECONDARY.GREY4}
//               bg="white"
//               rounded="lg">
//               {item.icon}
//               <Text fontSize="2xs">{item.title}</Text>
//             </VStack>
//           );
//         })}
//       </HStack>
//       <VStack mt={3} space={2}>
//         <Text px={5} fontWeight={'semibold'} fontSize="xl">
//           Promo For You
//         </Text>
//         <FlatList
//           showsHorizontalScrollIndicator={false}
//           px={5}
//           horizontal
//           data={[1, 2, 3]}
//           scrollEventThrottle={1}
//           renderItem={() => (
//             <Box mr={5} bg={PRIMARY.BLUE} px="5" py={8} rounded="xl">
//               <HStack alignItems="center" space={2}>
//                 <VStack>
//                   <Text color="white" fontWeight={'semibold'} fontSize="md">
//                     Doorprice Handphone
//                   </Text>
//                   <Text color="white" fontSize="xs">
//                     Get Coupuns Now
//                   </Text>
//                 </VStack>
//                 <ImageIcon size={24} color="white" />
//               </HStack>
//             </Box>
//           )}
//         />
//       </VStack>
//       <VStack mt={3} space={2}>
//         <Text px={5} fontWeight={'semibold'} fontSize="xl">
//           Financial Articles
//         </Text>
//         <FlatList
//           showsHorizontalScrollIndicator={false}
//           px={5}
//           horizontal
//           data={[1, 2, 3]}
//           scrollEventThrottle={1}
//           renderItem={() => (
//             <VStack w={200} mr={5} rounded="xl">
//               <Image
//                 rounded={'lg'}
//                 source={{
//                   uri: 'https://wallpaperaccess.com/full/317501.jpg',
//                 }}
//                 alt="Alternate Text"
//                 w={200}
//                 h={130}
//               />
//               <Text fontWeight={'semibold'} fontSize="md">
//                 Lorem Ipsum Dolor
//               </Text>
//               <Text color={SECONDARY.GREY1} numberOfLines={1} fontSize="xs">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
//                 eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
//               </Text>
//             </VStack>
//           )}
//         />
//       </VStack>
//     </Box>
//   );
// };

// export default Home;
