import {View, Text} from 'react-native';
import React from 'react';
import {Path, Svg} from 'react-native-svg';

const PlusIcon = props => {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2ZM16 13H13V16C13 16.552 12.552 17 12 17C11.448 17 11 16.552 11 16V13H8C7.448 13 7 12.552 7 12C7 11.448 7.448 11 8 11H11V8C11 7.448 11.448 7 12 7C12.552 7 13 7.448 13 8V11H16C16.552 11 17 11.448 17 12C17 12.552 16.552 13 16 13Z"
        fill={props.color}
      />
    </Svg>
  );
};

export default PlusIcon;
