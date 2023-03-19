import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {RootStackParamList} from '../navigator/type';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen: React.FC<Props> = ({navigation}) => {
  return (
    <View>
      <Text>Map Page</Text>
      <Button
        title="Go to Account"
        onPress={() => navigation.push('Account')}
      />
    </View>
  );
};

export default HomeScreen;
