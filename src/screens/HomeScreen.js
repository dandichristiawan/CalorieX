import React, {useContext, useState, useEffect} from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native'
import {PieChart} from 'react-native-chart-kit'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Timeline from 'react-native-timeline-flatlist'
import {AuthContext} from '../navigation/AuthProvider'
import firestore from '@react-native-firebase/firestore'
import firebase from '@react-native-firebase/app'
import {windowWidth} from './../utils/Dimensions'

export default function HomeScreen ({navigation}) {
  
  const {width, height} = Dimensions.get('window')

  const {user, logout} = useContext(AuthContext)

  const [userInfo, setUserInfo] = useState([])
  
  //Ngambil data dari firestore
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
      title: '100 m',
      description: 'Jakarta Selatan, Indonesia',
      circleColor: '#009688',
      lineColor: '#009688',
    },
    {
      time: '10:45',
      title: '300 m',
      description: 'Jakarta Pusat, Indonesia',
      circleColor: '#285cb0',
    },
    {
      time: '14:00',
      title: '200 m',
      description: 'Jakarta Selatan, Indonesia',
      lineColor: '#009688',
    },
    {
      time: '16:30',
      title: '2 km',
      description: 'Bandung, West Java, Indonesia',
      circleColor: '#2dccdb',
    },
  ]

  const data = [
    {
      name: 'cal',
      calories: 13,
      color: '#009688',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'cal',
      calories: 28,
      color: '#285cb0',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'cal',
      calories: 52,
      color: '#2dccdb',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'cal',
      calories: 33,
      color: '#2D9CDB',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
  ]

  const chartConfig = {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#08130D',
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => `rgba(26, 25, 14, ${opacity})`,
    strokeWidth: 1, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  }

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
          <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
            <FontAwesome5 name={'bell'} size={25} color={'black'} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.caloriesBurnedIndicatorSection}>
        <PieChart
          data={data}
          width={300}
          height={200}
          chartConfig={chartConfig}
          accessor={'calories'}
          backgroundColor={'transparent'}
          paddingLeft={'40'}
          center={[-30, -2]}
          absolute
        />
      </View>
      <View style={styles.latestSection}>
        <TouchableOpacity onPress={() => navigation.navigate('ActivityHist')}>
          <Text style={styles.latestText}>Latest Activity</Text>
        </TouchableOpacity>
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
    marginLeft: 40,
    alignItems: 'center',
    width: 315,
    height: 190,
    borderRadius: 16,
    backgroundColor: '#ffff',
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 3,
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
})
