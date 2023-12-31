import {View, Text} from 'react-native';
import React from 'react';
import {Path, Svg} from 'react-native-svg';

const DangerIcon = props => {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2ZM12.5 17H11.5C11.224 17 11 16.776 11 16.5V15.5C11 15.224 11.224 15 11.5 15H12.5C12.776 15 13 15.224 13 15.5V16.5C13 16.776 12.776 17 12.5 17ZM12 13C11.448 13 11 12.552 11 12V8C11 7.448 11.448 7 12 7C12.552 7 13 7.448 13 8V12C13 12.552 12.552 13 12 13Z"
        fill={props.color}
      />
    </Svg>
  );
};

export default DangerIcon;
