import React, {Component} from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import {Text} from 'react-native'
import HomeScreen from './../screens/HomeScreen'
import ProfileScreen from './../screens/ProfileScreen'
import MainScreen from './../screens/MainScreen'

const Tabs = createMaterialBottomTabNavigator()
const TabsNavigation = () => {
  return (
    //navbar
    <Tabs.Navigator
      initialRouteName='Dashboard'
      barStyle={{
        backgroundColor: '#92A3FD',
        position: 'absolute',
        overflow: 'hidden',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
      }}>
      <Tabs.Screen
        name='Dashboard'
        component={HomeScreen}
        options={{
          header: () => null,
          tabBarLabel: (
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                color: 'white',
                textAlign: 'center',
              }}>
              Home
            </Text>
          ),
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name={'home'} size={25} color={'white'} />
          ),
        }}
      />
      <Tabs.Screen
        name='Main'
        component={MainScreen}
        options={{
          header: () => null,
          tabBarLabel: (
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                color: 'white',
                textAlign: 'center',
              }}>
              Run
            </Text>
          ),
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name={'running'} size={25} color={'white'} />
          ),
        }}
      />
      <Tabs.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
          header: () => true,
          tabBarLabel: (
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                color: 'white',
                textAlign: 'center',
              }}>
              Profile
            </Text>
          ),
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name={'user-alt'} size={25} color={'white'} />
          ),
        }}
      />
    </Tabs.Navigator>
  )
}
export default TabsNavigation
