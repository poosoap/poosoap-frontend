import {RefObject} from 'react';
import {GeoError, GeoPosition, getCurrentPosition} from 'react-native-geolocation-service';
import WebView from 'react-native-webview';

export const getCurrentPositions = (webViewRef: RefObject<WebView<{}>>, enableHighAccuracy: boolean) => {
    try {
        /*임시데이터를 이용한 웹뷰 띄우는 기능*/
        webViewRef.current?.postMessage(
            JSON.stringify({latitude: 33.450701, longitude: 126.570667}),
        );

        /*좌표 구하는 기능*/
        /**
         * @TODO
         * 1. 아래의 함수 호출(Geolocation.getCurrentPosition)이 undefined 안 뜨게 해야합니다.
         *    에러 메시지: TypeError: undefined is not a function
         * 2. successCallback 부분(position이 돌려지는 부분)에 임시데이터로 구성해놓은 postMessage에 33.450701 와 126.570667 를
         *   각각 position.coords.latitude, position.coords.longitude 로 변경해서 전송하게 해야합니다.
         * @CODE
         * getCurrentPosition(
            (position: GeoPosition) => console.log(position.coords.latitude),
            (error: GeoError) => console.log(`not get position error: ${error.code}, ${error.message}`),
            {enableHighAccuracy, timeout: 4000, maximumAge: 4000}
        );*/
    } catch (error) {
        console.log(`not success try: ${error}`);
    }
};
