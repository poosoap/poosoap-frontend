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
import WebView, { WebViewNavigation } from 'react-native-webview';
import {requestLocationPermission} from '../module/requestLocationPermission';
import {getCurrentPositions} from '../module/getCurrentPosition';
import {WebViewProgressEvent} from 'react-native-webview/lib/WebViewTypes';
import { ShouldStartLoadRequest } from 'react-native-webview/lib/WebViewTypes';

type Props = BottomTabScreenProps<RootStackParamList, 'Home'>;

const HomeScreen: React.FC<Props> = ({}) => {

  const webViewRef = useRef<WebView>(null);

  const onLoadProgress = (event: WebViewProgressEvent) => {
    if (event.nativeEvent.progress === 1) {
      if (webViewRef.current) {
        requestLocationPermission()
          .then(response => {
            if (response.coarseLocationPermission === true) {
              if(response.fineLocationPermission === false){
                getCurrentPositions(webViewRef, false);
              } else {
                getCurrentPositions(webViewRef, true)
              }
            } else {
              ToastAndroid.show(
                '위치 권한이 허용되어 있지 않습니다.',
                ToastAndroid.SHORT,
              );
              onLoadProgress(event);
            }
          })
          .catch(error => console.log(`permissionError: ${error}`));
      }
    }
  };
  
  return ( 
    <WebView
      ref={webViewRef}
      onLoadProgress={onLoadProgress}
      source={{uri: 'http://localhost:8080'}}
    />
  );
};

export default HomeScreen;
