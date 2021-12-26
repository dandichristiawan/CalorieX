import React, {useContext, useState, useEffect} from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Timeline from 'react-native-timeline-flatlist'
import {AuthContext} from '../navigation/AuthProvider'
import firestore from '@react-native-firebase/firestore'
import firebase from '@react-native-firebase/app'

export default function HomeScreen ({navigation}) {
    
  const {user, logout} = useContext(AuthContext)

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
      .catch(error => {
        console.log('Data tidak terambil.', error)
      })
  }, [])

  const lists = [
    {
      time: '09:00',
      title: '100 m walking',
      description: 'Jakarta Selatan, Indonesia',
      circleColor: '#009688',
      lineColor: '#009688',
    },
    {
      time: '10:45',
      title: '300 m walking',
      description: 'Jakarta Pusat, Indonesia',
    },
    {
      time: '14:00',
      title: '200 m walking',
      description: 'Jakarta Selatan, Indonesia',
      lineColor: '#009688',
    },
    {
      time: '16:30',
      title: '3 km running',
      description: 'Bandung, West Java, Indonesia',
      circleColor: '#009688',
    },
  ]

  return (
    <View style={styles.container}>
      <View style={styles.headerSection}>
        <View style={styles.headerText}>
          <Text style={styles.titleWelcome}>Welcome Back,</Text>
          <View style={styles.userWelcome}>
            <Text style={styles.titleName}>{userInfo.fname} </Text>
            <Text style={styles.titleName}>{userInfo.lname}</Text>
          </View>
        </View>
        <View style={styles.notificationIcon}>
          <TouchableOpacity>
            <FontAwesome5 name={'bell'} size={25} color={'black'} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.caloriesBurnedIndicatorSection}>
        <View style={styles.circle}>
          <Text style={styles.numberText}>1,234</Text>
          <Text style={styles.caloriesText}>Calories</Text>
          <Text style={styles.burnedText}>Burned</Text>
        </View>
      </View>
      <View style={styles.latestSection}>
        <Text style={styles.latestText}>Latest Activity</Text>
        <Timeline
          data={lists}
          separator={true}
          separatorStyle={{
            width: 200,
            marginTop: -5,
          }}
          circleSize={20}
          circleColor='rgb(45,156,219)'
          lineColor='rgb(45,156,219)'
          timeContainerStyle={{minWidth: 52, marginTop: 1}}
          timeStyle={{
            textAlign: 'center',
            backgroundColor: '#92A3FD',
            color: 'white',
            borderRadius: 100000,
            overflow: 'hidden',
          }}
          descriptionStyle={{color: 'gray', marginRight: 50}}
          options={{
            style: {paddingTop: 5},
          }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 20,
    color: 'black',
  },
  headerSection: {
    width: 300,
    heigh: 50,
    flexDirection: 'row',
  },
  caloriesBurnedIndicatorSection: {
    marginTop: 5,
    marginLeft: 90,
    width: 218,
    height: 190,
    backgroundColor: '#92A3FD',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  latestSection: {
    width: 375,
    height: 340,
    marginTop: 20,
    marginLeft: 30,
    flexDirection: 'column',
  },
  userWelcome: {
    flexDirection: 'row',
  },
  latestText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    color: '#1D1617',
  },
  circle: {
    marginTop: 20,
    marginLeft: 33,
    width: 150,
    height: 150,
    flexDirection: 'column',
    borderRadius: 150 / 2,
    backgroundColor: 'white',
  },
  smallCircle1: {
    width: 17,
    height: 17,
    borderRadius: 17 / 2,
    backgroundColor: '#92A3FD',
  },
  smallCircle2: {
    width: 17,
    height: 17,
    borderRadius: 17 / 2,
    backgroundColor: '#543753',
  },
  smallCircle3: {
    width: 17,
    height: 17,
    borderRadius: 17 / 2,
    backgroundColor: '#E0855C',
  },
  smallCircle4: {
    width: 17,
    height: 17,
    borderRadius: 17 / 2,
    backgroundColor: '#ADA4A5',
  },
  headerText: {
    width: 120,
    height: 53,
    marginTop: 36,
    marginLeft: 30,
  },
  notificationIcon: {
    width: 30,
    height: 30,
    marginTop: 50,
    marginLeft: 185,
  },
  titleWelcome: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#ADA4A5',
  },
  titleName: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    color: '#1D1617',
  },
  numberText: {
    fontFamily: 'Poppins-Regular',
    color: 'black',
    marginLeft: 58,
    marginTop: 35,
  },
  caloriesText: {
    fontFamily: 'Poppins-Regular',
    color: 'black',
    marginLeft: 47,
  },
  burnedText: {
    fontFamily: 'Poppins-Regular',
    color: 'black',
    marginLeft: 49,
  },
})
