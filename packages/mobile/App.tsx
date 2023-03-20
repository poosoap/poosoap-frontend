import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import AccountScreen from './src/screens/AccountScreen';
import {RootStackParamList} from './src/navigator/type';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{tabBarLabel: '화장실 찾기'}}
        />
        <Tab.Screen
          name="Account"
          component={AccountScreen}
          options={{tabBarLabel: '계정'}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
