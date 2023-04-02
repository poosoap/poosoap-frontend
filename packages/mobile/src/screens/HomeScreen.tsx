import React, {useEffect, useRef, useState} from 'react';
import {
  Alert,
  BackHandler,
  AppState,
  ActivityIndicator,
  ToastAndroid,
} from 'react-native';
import {RootStackParamList} from '../navigator/type';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import WebView from 'react-native-webview';
import {requestLocationPermission} from '../module/requestLocationPermission';
import {getCurrentPostions} from '../module/getCurrentPosition';

type Props = BottomTabScreenProps<RootStackParamList, 'Home'>;

const HomeScreen: React.FC<Props> = ({}) => {
  const webViewRef = useRef<WebView>(null);
  useEffect(() => {
    requestLocationPermission().then(response => {
      if (response) {
        getCurrentPostions(webViewRef)
      } else {
        ToastAndroid.show("위치 권한이 허용되어 있지 않습니다.", ToastAndroid.SHORT);
        requestLocationPermission()
      }
    }).catch(error => console.log(`permissionError: ${error}`));
  }, []);

  return (
    <WebView
      ref={webViewRef}
      source={{uri: 'http://poosoapapp-test.kro.kr:8080'}}
    />
  );
};

export default HomeScreen;