import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {RootStackParamList} from '../navigator/type';

type Props = NativeStackScreenProps<RootStackParamList, 'Account'>;

const AccountScreen: React.FC<Props> = ({navigation}) => {
  return (
    <View>
      <Text>Account Page</Text>
      <Button title="Go Home" onPress={() => navigation.popToTop()} />
    </View>
  );
};

export default AccountScreen;
