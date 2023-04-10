import React, {useEffect, useRef, useState} from 'react';
import {
  Alert,
  BackHandler,
  AppState,
  ActivityIndicator,
  ToastAndroid,
  Linking,
  Dimensions,
} from 'react-native';
import {RootStackParamList} from '../navigator/type';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import WebView, {WebViewNavigation} from 'react-native-webview';
import {requestLocationPermission} from '../module/requestLocationPermission';
import {getCurrentPositions} from '../module/getCurrentPosition';
import {WebViewProgressEvent} from 'react-native-webview/lib/WebViewTypes';
import LocationModule from '../module/LocationModule';
import {CurrentPositionType} from '../type/position';

type Props = BottomTabScreenProps<RootStackParamList, 'Home'>;

const HomeScreen: React.FC<Props> = ({}) => {
  const webViewRef = useRef<WebView>(null);

  const onLoadProgress = (event: WebViewProgressEvent) => {
    if (event.nativeEvent.progress === 1) { //webView가 로딩되는중인지 체크하는 조건문
      if (webViewRef.current) {
        requestLocationPermission()
          .then(response => {
            getCurrentPositions().then((position: CurrentPositionType) => {
              webViewRef.current?.postMessage(JSON.stringify(position));
            });
          })
          .catch(error => console.log(`permissionError: ${error}`));
      }
    }
  };

  return (
    <WebView
      ref={webViewRef}
      onLoadProgress={onLoadProgress}
      source={{uri: 'http://poosoapapp-test.kro.kr:8080'}}
    />
  );
};

export default HomeScreen;
