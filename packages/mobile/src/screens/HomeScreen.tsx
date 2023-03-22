import React from 'react';
import {Text, View, StyleSheet, NativeModules, Button} from 'react-native';
import {RootStackParamList} from '../navigator/type';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';

const {CalendarModuleFoo} = NativeModules;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerTitle: {fontSize: 32, textAlign: 'center', padding: 10},
});

type Props = BottomTabScreenProps<RootStackParamList, 'Home'>;

const HomeScreen: React.FC<Props> = ({}) => {
  const onPress = () => {
    console.log('We will invoke the native module here!');
    CalendarModuleFoo.createCalendarEvent('TestName', 'testLocation');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.centerTitle}>Map Page</Text>
      <Button
        title="Click to invoke your native module!"
        color="#841584"
        onPress={onPress}
      />
    </View>
  );
};

export default HomeScreen;
