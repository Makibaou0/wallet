import {View, Text} from 'react-native';
import React from 'react';
import {Path, Svg} from 'react-native-svg';

const CommercialIcon = props => {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M19.7637 3C19.2957 3 18.8682 3.26559 18.6582 3.68359L18 5L11.6055 7.74023C11.2375 7.89823 11 8.2582 11 8.6582V15.3398C11 15.7398 11.2375 16.1028 11.6055 16.2598L18 19L18.6582 20.3164C18.8682 20.7344 19.2957 21 19.7637 21C20.4467 21 21 20.4467 21 19.7637V13.7285C21.3035 13.5533 21.5557 13.3014 21.7312 12.998C21.9067 12.6946 21.9994 12.3505 22 12C21.9997 11.6492 21.9072 11.3046 21.7317 11.0009C21.5561 10.6972 21.3038 10.4449 21 10.2695V4.23633C21 3.55333 20.4467 3 19.7637 3ZM5 8C3.9 8 3 8.9 3 10V14C3 15.1 3.9 16 5 16H7V20C7 20.552 7.448 21 8 21C8.552 21 9 20.552 9 20V14V9C9 8.448 8.552 8 8 8H5Z"
        fill={props.color}
      />
    </Svg>
  );
};

export default CommercialIcon;
