import React from 'react';
import {Svg, Path} from 'react-native-svg';

export const UserIcon = ({stroke = '#696969', size = 25}) => (
  <Svg width={size} height={size} viewBox="0 0 25 24" fill="none">
    <Path
      d="M20.84 22C20.84 18.13 16.99 15 12.25 15C7.50997 15 3.65997 18.13 3.65997 22M12.25 12C13.5761 12 14.8478 11.4732 15.7855 10.5355C16.7232 9.59785 17.25 8.32608 17.25 7C17.25 5.67392 16.7232 4.40215 15.7855 3.46447C14.8478 2.52678 13.5761 2 12.25 2C10.9239 2 9.65212 2.52678 8.71444 3.46447C7.77676 4.40215 7.24997 5.67392 7.24997 7C7.24997 8.32608 7.77676 9.59785 8.71444 10.5355C9.65212 11.4732 10.9239 12 12.25 12Z"
      stroke={stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const TelescopeIcon = ({stroke = '#696969', size = 25}) => (
  <Svg width={size} height={size} viewBox="0 0 35 35" fill="none">
    <Path
      d="M31.7042 26.0894V26.0165C31.675 25.6227 31.6167 25.2436 31.5146 24.8644L28.8021 7.20399C28.7729 6.08107 28.2771 5.01649 27.4167 4.27274C26.5417 3.5144 25.3604 3.1644 24.2083 3.32482C22.2542 3.6019 20.7812 5.41024 20.7812 7.52482V10.1352C19.8333 9.49357 18.6958 9.12899 17.5 9.12899C16.3042 9.12899 15.1667 9.49357 14.2188 10.1352V7.52482C14.2188 5.41024 12.7458 3.6019 10.7917 3.32482C9.63958 3.1644 8.45833 3.49982 7.58333 4.27274C6.72292 5.01649 6.22708 6.08107 6.19792 7.20399L3.48542 24.8644C3.38333 25.229 3.325 25.6082 3.31042 26.0165V26.0894C3.31042 26.0894 3.28125 26.2061 3.28125 26.2498C3.28125 29.2686 5.73125 31.7186 8.75 31.7186C11.7688 31.7186 14.2188 29.2686 14.2188 26.2498V20.9998C14.9188 20.5623 16.0417 20.0519 17.5 20.0519C18.9583 20.0519 20.0813 20.5623 20.7812 20.9998V26.2498C20.7812 29.2686 23.2313 31.7186 26.25 31.7186C29.2688 31.7186 31.7188 29.2686 31.7188 26.2498C31.7188 26.1915 31.7188 26.1332 31.7188 26.0894H31.7042ZM24.5146 5.48315C24.6021 5.48315 24.7042 5.46857 24.7917 5.46857C25.2292 5.46857 25.6521 5.62899 25.9875 5.92065C26.3813 6.27065 26.6146 6.76649 26.6146 7.29149C26.6146 7.34982 26.6146 7.40815 26.6146 7.4519L28.7583 21.4227C28 21.029 27.1542 20.7811 26.2354 20.7811C24.9958 20.7811 23.8729 21.204 22.9542 21.904V13.1394V7.52482C22.9542 6.50399 23.6396 5.6144 24.5 5.49774L24.5146 5.48315ZM8.37083 7.4519C8.37083 7.4519 8.37083 7.33524 8.37083 7.29149C8.37083 6.76649 8.60417 6.25607 8.99792 5.92065C9.40625 5.57065 9.93125 5.42482 10.4708 5.49774C11.3458 5.6144 12.0167 6.50399 12.0167 7.52482V13.1394V21.9186C11.0979 21.2186 9.975 20.7957 8.73542 20.7957C7.81667 20.7957 6.97083 21.0436 6.2125 21.4373L8.35625 7.46649L8.37083 7.4519ZM8.75 29.5311C6.97083 29.5311 5.5125 28.1019 5.46875 26.3227L5.62917 25.2727C6.0375 23.9311 7.27708 22.954 8.75 22.954C10.5583 22.954 12.0312 24.4269 12.0312 26.2352C12.0312 28.0436 10.5583 29.5165 8.75 29.5165V29.5311ZM17.5 17.8644C16.2021 17.8644 15.0938 18.1707 14.2188 18.5352V13.4019C14.8167 12.1186 16.0854 11.3019 17.5 11.3019C18.9146 11.3019 20.1833 12.1332 20.7812 13.4019V18.5352C19.9062 18.1561 18.7979 17.8498 17.5 17.8498V17.8644ZM26.25 29.5311C24.4417 29.5311 22.9688 28.0582 22.9688 26.2498C22.9688 24.4415 24.4417 22.9686 26.25 22.9686C27.7229 22.9686 28.9479 23.9457 29.3708 25.2873L29.5312 26.3373C29.4875 28.1165 28.0292 29.5457 26.25 29.5457V29.5311Z"
      stroke={'none'}
      fill={stroke}
    />
  </Svg>
);

export const DocumentIcon = () => (
  <Svg width="25" height="24" viewBox="0 0 25 24" fill="none">
    <Path
      d="M22.75 10V15C22.75 20 20.75 22 15.75 22H9.75C4.75 22 2.75 20 2.75 15V9C2.75 4 4.75 2 9.75 2H14.75"
      stroke="#696969"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M7.75 13H13.75M7.75 17H11.75M22.75 10H18.75C15.75 10 14.75 9 14.75 6V2L22.75 10Z"
      stroke="#696969"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
