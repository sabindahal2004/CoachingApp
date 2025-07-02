import {View, Text} from 'react-native';
import React from 'react';
import {Tabs} from 'expo-router';
import HomeScreen from '../(tabs)/HomeScreen';
import Ionicons from '@expo/vector-icons/Ionicons';

const TabLayout = () => {
  return (
    <Tabs screenOptions={{headerShown: false}}>
      <Tabs.Screen
        name="HomeScreen"
        options={{
          tabBarIcon: ({size, color}) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
          tabBarLabel: 'Home',
        }}
      />
      <Tabs.Screen
        name="ExploreScreen"
        options={{
          tabBarIcon: ({size, color}) => (
            <Ionicons name="search-outline" size={size} color={color} />
          ),
          tabBarLabel: 'Explore',
        }}
      />
      <Tabs.Screen
        name="ProgressScreen"
        options={{
          tabBarIcon: ({size, color}) => (
            <Ionicons name="analytics-outline" size={size} color={color} />
          ),
          tabBarLabel: 'Progress',
        }}
      />
      <Tabs.Screen
        name="ProfileScreen"
        options={{
          tabBarIcon: ({size, color}) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
          tabBarLabel: 'Profile',
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
