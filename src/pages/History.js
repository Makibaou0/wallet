import {
  ArrowDownIcon,
  ArrowUpIcon,
  Box,
  Button,
  FlatList,
  HStack,
  Image,
  StatusBar,
  Text,
  VStack,
} from 'native-base';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {WH, dataTransaksi} from '../statis/Statis';

const History = route => {
  const Navigation = route.route.navigation;
  const filter = [
    {
      title: 'All',
      active: true,
    },
    {
      title: 'Income',
      active: false,
    },
    {
      title: 'Expense',
      active: false,
    },
  ];

  return (
    <Box flex={1}>
      <SafeAreaView
        style={{
          backgroundColor: 'black',
        }}>
        <StatusBar barStyle={'light-content'} />
      </SafeAreaView>
      <VStack flex={1}>
        <HStack
          justifyContent={'space-between'}
          alignItems={'center'}
          bg="black"
          px={5}
          pb={5}>
          <VStack>
            <Text fontSize="xs" color="white">
              Balance
            </Text>
            <Text fontWeight={'semibold'} fontSize="xl" color="white">
              Rp 5.450.000
            </Text>
          </VStack>
          <Image
            rounded={'full'}
            source={{
              uri: 'https://wallpaperaccess.com/full/317501.jpg',
            }}
            alt="Alternate Text"
            size="xs"
          />
        </HStack>
        <Text fontWeight={'semibold'} p={5} fontSize="sm">
          Transactions
        </Text>
        <HStack space={4} px={5}>
          {filter.map((item, index) => {
            return (
              <Button
                opacity={item.active === true ? 1 : 0.5}
                key={index}
                rounded={'md'}
                bg="white"
                p={2}
                px={5}
                colorScheme="black"
                onPress={() => {
                  console.log('hello');
                }}>
                <Text fontSize="xs" fontWeight={'semibold'}>
                  {item.title}
                </Text>
              </Button>
            );
          })}
        </HStack>

        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: WH * 0.05,
          }}
          flexGrow={1}
          p={5}
          data={dataTransaksi}
          renderItem={({item}) => (
            <HStack space={4} mb={5} bg="white" p="3" rounded="lg">
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
                      item.kategori === 'Income' ? 'success.500' : 'danger.500'
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
          )}
        />
      </VStack>
    </Box>
  );
};

export default History;
