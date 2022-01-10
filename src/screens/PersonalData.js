import React, {useState} from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native'
import {TextInput} from 'react-native-paper'
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import {AuthContext} from '../navigation/AuthProvider'
import firestore from '@react-native-firebase/firestore'
import firebase from '@react-native-firebase/app'

export default function PersonalData () {
  const [email, setEmail] = useState('')
  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [age, setAge] = useState('')
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

  return (
    <ScrollView style={{flex: 1.5, backgroundColor: '#ffff'}}>
      <View style={styles.container}>
        <View style={styles.photoContainer} />
        <TouchableOpacity>
          <Text style={styles.changePhoto}>Change profile photo</Text>
        </TouchableOpacity>
        <View style={styles.userInfoContainer}>
          <View style={styles.userEmailInfo}>
            <Text style={styles.userInfoTextStyle}>Email</Text>
          </View>
          <TextInput
            style={styles.inputEmail}
            value={email}
            label={userInfo.email}
            left={
              <TextInput.Icon
                name={() => <Icon name={'envelope-o'} size={20} />}
              />
            }
            mode='flat'
            disabled='true'
            underlineColor='transparent'
            onChangeText={userEmail => setEmail(userEmail)}
            autoCapitalize='none'
            keyboardType='email-address'
            autoCorrect={false}
          />
          <View style={styles.userFnameInfo}>
            <Text style={styles.userInfoTextStyle}>First Name</Text>
          </View>
          <TextInput
            style={styles.inputFname}
            value={fname}
            mode='flat'
            left={
              <TextInput.Icon
                name={() => <Icon name={'user-circle-o'} size={20} />}
              />
            }
            user
            underlineColor='transparent'
            activeUnderlineColor='#92A3FD'
            placeholder={userInfo.fname}
            onChangeText={userFname => setFname(userFname)}
            autoCorrect={false}
          />
          <View style={styles.userLnameInfo}>
            <Text style={styles.userInfoTextStyle}>Last Name</Text>
          </View>
          <TextInput
            style={styles.inputLname}
            value={lname}
            mode='flat'
            underlineColor='transparent'
            activeUnderlineColor='#92A3FD'
            placeholder={userInfo.lname}
            left={
              <TextInput.Icon
                name={() => <Icon name={'user-circle-o'} size={20} />}
              />
            }
            onChangeText={userLname => setLname(userLname)}
            autoCorrect={false}
          />
          <View style={styles.userAgeInfo}>
            <Text style={styles.userInfoTextStyle}>Age</Text>
          </View>
          <TextInput
            style={styles.inputAge}
            value={age}
            disabled='true'
            placeholder={userInfo.age}
            mode='flat'
            left={
              <TextInput.Icon
                name={() => <Icon name={'id-card-o'} size={20} />}
              />
            }
            id-card-o
            underlineColor='transparent'
            onChangeText={userAge => setAge(userAge)}
            keyboardType='numeric'
            autoCorrect={false}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  photoContainer: {
    width: 155,
    height: 155,
    borderRadius: 155 / 2,
    marginTop: 10,
    backgroundColor: 'grey',
  },
  userInfoContainer: {
    width: 335,
    height: 410,
    padding: 10,
    marginTop: 14,
    marginBottom: 14,
    borderRadius: 16,
    backgroundColor: '#ffff',
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 3,
    justifyContent: 'space-evenly',
  },
  userEmailInfo: {
    width: 100,
    height: 20,
    marginLeft: 10,
  },
  userFnameInfo: {
    width: 100,
    height: 20,
    marginLeft: 10,
  },
  userLnameInfo: {
    width: 100,
    height: 20,
    marginLeft: 10,
  },
  userAgeInfo: {
    width: 100,
    height: 22,
    marginLeft: 10,
  },
  changePhoto: {
    fontFamily: 'Poppins-Regular',
    color: '#92A3FD',
    marginTop: 5,
  },
  userInfoTextStyle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#1D1617',
  },
  inputEmail: {
    width: 315,
    height: 48,
    borderRadius: 5,
    borderWidth: 0.1,
    borderColor: '#ADA4A5',
    backgroundColor: '#ffff',
  },
  inputFname: {
    width: 315,
    height: 48,
    borderRadius: 5,
    borderWidth: 0.1,
    borderColor: '#ADA4A5',
    backgroundColor: '#ffff',
  },
  inputLname: {
    width: 315,
    height: 48,
    borderRadius: 5,
    borderWidth: 0.1,
    borderColor: '#ADA4A5',
    backgroundColor: '#ffff',
  },
  inputAge: {
    width: 315,
    height: 48,
    borderRadius: 5,
    borderWidth: 0.1,
    borderColor: '#ADA4A5',
    backgroundColor: '#ffff',
  },
})
