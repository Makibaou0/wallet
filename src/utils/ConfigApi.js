import axios from 'axios';
import {getDataFromMMKV, saveDataToMMKV} from './ConfigMMKV';

const baseUrlApi = 'https://api-thumbclick.rlangcodes.my.id';
const versionApi = 'v1';
export const LOGINAPI = `${baseUrlApi}/api/${versionApi}/login`;

export const POSTAPI = async key => {
  const url = `${baseUrlApi}/api/${versionApi}/${key.key}`;

  const params = key.params;
  const headers = {
    'Content-Type': 'application/json', // Contoh header khusus (dapat disesuaikan)
    'api-key': 'sICicKR0YJWcHWctBa9hklle6U76fikj', // Contoh header khusus (dapat disesuaikan)
  };

  try {
    const response = await axios.post(url, params, {headers});
    const data = response.data.data;
    saveDataToMMKV('Token', data.token);
    if (url === 'login') {
      saveDataToMMKV('Token', data.token);
    } else {
      return data;
    }
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
};
export const GETAPI = async key => {
  const url = `${baseUrlApi}/api/${versionApi}/${key.key}`;

  const params = key.params;
  const headers = {
    'Content-Type': 'application/json', // Contoh header khusus (dapat disesuaikan)
    Authorization: `Bearer ${getDataFromMMKV('Token')}`,
  };
  try {
    const response = await axios.get(url, {headers});
    const data = response.data;
    return data;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
};
