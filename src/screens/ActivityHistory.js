import React, {useState, useEffect} from 'react'
import {StyleSheet, Text, View, Dimensions} from 'react-native'
import {LineChart} from 'react-native-chart-kit'
import {AuthContext} from '../navigation/AuthProvider'
import firestore from '@react-native-firebase/firestore'
import firebase from '@react-native-firebase/app'

export default function ActivityHistory () {
  const [userInfo, setUserInfo] = useState([])

  React.useEffect(() => {
    firestore()
      .collection('users')
      .doc(firebase.auth().currentUser.uid)
      .get()
      .then(snapshot => {
        setUserInfo(snapshot.data())
        console.log('Data terambil:', snapshot)
      })
      .catch(console.log)
  }, [])

  const screenWidth = Dimensions.get('window').width

  const chartConfig = {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#08130D',
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  }

  const data = {
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [
      {
        data: [55, 0, 15, 10, 0, 0, 10],
        color: (opacity = 1) => `rgba(146,163,253, ${opacity})`, // optional
        strokeWidth: 2, // optional
      },
    ],
    legend: ['Calories Burned'], // optional
  }

  const dataCalories = {
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [
      {
        data: [55, 0, 15, 10, 0, 0, 10],
        color: (opacity = 1) => `rgba(146,163,253, ${opacity})`, // optional
        strokeWidth: 2, // optional
      },
    ],
    legend: ['Calories Burned'], // optional
  }

  const dataDistance = {
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [
      {
        data: [5, 0, 1, 2, 1, 3, 7],
        color: (opacity = 1) => `rgba(146,163,253, ${opacity})`, // optional
        strokeWidth: 2, // optional
      },
    ],
    legend: ['Distance Traveled'], // optional
  }

  return (
    <View style={styles.container}>
      <View style={styles.TextContainer}>
        <Text style={styles.TextStyle}>Hello, {userInfo.fname}</Text>
        <Text style={styles.TextStyle1}>this is your latest activities within a week.</Text>
      </View>
      <View style={styles.graphStyle}>
        <LineChart
          data={dataCalories}
          width={316}
          height={220}
          chartConfig={chartConfig}
        />
      </View>
      <View style={styles.graphStyle}>
        <LineChart
          data={dataDistance}
          width={316}
          height={220}
          chartConfig={chartConfig}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFF',
  },
  TextContainer: {
    justifyContent: 'flex-start',
    flexDirection: 'column',
    width: 300,
    height: 55,
    marginTop: 10,
    marginLeft: -15,
  },
  TextStyle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: 'black',
  },
  TextStyle1: {
    fontFamily: 'Poppins-Regular',
    color: 'black',
  },
  graphStyle: {
    width: 316,
    height: 245,
    backgroundColor: '#ffff',
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 3,
    marginTop: 10,
    borderRadius: 10,
  },
})
