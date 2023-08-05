import {MMKV} from 'react-native-mmkv';

const mmkv = new MMKV();

export const saveDataToMMKV = (key, data) => {
  mmkv.set(key, JSON.stringify(data));
};

export const getDataFromMMKV = key => {
  const data = mmkv.getString(key);
  if (!data) {
    return null;
  } else {
    return JSON.parse(data);
  }
};
