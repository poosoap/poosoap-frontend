import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createScreenOptions} from './src/navigator/bottomTabNavigator';
import {RootStackParamList} from './src/navigator/type';

import HomeScreen from './src/screens/HomeScreen';
import AccountScreen from './src/screens/AccountScreen';

const Tab = createBottomTabNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={createScreenOptions}>
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
