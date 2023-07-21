import {View, Text} from 'react-native';
import React from 'react';
import {Path, Svg} from 'react-native-svg';

const BellowIcon = props => {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2ZM11.293 16.707L8 13.414C7.61 13.023 7.61 12.39 8 12C8.39 11.61 9.024 11.61 9.414 12L11 13.586V8C11 7.448 11.448 7 12 7C12.552 7 13 7.448 13 8V13.586L14.586 12C14.976 11.61 15.61 11.61 16 12C16.39 12.39 16.39 13.024 16 13.414L12.707 16.707C12.317 17.097 11.683 17.097 11.293 16.707Z"
        fill={props.color}
      />
    </Svg>
  );
};

export default BellowIcon;
