import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import AccountScreen from './src/screens/AccountScreen';
import {RootStackParamList} from './src/navigator/type';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          options={{title: 'Map'}}
          component={HomeScreen}
        />
        <Stack.Screen
          name="Account"
          options={{title: 'Account'}}
          component={AccountScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
