import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import SignupScreen from './../screens/SignUpScreen'
import SplashScreen from './../screens/SplashScreen'
import LoginScreen from './../screens/LoginScreen'

const Stack = createStackNavigator()

//authstack berguna untuk memberitahu kalo user belom login

export default function AuthStack () {
  return (
    <Stack.Navigator initialRouteName='Splash'>
      <Stack.Screen
        name='Splash'
        component={SplashScreen}
        options={{header: () => null}}
      />
      <Stack.Screen
        name='Login'
        component={LoginScreen}
        options={{header: () => null}}
      />
      <Stack.Screen
        name='Signup'
        component={SignupScreen}
        options={{header: () => null}}
      />
    </Stack.Navigator>
  )
}
