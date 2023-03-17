import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {RootStackParamList} from '../navigator/type';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';

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
  return (
    <View style={styles.container}>
      <Text style={styles.centerTitle}>Map Page</Text>
    </View>
  );
};

export default HomeScreen;