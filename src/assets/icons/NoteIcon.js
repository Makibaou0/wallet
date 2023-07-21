import {View, Text} from 'react-native';
import React from 'react';
import {Path, Svg} from 'react-native-svg';

const NoteIcon = props => {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M19.74 7.32994L15.3 2.32994C15.2065 2.22634 15.0924 2.14347 14.9649 2.08663C14.8375 2.0298 14.6995 2.00027 14.56 1.99994H6.56C6.22775 1.99597 5.89797 2.0575 5.5895 2.18099C5.28103 2.30449 4.9999 2.48754 4.76218 2.71969C4.52446 2.95184 4.33479 3.22855 4.20402 3.534C4.07324 3.83946 4.00392 4.16768 4 4.49994V19.4999C4.00392 19.8322 4.07324 20.1604 4.20402 20.4659C4.33479 20.7713 4.52446 21.048 4.76218 21.2802C4.9999 21.5123 5.28103 21.6954 5.5895 21.8189C5.89797 21.9424 6.22775 22.0039 6.56 21.9999H17.44C17.7723 22.0039 18.102 21.9424 18.4105 21.8189C18.719 21.6954 19.0001 21.5123 19.2378 21.2802C19.4755 21.048 19.6652 20.7713 19.796 20.4659C19.9268 20.1604 19.9961 19.8322 20 19.4999V7.99994C19.9994 7.7521 19.9067 7.51333 19.74 7.32994ZM9 11.9999H12C12.2652 11.9999 12.5196 12.1053 12.7071 12.2928C12.8946 12.4804 13 12.7347 13 12.9999C13 13.2652 12.8946 13.5195 12.7071 13.707C12.5196 13.8946 12.2652 13.9999 12 13.9999H9C8.73478 13.9999 8.48043 13.8946 8.29289 13.707C8.10536 13.5195 8 13.2652 8 12.9999C8 12.7347 8.10536 12.4804 8.29289 12.2928C8.48043 12.1053 8.73478 11.9999 9 11.9999ZM15 17.9999H9C8.73478 17.9999 8.48043 17.8946 8.29289 17.707C8.10536 17.5195 8 17.2652 8 16.9999C8 16.7347 8.10536 16.4804 8.29289 16.2928C8.48043 16.1053 8.73478 15.9999 9 15.9999H15C15.2652 15.9999 15.5196 16.1053 15.7071 16.2928C15.8946 16.4804 16 16.7347 16 16.9999C16 17.2652 15.8946 17.5195 15.7071 17.707C15.5196 17.8946 15.2652 17.9999 15 17.9999ZM14.71 7.99994C14.5038 7.97963 14.3139 7.87917 14.1811 7.72019C14.0483 7.5612 13.9833 7.35641 14 7.14994V3.99994L17.74 7.99994H14.71Z"
        fill={props.color}
      />
    </Svg>
  );
};

export default NoteIcon;
