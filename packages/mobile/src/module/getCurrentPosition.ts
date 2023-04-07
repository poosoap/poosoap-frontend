import {RefObject} from 'react';
import WebView from 'react-native-webview';

export const getCurrentPositions = (webViewRef: RefObject<WebView<{}>>, enableHighAccuracy: boolean) => {
    try {
        /*임시데이터를 이용한 웹뷰 띄우는 기능*/
        webViewRef.current?.postMessage(
            JSON.stringify({latitude: 33.450701, longitude: 126.570667}),
        );
    } catch (error) {
        console.log(`not success try: ${error}`);
    }
};
