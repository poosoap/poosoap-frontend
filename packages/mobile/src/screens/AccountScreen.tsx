import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {RootStackParamList} from '../navigator/type';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';

import {login, logout, unlink} from '@react-native-seoul/kakao-login';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerTitle: {fontSize: 32, textAlign: 'center', padding: 10},
});

type Props = BottomTabScreenProps<RootStackParamList, 'Account'>;

const AccountScreen: React.FC<Props> = ({}) => {
  const signInWithKakao = async () => {
    try {
      const result = await login();
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };

  const signOutWithKakako = async () => {
    try {
      const result = await logout();
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };

  const unlinkWithKakao = async () => {
    try {
      const result = await unlink();
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <View style={styles.container}>
      <Button onPress={signInWithKakao} title={'Sign In'} />
      <Button onPress={signOutWithKakako} title={'Sign Out'} />
      <Button onPress={unlinkWithKakao} title={'Unlink Kakao'} />
      <Text style={styles.centerTitle}>Account Page</Text>
    </View>
  );
};

export default AccountScreen;
