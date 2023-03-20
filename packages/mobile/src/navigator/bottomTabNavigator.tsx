import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from './type';
import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import {TelescopeIcon, UserIcon} from '../assets/icons';

export const createScreenOptions = ({
  route,
}: {
  route: RouteProp<RootStackParamList, keyof RootStackParamList>;
}): BottomTabNavigationOptions => ({
  tabBarIcon: ({color, size}) => {
    if (route.name === 'Home') {
      // TODO: Return SVG Icon
      return <TelescopeIcon stroke={color} size={size} />;
    } else if (route.name === 'Account') {
      // TODO: Return SVG Icon
      return <UserIcon stroke={color} size={size} />;
    }
    return null;
  },
  tabBarLabelStyle: {fontWeight: '700', fontSize: 12},
  tabBarActiveTintColor: 'blue',
  tabBarInactiveTintColor: 'gray',
  headerShown: false,
});
