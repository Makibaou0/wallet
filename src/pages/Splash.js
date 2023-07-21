import {Box, Image, Text} from 'native-base';
import React, {useEffect, useState} from 'react';
import {PRIMARY} from '../statis/Statis';
import {Animated} from 'react-native';
import {saveDataToMMKV} from '../utils/ConfigMMKV';
import axios from 'axios';
import {POSTAPI} from '../utils/ConfigApi';

const Splash = route => {
  const Navigation = route.route.navigation;
  const [text, setText] = useState('');
  const [opacity] = useState(new Animated.Value(0));

  useEffect(() => {
    animateText();
  }, []);

  const animateText = () => {
    const headers = {
      'Content-Type': 'application/json', // Contoh header khusus (dapat disesuaikan)
      'api-key': 'sICicKR0YJWcHWctBa9hklle6U76fikj', // Contoh header khusus (dapat disesuaikan)
    };
    const params = {
      username: 'aeropie13@gmail.com',
      password: 'password',
    };

    const message = 'Wallet App';

    let index = 0;
    const typingInterval = setInterval(() => {
      setText(message.substring(0, index));
      index++;
      if (index > message.length) {
        clearInterval(typingInterval);
        setTimeout(() => {
          POSTAPI({
            key: 'login',
            params: params,
          });
          Navigation.navigate('TabStack');
        }, 500); // Mengatur timeout sesuai dengan kebutuhan Anda
      }
    }, 100);

    Animated.timing(opacity, {
      toValue: 1,
      duration: message.length * 10, // Mengatur durasi animasi sesuai panjang teks
      useNativeDriver: true,
    }).start(() => {});
  };
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
      <Animated.View fad>
        <Animated.Text style={{opacity}}>
          <Text fontWeight={'semibold'} color="white" fontSize="xl">
            {text}
          </Text>
        </Animated.Text>
      </Animated.View>
    </Box>
  );
};

export default Splash;
