/* eslint-disable react/no-unstable-nested-components */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Home from '../Screens/Home';
import Search from '../Screens/Search';
import Favorite from '../Screens/Favorite';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {theme} from '../Theme';
import {StyleSheet} from 'react-native';
// import {StyleSheet} from 'react-native';

const Tab = createBottomTabNavigator();

const active = theme.colors.white;
const inactive = theme.colors.white3;

const TabRoutes: React.FC = () => {
  return (
    <Tab.Navigator initialRouteName="home" backBehavior="firstRoute">
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarActiveTintColor: active,
          tabBarInactiveTintColor: inactive,
          tabBarStyle: style.tab,
          headerShown: false,
          tabBarLabel: 'Início',
          tabBarIcon: ({color, size}) => (
            <Icon name="home-variant" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="search"
        component={Search}
        options={{
          tabBarActiveTintColor: active,
          tabBarInactiveTintColor: inactive,
          tabBarStyle: style.tab,
          headerShown: false,
          tabBarLabel: 'Buscar',
          tabBarIcon: ({color, size}) => (
            <Icon name="magnify" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="favorite"
        component={Favorite}
        options={{
          tabBarActiveTintColor: active,
          tabBarInactiveTintColor: inactive,
          tabBarStyle: style.tab,
          headerShown: false,
          tabBarLabel: 'Favoritos',
          tabBarIcon: ({color, size}) => (
            <Icon name="heart" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const style = StyleSheet.create({
  tab: {
    backgroundColor: theme.colors.black,
  },
});

export default TabRoutes;
