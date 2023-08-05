import {View, Text} from 'react-native';
import React from 'react';
import Home from './src/pages/Home';
import {
  NativeBaseProvider,
  extendTheme,
  StatusBar,
  AddIcon,
  Box,
} from 'native-base';
import {GRAY, PRIMARY} from './src/statis/Statis';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Ob from './src/pages/Ob';
import Login from './src/pages/Login';
import QrIcon from './src/assets/icons/QrIcon';
import Qr from './src/pages/Qr';
import HomeIcon from './src/assets/icons/HomeIcon';
import UserIcon from './src/assets/icons/UserIcon';
import History from './src/pages/History';
import {
  SafeAreaInsetsContext,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import BillIcon from './src/assets/icons/BillIcon';
import MessageIcon from './src/assets/icons/MessageIcon';
import Register from './src/pages/Register';
import Notifikasi from './src/pages/Notifikasi';
import Splash from './src/pages/Splash';
import {theme} from './src/statis/theme';
import Profile from './src/pages/Profile';
import Result from './src/pages/Result';

const HomeScreen = route => {
  return <Home route={route} />;
};
const QrIs = route => {
  return <Qr route={route} />;
};
const ObScreen = route => {
  return <Ob route={route} />;
};
const LoginScreen = route => {
  return <Login route={route} />;
};

const HistoryScreen = route => {
  return <History route={route} />;
};

const RegisterScreen = route => {
  return <Register route={route} />;
};
const NotifikasiScreen = route => {
  return <Notifikasi route={route} />;
};
const SplashScreen = route => {
  return <Splash route={route} />;
};
const ProfileScreen = route => {
  return <Profile route={route} />;
};
const ResultScreen = route => {
  return <Result route={route} />;
};
const TabStackScreen = route => {
  const tabs = [
    {name: 'Home', component: HomeScreen},
    {name: 'CashFlow', component: HistoryScreen},
    {name: 'Qr', component: QrIs},
    {name: 'Message', component: QrIs},
    {name: 'Profile', component: ProfileScreen},
  ];

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: {
          borderTopWidth: 0, // Menghilangkan garis tepi atas
          elevation: 0, // Menghilangkan bayangan di Android

          backgroundColor: 'white',
          position: 'absolute',
        },
        headerShown: false,
        tabBarHideOnKeyboard: true,

        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? (
              <HomeIcon
                size={24}
                color={focused === true ? PRIMARY.BLUE : GRAY}
              />
            ) : (
              <HomeIcon
                size={24}
                color={focused === true ? PRIMARY.BLUE : GRAY}
              />
            );
          }
          if (route.name === 'Qr') {
            iconName = focused ? (
              <Box p={2} bg="white" rounded={'full'} mb={4}>
                <Box rounded={'full'} p={4} bg={PRIMARY.BLUE}>
                  <QrIcon
                    size={30}
                    color={focused === true ? 'white' : 'white'}
                  />
                </Box>
              </Box>
            ) : (
              <Box p={2} bg="white" rounded={'full'} mb={4}>
                <Box rounded={'full'} p={4} bg={PRIMARY.BLUE}>
                  <QrIcon
                    size={30}
                    color={focused === true ? 'white' : 'white'}
                  />
                </Box>
              </Box>
            );
          }
          if (route.name === 'CashFlow') {
            iconName = focused ? (
              <BillIcon
                size={24}
                color={focused === true ? PRIMARY.BLUE : GRAY}
              />
            ) : (
              <BillIcon
                size={24}
                color={focused === true ? PRIMARY.BLUE : GRAY}
              />
            );
          }
          if (route.name === 'Message') {
            iconName = focused ? (
              <MessageIcon
                active={true}
                size={24}
                color={focused === true ? PRIMARY.BLUE : GRAY}
              />
            ) : (
              <MessageIcon
                active={false}
                size={24}
                color={focused === true ? PRIMARY.BLUE : GRAY}
              />
            );
          }
          if (route.name === 'Profile') {
            iconName = focused ? (
              <UserIcon
                active={true}
                size={24}
                color={focused === true ? PRIMARY.BLUE : GRAY}
              />
            ) : (
              <UserIcon
                active={false}
                size={24}
                color={focused === true ? PRIMARY.BLUE : GRAY}
              />
            );
          }
          return iconName;
        },
        tabBarActiveTintColor: PRIMARY.BLUE,
        tabBarInactiveTintColor: GRAY,
      })}>
      {tabs.map((tab, index) => (
        <Tab.Screen
          options={{tabBarLabel: tab.name === 'Qr' ? '' : tab.name}} // Mengatur label menjadi kosong untuk menyembunyikannya
          key={index}
          name={tab.name}
          component={tab.component}
        />
      ))}
    </Tab.Navigator>
  );
};
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <GestureHandlerRootView flex={1}>
      <SafeAreaProvider>
        <NativeBaseProvider theme={theme}>
          <StatusBar
            backgroundColor={PRIMARY.BLUE}
            barStyle={'light-content'}
          />

          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="Splash"
              screenOptions={{
                headerShown: false,
              }}>
              <Stack.Screen name="Splash" component={SplashScreen} />
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="TabStack" component={TabStackScreen} />
              <Stack.Screen name="Result" component={ResultScreen} />
              <Stack.Screen name="Notifikasi" component={NotifikasiScreen} />
              <Stack.Screen name="Profile" component={ProfileScreen} />
              <Stack.Screen name="Register" component={RegisterScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </NativeBaseProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default App;
