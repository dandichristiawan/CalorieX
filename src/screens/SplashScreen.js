import React, {useRef, useState, useEffect} from 'react'
import {View, StyleSheet, Text, Image, Dimensions} from 'react-native'

const SplashScreen = props => {
  const [authLoaded, setAuthLoaded] = useState(false)
  const windowWidth = Dimensions.get('window').width
  const windowHeight = Dimensions.get('window').height

  useEffect(() => {
    setTimeout(() => {
      setAuthLoaded(true)
    }, 3000)
  }, [])

  useEffect(() => {
    if (authLoaded) {
      props.navigation.replace('Login')
    }
  }, [authLoaded, props.navigation])

  return (
    <View style={styles.container}>
      <Text style={styles.textsplash}>Calorie</Text>
      <Text style={styles.textsplash2}>X</Text>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: '#FFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  textsplash: {
    fontFamily: 'Poppins-Bold',
    fontSize: 36,
    color: '#1D1617',
  },
  textsplash2: {
    fontFamily: 'Poppins-Bold',
    fontSize: 36,
    color: '#ce6ef1',
  },
})
