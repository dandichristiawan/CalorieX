import React, {Component} from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'
import TabsNavigation from './TabStack'
import NotificationScreen from './../screens/NotificationScreen'
import PersonalData from './../screens/PersonalData'
import Achievement from './../screens/Achievement'
import ActivityHistory from './../screens/ActivityHistory'
import ContacUsScreen from './../screens/ContacUsScreen'
import PrivacyPolicyScreen from './../screens/PrivacyPolicyScreen'
import Settings from './../screens/Settings'
import {View, Text, TouchableOpacity} from 'react-native'

import IonIcon from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'

const Stack = createStackNavigator()

export default function HomeStack () {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Home'
        component={TabsNavigation}
        options={{header: () => null}}
      />
      <Stack.Screen
        name='Notification'
        component={NotificationScreen}
        options={{
          title: 'Notification',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            marginTop: 5,
            fontSize: 17,
            fontFamily: 'Poppins-Bold',
          },
          headerRight: () => (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                paddingRight: 20,
              }}>
              <TouchableOpacity onPress={() => console.log('Hey im centered')}>
                <Entypo name='dots-two-horizontal' size={25} color='black' />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <Stack.Screen
        name='Personal'
        component={PersonalData}
        options={{
          title: 'Personal Data',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            marginTop: 5,
            fontSize: 17,
            fontFamily: 'Poppins-Bold',
          },
          headerRight: () => (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                paddingRight: 10,
              }}>
              <TouchableOpacity onPress={() => console.log('Hey im centered')}>
                <IonIcon name='ios-checkmark-sharp' size={25} color='black' />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <Stack.Screen
        name='Achievement'
        component={Achievement}
        options={{
          title: 'Achievement',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            marginTop: 5,
            fontSize: 17,
            fontFamily: 'Poppins-Bold',
          },
        }}
      />
      <Stack.Screen
        name='ActivityHist'
        component={ActivityHistory}
        options={{
          title: 'Activity History',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            marginTop: 5,
            fontSize: 17,
            fontFamily: 'Poppins-Bold',
          },
        }}
      />
      <Stack.Screen
        name='Contact'
        component={ContacUsScreen}
        options={{
          title: 'Contact Us',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            marginTop: 5,
            fontSize: 17,
            fontFamily: 'Poppins-Bold',
          },
        }}
      />
      <Stack.Screen
        name='PrivacyPolicies'
        component={PrivacyPolicyScreen}
        options={{
          title: 'Privacy Policy',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            marginTop: 5,
            fontSize: 17,
            fontFamily: 'Poppins-Bold',
          },
        }}
      />
      <Stack.Screen
        name='Settings'
        component={Settings}
        options={{
          title: 'Settings',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            marginTop: 5,
            fontSize: 17,
            fontFamily: 'Poppins-Bold',
          },
        }}
      />
    </Stack.Navigator>
  )
}
