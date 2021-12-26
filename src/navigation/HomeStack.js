import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'
import TabsNavigation from './TabStack';


const Stack = createStackNavigator()

export default function HomeStack () {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={TabsNavigation} options={{header: () => null}} />
    </Stack.Navigator>
  )
}
