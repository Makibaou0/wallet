import axios from 'axios';
import {getDataFromMMKV, saveDataToMMKV} from './ConfigMMKV';

const baseUrlApi = 'https://tht-api.nutech-integrasi.app';

export const POSTAPI = async key => {
  const url = `${baseUrlApi}/${key.key}`;
  const params = key.params;

  if (key.type == 'auth') {
    const headers = {
      'Content-Type': 'application/json', // Contoh header khusus (dapat disesuaikan)
      'api-key': 'sICicKR0YJWcHWctBa9hklle6U76fikj', // Contoh header khusus (dapat disesuaikan)
    };

    try {
      const response = await axios.post(url, params, {headers});
      const data = response.data;
      console.log(response);

      return data;
    } catch (error) {
      console.log(error);
      return error;
    }
  } else {
    const headers = {
      'Content-Type': 'application/json', // Contoh header khusus (dapat disesuaikan)
      // 'api-key': 'sICicKR0YJWcHWctBa9hklle6U76fikj', // Contoh header khusus (dapat disesuaikan)
    };

    try {
      const response = await axios.post(url, params, {headers});
      const data = response.data;
      console.log(response);

      return data;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
};
export const GETAPI = async key => {
  const url = `${baseUrlApi}/${key.key}`;
  console.log(url);
  const params = key.params;
  const headers = {
    'Content-Type': 'application/json', // Contoh header khusus (dapat disesuaikan)
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
