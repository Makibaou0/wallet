import {View, Text} from 'react-native';
import React from 'react';
import {Path, Svg} from 'react-native-svg';

const BillIcon = props => {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M19 2C19 2.552 18.552 3 18 3C17.448 3 17 2.552 17 2H15C15 2.552 14.552 3 14 3C13.448 3 13 2.552 13 2H11C11 2.552 10.552 3 10 3C9.448 3 9 2.552 9 2H7C7 2.552 6.552 3 6 3C5.448 3 5 2.552 5 2H4C3.448 2 3 2.448 3 3V20C3 21.105 3.895 22 5 22H19C20.105 22 21 21.105 21 20V3C21 2.448 20.552 2 20 2H19ZM13 18H7C6.448 18 6 17.552 6 17C6 16.448 6.448 16 7 16H13C13.552 16 14 16.448 14 17C14 17.552 13.552 18 13 18ZM13 14H7C6.448 14 6 13.552 6 13C6 12.448 6.448 12 7 12H13C13.552 12 14 12.448 14 13C14 13.552 13.552 14 13 14ZM17.5 18H16.5C16.224 18 16 17.776 16 17.5V16.5C16 16.224 16.224 16 16.5 16H17.5C17.776 16 18 16.224 18 16.5V17.5C18 17.776 17.776 18 17.5 18ZM17.5 14H16.5C16.224 14 16 13.776 16 13.5V12.5C16 12.224 16.224 12 16.5 12H17.5C17.776 12 18 12.224 18 12.5V13.5C18 13.776 17.776 14 17.5 14ZM17 9H7C6.448 9 6 8.552 6 8C6 7.448 6.448 7 7 7H17C17.552 7 18 7.448 18 8C18 8.552 17.552 9 17 9Z"
        fill={props.color}
      />
    </Svg>
  );
};

export default BillIcon;