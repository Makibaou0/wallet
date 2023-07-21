import {View, Text} from 'react-native';
import React from 'react';
import {Path, Svg} from 'react-native-svg';

const ChatIcon = props => {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M20 2C20.5304 2 21.0391 2.21071 21.4142 2.58579C21.7893 2.96086 22 3.46957 22 4V16C22 16.5304 21.7893 17.0391 21.4142 17.4142C21.0391 17.7893 20.5304 18 20 18H6L2 22V4C2 3.46957 2.21071 2.96086 2.58579 2.58579C2.96086 2.21071 3.46957 2 4 2H20ZM11 6V9H8V11H11V14H13V11H16V9H13V6H11Z"
        fill={props.color}
      />
    </Svg>
  );
};

export default ChatIcon;
