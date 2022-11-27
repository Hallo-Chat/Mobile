import React from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Ionicons from 'react-native-vector-icons/Ionicons'
import { MaterialIcons } from '@expo/vector-icons'

// Screens
import SplashScreen from './screen/SplashScreen'
import SignInScreen from './screen/SignInScreen'
import SignUpScreen from './screen/SignUpScreen'

import HomeScreen from './screen/HomeScreen'
import GroupChatScreen from './screen/GroupChatScreen'
import SettingsScreen from './screen/SettingsScreen'

import ChatScreen from './screen/ChatScreen';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler'

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName='AppChat'>
      <Stack.Screen name='SplashScreen' component={SplashScreen} options={{ headerShown: false }} />
      <Stack.Screen name='SignInScreen' component={SignInScreen} options={{ headerShown: false }} />
      <Stack.Screen name='SignUpScreen' component={SignUpScreen} options={{ headerShown: false }} />
      <Stack.Screen name='HomeScreen' component={MyTabs} options={{ headerShown: false }} />
      <Stack.Screen name='ChatScreen' component={ChatScreen}
        options={{
          headerTitle: ChatHeader,
          headerTintColor: '#029cf9',
          headerStyle: {
            marginLeft: -10
          }
        }} />
    </Stack.Navigator>
  )
}

const HomeHeader = (props) => {

  return (
    <View style={{ 
      flexDirection: 'row', 
      justifyContent: 'space-between',
      width: '100%',
      height: '100%',
      alignItems: 'center',
      backgroundColor: '#029cf9'
    }}>
      <Image 
        source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg' }}
        style={{ width: 30, height: 30, borderRadius: 30 }}
      />
      <Text style={{ flex: 1, textAlign: 'center', fontWeight: 'bold', fontSize: 16, color: '#ffffff' }}>Home</Text>
      <MaterialIcons name="more-horiz" size={24} color="white" style={{  }} onPress={() => alert('more...')} />
    </View>
  )
}

const ChatHeader = (props) => {

  const { width } = useWindowDimensions();

  return (
    <View style={{ 
      flexDirection: 'row', 
      justifyContent: 'space-between', 
      width,
      alignItems: 'center'
    }}>
      <Image 
        source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg' }}
        style={{ width: 30, height: 30, borderRadius: 30, marginLeft: -20 }}
      />
      <Text style={{ flex: 1, textAlign: 'center', marginRight: '3%', fontWeight: 'bold', fontSize: 16 }}>{props.children}</Text>
      <MaterialIcons name="more-horiz" size={24} color="black" style={{ marginRight: '9%' }} />
    </View>
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
        tabBarStyle: styles.tabBarStyle,
        tabBarActiveTintColor: '#029cf9',
        tabBarLabelStyle: {
          paddingBottom: 2,
          fontSize: 8
        },
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
      })}>

        <Tab.Screen name={homeName} component={HomeScreen}
          options={{
            headerStyle: {
              backgroundColor: '#029cf9',
            },
            headerTitleStyle: {
              color: '#ffffff'
            },
            headerTitle: HomeHeader
          }} />
        <Tab.Screen name={groupChatName} component={GroupChatScreen}
          options={{ 
            tabBarBadge: 10,
            tabBarBadgeStyle: {
              fontSize: 8,
            },
          }} />
        <Tab.Screen name={settingsName} component={SettingsScreen}
          options={{

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

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 48
  }
})