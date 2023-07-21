import {View, Text} from 'react-native';
import React from 'react';
import {Path, Svg} from 'react-native-svg';

const EmailIcon = props => {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M12 2C6.48867 2 2 6.48867 2 12C2 17.5113 6.48867 22 12 22H16C16.1325 22.0019 16.2641 21.9774 16.387 21.928C16.51 21.8786 16.6219 21.8052 16.7163 21.7122C16.8107 21.6191 16.8856 21.5082 16.9368 21.386C16.9879 21.2637 17.0142 21.1325 17.0142 21C17.0142 20.8675 16.9879 20.7363 16.9368 20.614C16.8856 20.4918 16.8107 20.3809 16.7163 20.2878C16.6219 20.1948 16.51 20.1214 16.387 20.072C16.2641 20.0226 16.1325 19.9981 16 20H12C7.56933 20 4 16.4307 4 12C4 7.56933 7.56933 4 12 4C16.4307 4 20 7.56933 20 12V13.5C20 14.3408 19.3408 15 18.5 15C17.6592 15 17 14.3408 17 13.5V12C17.0001 11.9628 16.9982 11.9256 16.9941 11.8887C16.9339 9.19039 14.712 7 12 7C9.25042 7 7 9.25042 7 12C7 14.7496 9.25042 17 12 17C13.4136 17 14.6879 16.3989 15.5996 15.4473C16.2307 16.3809 17.2977 17 18.5 17C20.4212 17 22 15.4212 22 13.5V12C22 6.48867 17.5113 2 12 2ZM12 9C13.6687 9 15 10.3313 15 12C15 13.6687 13.6687 15 12 15C10.3313 15 9 13.6687 9 12C9 10.3313 10.3313 9 12 9Z"
        fill={props.color}
      />
    </Svg>
  );
};

export default EmailIcon;