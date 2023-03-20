import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createScreenOptions} from './src/navigator/bottomTabNavigator';
import AccountScreen from './src/screens/AccountScreen';
import HomeScreen from './src/screens/HomeScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RootStackParamList} from './src/navigator/type';

const Tab = createBottomTabNavigator<RootStackParamList>();

function App(): JSX.Element {
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
