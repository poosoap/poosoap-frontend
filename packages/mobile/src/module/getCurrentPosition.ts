import {RefObject} from 'react';
import WebView from 'react-native-webview';
import {CurrentPositionType} from '../type/position';
import LocationModule from './LocationModule';

export const getCurrentPositions = (): Promise<CurrentPositionType> => {
  return new Promise<CurrentPositionType>((resolve, reject) => {
    try {
      /*임시데이터를 이용한 웹뷰 띄우는 기능*/
      LocationModule.getCurrentPosition()
        .then((position: CurrentPositionType) => {
          const {latitude, longitude} = position; // latitude와 longitude의 값을 가져오는부분
          resolve({latitude, longitude}); // 위도와 경도를 돌려주는 부분
        })
        .catch(error => console.log(error));
    } catch (error) {
      console.log(`not success try: ${error}`);
    };
  });
};
