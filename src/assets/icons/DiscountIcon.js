import {View, Text} from 'react-native';
import React from 'react';
import {Path, Svg} from 'react-native-svg';

const DiscountIcon = props => {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M9.15233 2.00205C8.759 1.97716 8.36956 2.17993 8.17381 2.54893L6.89061 4.96885L4.19334 5.4415C3.64434 5.5375 3.27159 6.05161 3.34959 6.60361L3.73241 9.31455L1.82811 11.2813C1.44011 11.6823 1.44011 12.3178 1.82811 12.7188L3.73241 14.6876L3.34959 17.3985C3.27159 17.9505 3.64434 18.4636 4.19334 18.5606L6.89061 19.0333L8.17381 21.4513C8.43481 21.9433 9.04 22.1416 9.541 21.8966L12 20.6935L14.4609 21.8946C14.9619 22.1396 15.5642 21.9433 15.8262 21.4513L17.1094 19.0333L19.8066 18.5606C20.3556 18.4646 20.7303 17.9486 20.6523 17.3966L20.2695 14.6856L22.1738 12.7188C22.5588 12.3188 22.5589 11.6823 22.1719 11.2813L20.2676 9.3126L20.6504 6.60166C20.7284 6.04966 20.3537 5.53655 19.8047 5.43955L17.1074 4.96689L15.8242 2.54893C15.5642 2.05793 14.9609 1.86057 14.4609 2.10557L12 3.30674L9.53905 2.10557C9.41405 2.04432 9.28344 2.01035 9.15233 2.00205ZM8.99998 7.0001C10.105 7.0001 11 7.8951 11 9.0001C11 10.1051 10.105 11.0001 8.99998 11.0001C7.89498 11.0001 6.99998 10.1051 6.99998 9.0001C6.99998 7.8951 7.89498 7.0001 8.99998 7.0001ZM14.4433 7.85752C14.6333 7.83027 14.8345 7.8761 15 8.0001C15.331 8.2491 15.3984 8.71793 15.1504 9.04893L10.0508 15.8497C9.80177 16.1817 9.33098 16.2481 8.99998 16.0001C8.66898 15.7511 8.60159 15.2823 8.84959 14.9513L13.9492 8.15049C14.0737 7.98449 14.2533 7.88477 14.4433 7.85752ZM8.99998 8.0001C8.73477 8.0001 8.48041 8.10546 8.29288 8.29299C8.10534 8.48053 7.99998 8.73488 7.99998 9.0001C7.99998 9.26531 8.10534 9.51967 8.29288 9.7072C8.48041 9.89474 8.73477 10.0001 8.99998 10.0001C9.2652 10.0001 9.51955 9.89474 9.70709 9.7072C9.89463 9.51967 9.99998 9.26531 9.99998 9.0001C9.99998 8.73488 9.89463 8.48053 9.70709 8.29299C9.51955 8.10546 9.2652 8.0001 8.99998 8.0001ZM15 13.0001C16.105 13.0001 17 13.8951 17 15.0001C17 16.1051 16.105 17.0001 15 17.0001C13.895 17.0001 13 16.1051 13 15.0001C13 13.8951 13.895 13.0001 15 13.0001ZM15 14.0001C14.7348 14.0001 14.4804 14.1055 14.2929 14.293C14.1053 14.4805 14 14.7349 14 15.0001C14 15.2653 14.1053 15.5197 14.2929 15.7072C14.4804 15.8947 14.7348 16.0001 15 16.0001C15.2652 16.0001 15.5196 15.8947 15.7071 15.7072C15.8946 15.5197 16 15.2653 16 15.0001C16 14.7349 15.8946 14.4805 15.7071 14.293C15.5196 14.1055 15.2652 14.0001 15 14.0001Z"
        fill={props.color}
      />
    </Svg>
  );
};

export default DiscountIcon;