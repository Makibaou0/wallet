import React, {useEffect, useState} from 'react';
import {
  Actionsheet,
  ArrowBackIcon,
  ArrowForwardIcon,
  Box,
  Button,
  FlatList,
  HStack,
  Input,
  Pressable,
  ScrollView,
  Text,
  VStack,
  useDisclose,
} from 'native-base';
import {PRIMARY, SECONDARY, WW} from '../statis/Statis';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import OkIcon from '../assets/icons/OkIcon';
import {GETAPI} from '../utils/ConfigApi';

const InputId = route => {
  const Navigation = route.route.navigation;
  const params = route.route.route.params;
  const {isOpen, onOpen, onClose} = useDisclose();
  const insets = useSafeAreaInsets();
  const [idPel, setidPel] = useState('');
  const [dataHarga, setdataHarga] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const b = await GETAPI({
      key: `daftar-harga/${params.kategori}`,
    });
    const filteredProducts = b.data.filter(
      product => product.brand === params.title,
    );

    setdataHarga(filteredProducts);
  };

  return (
    <Box bg={PRIMARY.BLUE} flex={1} pt={insets.top}>
      <HStack space={2} p={5} bg={PRIMARY.BLUE}>
        <Pressable onPress={() => Navigation.goBack()}>
          <ArrowBackIcon color="white" size={23} />
        </Pressable>
        <Text fontSize="md" color="white">
          {params.title}
        </Text>
      </HStack>
      <VStack
        pb={insets.bottom}
        justifyContent={'space-between'}
        flex={1}
        bg="white"
        p={5}
        space={2}>
        <Input
          onChangeText={TEXT => setidPel(TEXT)}
          fontSize={'md'}
          placeholder="Masukan ID Pelanggan"
        />
        <ScrollView>
          <HStack flex={1} flexWrap={'wrap'} space={2}>
            {dataHarga.map((item, index) => {
              return (
                <Box
                  alignItems={'center'}
                  justifyContent={'center'}
                  mb={2}
                  key={index}
                  bg={SECONDARY.GREY4}
                  p={2}
                  w={WW * 0.2}
                  rounded="lg">
                  <Text textAlign={'center'} numberOfLines={2} fontSize="2xs">
                    {params.title == 'MOBILE LEGENDS'
                      ? item.product_name.slice(15, item.product_name.length)
                      : item.product_name}
                  </Text>
                </Box>
              );
            })}
          </HStack>
        </ScrollView>

        <Button bg={PRIMARY.BLUE} colorScheme="blue" onPress={() => onOpen()}>
          <Text fontWeight={'semibold'} color="white" fontSize="md">
            Lanjut
          </Text>
        </Button>
      </VStack>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          <VStack w="100%" space={4} p={2}>
            <HStack>
              <Text fontWeight={'semibold'} fontSize="sm">
                Detail Informasi
              </Text>
            </HStack>
            <HStack justifyContent={'space-between'}>
              <Text fontSize="xs">IDPEL</Text>
              <Text fontSize="xs">{idPel}</Text>
            </HStack>
            <HStack justifyContent={'space-between'}>
              <Text fontSize="xs">NAMA</Text>
              <Text fontSize="xs">Ares</Text>
            </HStack>

            <HStack justifyContent={'space-between'}>
              <Text fontSize="xs">BL/TH</Text>
              <Text fontSize="xs">Jul/23</Text>
            </HStack>
            <HStack>
              <Text fontWeight={'semibold'} fontSize="sm">
                Detail Pembayaran
              </Text>
            </HStack>
            <HStack justifyContent={'space-between'}>
              <Text fontSize="xs">RP TAG PLN</Text>
              <Text fontSize="xs">Rp 247.500</Text>
            </HStack>
            <HStack justifyContent={'space-between'}>
              <Text fontSize="xs">ADMIN</Text>
              <Text fontSize="xs">Rp 2.500</Text>
            </HStack>
            <Box
              rounded="0"
              style={{
                borderWidth: 1,
                borderStyle: 'dashed',
                borderColor: 'black',
              }}
            />
            <HStack justifyContent={'space-between'}>
              <Text fontSize="sm" fontWeight={'semibold'}>
                Total Pembayaran
              </Text>
              <Text fontSize="sm" fontWeight={'semibold'}>
                Rp 250.000
              </Text>
            </HStack>
            <HStack py={5} alignItems={'center'} space={2}>
              <OkIcon size={24} color={PRIMARY.ORANGE} />
              <HStack space={2}>
                <Text fontSize="xs">
                  Seluruh transaksi kamu cepat dan aman. Dengan melanjutkan
                  proses ini, kamu menyetujui
                  <Pressable>
                    <Text fontSize="xs">Syarat Dan Ketentuan</Text>
                  </Pressable>
                </Text>
              </HStack>
            </HStack>
            <Pressable
              rounded={'3xl'}
              p={2}
              px={5}
              bg={PRIMARY.BLUE}
              onPress={() => {
                console.log('hello');
              }}>
              <HStack alignItems={'center'} justifyContent={'space-between'}>
                <Text color={'white'} fontWeight={'semibold'} fontSize="md">
                  Bayar
                </Text>
                <HStack alignItems={'center'} space={2}>
                  <Text color={'white'} fontWeight={'semibold'} fontSize="md">
                    Rp 250.000
                  </Text>
                  <Box rounded="full" bg="white" p={1}>
                    <ArrowForwardIcon size={'sm'} color={PRIMARY.BLUE} />
                  </Box>
                </HStack>
              </HStack>
            </Pressable>
          </VStack>
        </Actionsheet.Content>
      </Actionsheet>
    </Box>
  );
};

export default InputId;
