import {View, Text} from 'react-native';
import React from 'react';
import {Path, Svg} from 'react-native-svg';

const ElectricityIcon = props => {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M12.4998 1C12.3978 1.00001 12.2981 1.03127 12.2143 1.08958C12.1305 1.14789 12.0666 1.23045 12.0311 1.32617L6.15414 12.4688C6.05377 12.6278 6.00029 12.8119 5.99984 13C5.99984 13.2652 6.1052 13.5196 6.29273 13.7071C6.48027 13.8946 6.73462 14 6.99984 14H11.9998V22.5C11.9998 22.6326 12.0525 22.7598 12.1463 22.8536C12.2401 22.9473 12.3672 23 12.4998 23C12.5919 23.0001 12.6821 22.9748 12.7607 22.9269C12.8393 22.879 12.9031 22.8104 12.9452 22.7285L18.8651 11.502L18.8631 11.5C18.9518 11.3482 18.999 11.1758 18.9998 11C18.9998 10.7348 18.8945 10.4804 18.7069 10.2929C18.5194 10.1054 18.2651 10 17.9998 10H12.9998V1.5C12.9998 1.36739 12.9472 1.24021 12.8534 1.14645C12.7596 1.05268 12.6324 1 12.4998 1V1ZM2.99007 2.99023C2.79114 2.99029 2.59674 3.04967 2.43173 3.16078C2.26672 3.27189 2.1386 3.42969 2.06374 3.614C1.98889 3.79832 1.9707 4.00077 2.0115 4.19547C2.05231 4.39017 2.15025 4.56828 2.29281 4.70703L4.29281 6.70703C4.38495 6.803 4.49532 6.87963 4.61745 6.93241C4.73958 6.98519 4.87101 7.01308 5.00405 7.01443C5.13709 7.01579 5.26907 6.99058 5.39224 6.94029C5.51542 6.89 5.62732 6.81564 5.7214 6.72156C5.81548 6.62748 5.88984 6.51558 5.94013 6.3924C5.99042 6.26923 6.01563 6.13725 6.01427 6.00421C6.01292 5.87117 5.98503 5.73974 5.93225 5.61761C5.87947 5.49548 5.80284 5.38511 5.70687 5.29297L3.70687 3.29297C3.61368 3.19717 3.50224 3.12103 3.37912 3.06903C3.25601 3.01704 3.12372 2.99024 2.99007 2.99023V2.99023ZM20.9803 2.99023C20.7205 2.99798 20.4739 3.10655 20.2928 3.29297L18.2928 5.29297C18.1968 5.38511 18.1202 5.49548 18.0674 5.61761C18.0146 5.73974 17.9868 5.87117 17.9854 6.00421C17.984 6.13725 18.0093 6.26923 18.0595 6.39241C18.1098 6.51558 18.1842 6.62749 18.2783 6.72157C18.3724 6.81564 18.4843 6.89001 18.6074 6.9403C18.7306 6.99058 18.8626 7.01579 18.9956 7.01444C19.1287 7.01308 19.2601 6.9852 19.3822 6.93241C19.5044 6.87963 19.6147 6.803 19.7069 6.70703L21.7069 4.70703C21.8514 4.56657 21.9501 4.38573 21.99 4.18821C22.03 3.99069 22.0093 3.7857 21.9308 3.60012C21.8523 3.41453 21.7195 3.257 21.5499 3.14817C21.3803 3.03935 21.1817 2.98429 20.9803 2.99023V2.99023ZM4.98031 16.9902C4.72051 16.998 4.47393 17.1066 4.29281 17.293L2.29281 19.293C2.19684 19.3851 2.12021 19.4955 2.06743 19.6176C2.01464 19.7397 1.98676 19.8712 1.9854 20.0042C1.98405 20.1373 2.00926 20.2692 2.05954 20.3924C2.10983 20.5156 2.1842 20.6275 2.27827 20.7216C2.37235 20.8156 2.48426 20.89 2.60743 20.9403C2.73061 20.9906 2.86259 21.0158 2.99563 21.0144C3.12867 21.0131 3.2601 20.9852 3.38223 20.9324C3.50436 20.8796 3.61473 20.803 3.70687 20.707L5.70687 18.707C5.85137 18.5666 5.95007 18.3857 5.99003 18.1882C6.02999 17.9907 6.00935 17.7857 5.93081 17.6001C5.85226 17.4145 5.71949 17.257 5.54988 17.1482C5.38027 17.0393 5.18174 16.9843 4.98031 16.9902V16.9902ZM18.9901 16.9902C18.7911 16.9903 18.5967 17.0497 18.4317 17.1608C18.2667 17.2719 18.1386 17.4297 18.0637 17.614C17.9889 17.7983 17.9707 18.0008 18.0115 18.1955C18.0523 18.3902 18.1502 18.5683 18.2928 18.707L20.2928 20.707C20.385 20.803 20.4953 20.8796 20.6175 20.9324C20.7396 20.9852 20.871 21.0131 21.0041 21.0144C21.1371 21.0158 21.2691 20.9906 21.3922 20.9403C21.5154 20.89 21.6273 20.8157 21.7214 20.7216C21.8155 20.6275 21.8899 20.5156 21.9401 20.3924C21.9904 20.2692 22.0156 20.1373 22.0143 20.0042C22.0129 19.8712 21.985 19.7397 21.9323 19.6176C21.8795 19.4955 21.8028 19.3851 21.7069 19.293L19.7069 17.293C19.6137 17.1972 19.5022 17.121 19.3791 17.069C19.256 17.017 19.1237 16.9902 18.9901 16.9902V16.9902Z"
        fill={props.color}
      />
    </Svg>
  );
};

export default ElectricityIcon;
