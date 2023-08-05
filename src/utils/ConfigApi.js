import axios from 'axios';
import {getDataFromMMKV, saveDataToMMKV} from './ConfigMMKV';

const baseUrlApi = 'https://tht-api.nutech-integrasi.app';

export const POSTAPI = async key => {
  const url = `${baseUrlApi}/${key.key}`;
  const params = key.params;

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${getDataFromMMKV('token')}`,
  };

  try {
    const response = await axios.post(url, params, {headers});
    const data = response.data;

    return data;
  } catch (error) {
    return error;
  }
};
export const GETAPI = async key => {
  const url = `${baseUrlApi}/${key.key}`;
  console.log(url);
  const params = key.params;
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${getDataFromMMKV('token')}`,
  };
  try {
    const response = await axios.get(url, {headers});
    const data = response.data;
    console.log(data);
    return data;
  } catch (error) {
    console.log('Error:', error);
    return null;
  }
};
