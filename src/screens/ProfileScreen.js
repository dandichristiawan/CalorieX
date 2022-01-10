import React, {Component, useContext, useState, useEffect} from 'react'
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native'
import {Button} from 'react-native-paper'
import Toggle from 'react-native-toggle-element'
import IonIcon from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import Foundation from 'react-native-vector-icons/Foundation'
import {AuthContext} from '../navigation/AuthProvider'
import firestore from '@react-native-firebase/firestore'
import firebase from '@react-native-firebase/app'

export default function ProfileScreen ({navigation}) {
  const {user, logout} = useContext(AuthContext)
  const [toggleValue, setToggleValue] = useState(false)
  const [userInfo, setUserInfo] = useState([])

  const windowWidth = Dimensions.get('window').width
  const windowHeight = Dimensions.get('window').height

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

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.headerSection}>
          <Text style={styles.headerText}>Profile</Text>
        </View>
        <View style={styles.profileNameSection}>
          <View style={styles.profilePic} />
          <Text style={styles.profileNameText}>
            {userInfo.fname} {userInfo.lname}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Personal')}>
            <View style={styles.editProfileButton}>
              <Text style={styles.editProfileButtonText}>Edit</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.profileInfoSection}>
          <View style={styles.heightCard}>
            <Text style={styles.numberHeight}>{userInfo.height}cm</Text>
            <Text style={styles.textHeight}>Height</Text>
          </View>
          <View style={styles.weightCard}>
            <Text style={styles.numberWeight}>{userInfo.weight}kg</Text>
            <Text style={styles.textWeight}>Weight</Text>
          </View>
          <View style={styles.ageCard}>
            <Text style={styles.textAgeInfo}>{userInfo.age}yo</Text>
            <Text style={styles.textAge}>Age</Text>
          </View>
        </View>
        <View style={styles.accountSection}>
          <View style={styles.accountTitleSection}>
            <Text style={styles.accountTextStyle}>Account</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Personal')}>
              <View style={styles.accountContent1Section}>
                <IonIcon name='person-outline' size={20} color='#92A3FD' />
                <Text style={styles.accountContentText1}>Personal Data</Text>
                <IonIcon name='chevron-forward' size={20} color='#7B6F72' />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Achievement')}>
              <View style={styles.accountContent2Section}>
                <Entypo name='text-document' size={20} color='#92A3FD' />
                <Text style={styles.accountContentText2}>Achievement</Text>
                <IonIcon name='chevron-forward' size={20} color='#7B6F72' />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('ActivityHist')}>
              <View style={styles.accountContent3Section}>
                <IonIcon name='pie-chart-outline' size={20} color='#92A3FD' />
                <Text style={styles.accountContentText3}>Activity History</Text>
                <IonIcon name='chevron-forward' size={20} color='#7B6F72' />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.notificationSection}>
          <View style={styles.notificationTitleSection}>
            <Text style={styles.notificationTextStyle}>Notification</Text>
            <View style={styles.notificationToggleSection}>
              <IonIcon
                style={{marginLeft: -10}}
                name='notifications-outline'
                size={20}
                color='#92A3FD'
              />
              <Text style={styles.notificationToggleTextStyle}>
                Pop-up Notification
              </Text>
              <Toggle
                containerStyle={{marginRight: 15}}
                value={toggleValue}
                onPress={val => setToggleValue(val)}
                trackBarStyle={{backgroundColor: '#C58BF2'}}
                trackBar={{
                  width: 36,
                  height: 18,
                  radius: 25,
                }}
                thumbStyle={{backgroundColor: '#FFFFFF'}}
                thumbButton={{
                  width: 13,
                  height: 13,
                  radius: 20,
                }}
              />
            </View>
          </View>
        </View>
        <View style={styles.otherSection}>
          <View style={styles.otherTitleSection}>
            <Text style={styles.otherTextStyle}>Other</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Contact')}>
              <View style={styles.otherContent1Section}>
                <IonIcon name='md-mail-outline' size={20} color='#92A3FD' />
                <Text style={styles.otherContent1Text}>Contact Us</Text>
                <IonIcon name='chevron-forward' size={20} color='#7B6F72' />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('PrivacyPolicies')}>
              <View style={styles.otherContent2Section}>
                <IonIcon
                  name='shield-checkmark-outline'
                  size={20}
                  color='#92A3FD'
                />
                <Text style={styles.otherContent2Text}>Privacy Policy</Text>
                <IonIcon name='chevron-forward' size={20} color='#7B6F72' />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
              <View style={styles.otherContent3Section}>
                <IonIcon name='md-settings-outline' size={20} color='#92A3FD' />
                <Text style={styles.otherContent3Text}>Settings</Text>
                <IonIcon name='chevron-forward' size={20} color='#7B6F72' />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <Button
          style={styles.logoutButton}
          icon='arrow-left'
          mode='contained'
          labelStyle={{color: 'red'}}
          onPress={() => logout()}>
          Logout
        </Button>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    alignItems: 'center',
  },
  headerSection: {
    width: 315,
    height: 35,
    marginTop: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileNameSection: {
    width: 315,
    height: 65,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  profileInfoSection: {
    width: 315,
    height: 65,
    flexDirection: 'row',
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  accountSection: {
    width: 315,
    height: 145,
    marginTop: 14,
    borderRadius: 16,
    backgroundColor: '#ffff',
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 3,
  },
  notificationSection: {
    width: 315,
    height: 100,
    marginTop: 15,
    borderRadius: 16,
    backgroundColor: '#ffff',
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 3,
  },
  otherSection: {
    width: 315,
    height: 140,
    marginTop: 15,
    marginBotto: 15,
    borderRadius: 16,
    backgroundColor: '#ffff',
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 3,
  },
  accountTitleSection: {
    width: 70,
    height: 20,
    marginLeft: 10,
    marginTop: 13,
  },
  accountContent1Section: {
    width: 280,
    height: 23,
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  accountContent2Section: {
    width: 280,
    height: 23,
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  accountContent3Section: {
    width: 280,
    height: 23,
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  accountContent4Section: {
    width: 280,
    height: 23,
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  accountTextStyle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#1D1617',
  },
  accountContentText1: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#7B6F72',
    marginLeft: -137,
  },
  accountContentText2: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#7B6F72',
    marginLeft: -140,
  },
  accountContentText3: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#7B6F72',
    marginLeft: -131,
  },
  accountContentText4: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#7B6F72',
    marginLeft: -115,
  },
  notificationTitleSection: {
    width: 95,
    height: 20,
    marginLeft: 10,
    marginTop: 13,
  },
  notificationTextStyle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#1D1617',
  },
  notificationToggleSection: {
    width: 280,
    height: 25,
    marginLeft: 10,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  notificationToggleTextStyle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#7B6F72',
    marginTop: 2,
    marginLeft: -74,
  },
  otherTitleSection: {
    width: 70,
    height: 20,
    marginLeft: 10,
    marginTop: 13,
  },
  otherContent1Section: {
    width: 275,
    height: 21,
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  otherContent2Section: {
    width: 275,
    height: 21,
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  otherContent3Section: {
    width: 275,
    height: 21,
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  otherTextStyle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#1D1617',
  },
  otherContent1Text: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#7B6F72',
    marginTop: 2,
    marginLeft: -153,
  },
  otherContent2Text: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#7B6F72',
    marginTop: 2,
    marginLeft: -138,
  },
  otherContent3Text: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#7B6F72',
    marginTop: 2,
    marginLeft: -173,
  },
  heightCard: {
    width: 95,
    height: 65,
    borderRadius: 16,
    backgroundColor: 'white',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 3,
  },
  weightCard: {
    width: 95,
    height: 65,
    borderRadius: 16,
    backgroundColor: 'white',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 3,
  },
  ageCard: {
    width: 95,
    height: 65,
    borderRadius: 16,
    backgroundColor: 'white',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 3,
  },
  profilePic: {
    width: 55,
    height: 55,
    borderRadius: 55 / 2,
    marginTop: 4,
    marginLeft: 4,
    backgroundColor: 'grey',
  },
  editProfileButton: {
    width: 73,
    height: 30,
    borderRadius: 99,
    backgroundColor: '#92A3FD',
    marginTop: 14.5,
    marginLeft: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  editProfileButtonText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    color: 'white',
  },
  profileNameText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#1D1617',
    marginTop: 19,
    marginLeft: -5,
  },
  headerText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    color: '#1D1617',
  },
  numberHeight: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#92A3FD',
  },
  numberWeight: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#92A3FD',
  },
  textHeight: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#7B6F72',
  },
  textWeight: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#7B6F72',
  },
  textAgeInfo: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#92A3FD',
  },
  textAge: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#7B6F72',
  },
  logoutButton: {
    marginTop: 13,
    width: 315,
    height: 44,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffff',
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 3,
  },
})
