import React from 'react'
import { View, Text } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Ionicons from 'react-native-vector-icons/Ionicons'

// Screens
import SplashScreen from './screen/SplashScreen'
import SignInScreen from './screen/SignInScreen'
import SignUpScreen from './screen/SignUpScreen'

import HomeScreen from './screen/HomeScreen'
import GroupChatScreen from './screen/GroupChatScreen'
import SettingsScreen from './screen/SettingsScreen'

import ChatScreen from './screen/ChatScreen';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName='AppChat'>
      <Stack.Screen name='SplashScreen' component={SplashScreen} options={{ headerShown: false }} />
      <Stack.Screen name='SignInScreen' component={SignInScreen} options={{ headerShown: false }} />
      <Stack.Screen name='SignUpScreen' component={SignUpScreen} options={{ headerShown: false }} />
      <Stack.Screen name='HomeScreen' component={MyTabs} options={{ headerShown: false }} />
      <Stack.Screen name='ChatScreen' component={ChatScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

// Screen names
const homeName = 'Home'
const groupChatName = 'GroupChat'
const settingsName = 'Settings'

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName={homeName}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let rn = route.name;

          if (rn === homeName) {
            iconName = focused ? 'home' : 'home-outline'
          } else if (rn == groupChatName) {
            iconName = focused ? 'people' : 'people-outline'
          } else if (rn == settingsName) {
            iconName = focused ? 'settings' : 'settings-outline'
          }

          // Return your icon
          return <Ionicons name={iconName} size={size} color={color} />
        },
      })}
      tabBarOptions={{
        activeTintColor: '#029cf9',
        inactiveTintColor: '#888a8b',
        labelStyle: {
          paddingBottom: 2,
          fontSize: 8
        },
        style: {
          paddingTop: 20,
          height: 70,
        }
      }}>

        <Tab.Screen name={homeName} component={HomeScreen}
          options={{
            headerShown: false,
          }} />
        <Tab.Screen name={groupChatName} component={GroupChatScreen}
          options={{ 
            tabBarBadge: 10,
            tabBarBadgeStyle: {
              fontSize: 8,
            },
            headerShown: false,
          }} />
        <Tab.Screen name={settingsName} component={SettingsScreen}
          options={{
            headerShown: false,
          }} />
    </Tab.Navigator>
  );
}

const MainContainers = () => {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  )
}

export default MainContainers