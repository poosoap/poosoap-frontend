import { RefObject } from 'react';
import WebView from 'react-native-webview';
export const getCurrentPostions = (webViewRef: RefObject<WebView<{}>>) => {
  try{
    /**
     * @TODO
     * react-native-geolocation-service 라이브러리 이용해서 좌표값 전송 기능 구현
     */
    webViewRef.current?.postMessage(JSON.stringify({latitude: 33.450701, longitude: 126.570667}))
  }catch(error){
    console.log(`error1: ${error}`)
  }
};