import {View, Text} from 'react-native';
import React from 'react';
import {Path, Svg} from 'react-native-svg';

const MessageIcon = props => {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M4 4C3.334 4 2.74677 4.32708 2.38477 4.83008C2.14077 5.16808 2.24856 5.64719 2.60156 5.86719L11.3828 11.3398C11.7608 11.5758 12.2392 11.5758 12.6172 11.3398L21.3613 5.82031C21.7283 5.58831 21.8198 5.08409 21.5488 4.74609C21.1838 4.29209 20.627 4 20 4H4ZM21.5156 8.08594C21.432 8.08686 21.3471 8.10991 21.2676 8.16016L12.6172 13.6152C12.2392 13.8502 11.7608 13.8493 11.3828 13.6133L2.73047 8.22266C2.41247 8.02466 2 8.25391 2 8.62891V18C2 19.105 2.895 20 4 20H20C21.105 20 22 19.105 22 18V8.56445C22 8.28245 21.7665 8.08317 21.5156 8.08594Z"
        fill={props.color}
      />
    </Svg>
  );
};

export default MessageIcon;
