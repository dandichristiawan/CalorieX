import React, {useState, useContext} from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native'
import {TextInput, Button} from 'react-native-paper'
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import {AuthContext} from '../navigation/AuthProvider'

export default function SignupScreen ({navigation}) {
  //disini AuthContext berguna untuk memberitahu kalau user belom login/registrasi, maka kita perlu registrasi sebelum bisa mengakses HomeStack
  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [age, setAge] = useState('')
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {register} = useContext(AuthContext)

  return (
    //bagian registrasi
    <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.container}>
        <Text style={styles.header}>Hey there,</Text>
        <Text style={styles.header2}>Create an Account </Text>
        <TextInput
          style={styles.inputEmail}
          value={email}
          label='Email'
          left={
            <TextInput.Icon
              name={() => <Icon name={'envelope-o'} size={20} />}
            />
          }
          mode='flat'
          underlineColor='transparent'
          activeUnderlineColor='#92A3FD'
          onChangeText={userEmail => setEmail(userEmail)}
          autoCapitalize='none'
          keyboardType='email-address'
          autoCorrect={false}
        />
        <TextInput
          style={styles.inputPassword}
          value={password}
          label='Password'
          left={
            <TextInput.Icon name={() => <Icon name={'lock'} size={20} />} />
          }
          right={
            <TextInput.Icon name={() => <Icon name={'eye'} size={20} />} />
          }
          mode='flat'
          underlineColor='transparent'
          activeUnderlineColor='#92A3FD'
          onChangeText={userPassword => setPassword(userPassword)}
          secureTextEntry={true}
        />
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
          label='First Name'
          onChangeText={userFname => setFname(userFname)}
          autoCorrect={false}
        />
        <TextInput
          style={styles.inputLname}
          value={lname}
          mode='flat'
          underlineColor='transparent'
          activeUnderlineColor='#92A3FD'
          label='Last Name'
          left={
            <TextInput.Icon
              name={() => <Icon name={'user-circle-o'} size={20} />}
            />
          }
          onChangeText={userLname => setLname(userLname)}
          autoCorrect={false}
        />
        <TextInput
          style={styles.inputAge}
          value={age}
          label='Age'
          mode='flat'
          left={
            <TextInput.Icon
              name={() => <Icon name={'id-card-o'} size={20} />}
            />
          }
          id-card-o
          underlineColor='transparent'
          activeUnderlineColor='#92A3FD'
          onChangeText={userAge => setAge(userAge)}
          keyboardType='numeric'
          autoCorrect={false}
        />
        <View style={styles.inputWeightContainer}>
          <TextInput
            style={styles.inputWeight}
            value={weight}
            label='Weight'
            mode='flat'
            left={
              <TextInput.Icon
                name={() => <Icon name={'heartbeat'} size={20} />}
              />
            }
            underlineColor='transparent'
            activeUnderlineColor='#92A3FD'
            onChangeText={userWeight => setWeight(userWeight)}
            keyboardType='numeric'
            autoCorrect={false}
          />
          <Image
            style={styles.imageStyle}
            source={require('../images/kg.png')}
          />
        </View>
        <View style={styles.inputHeightContainer}>
          <TextInput
            style={styles.inputHeight}
            value={height}
            label='Height'
            left={
              <TextInput.Icon name={() => <Icon name={'child'} size={20} />} />
            }
            mode='flat'
            underlineColor='transparent'
            activeUnderlineColor='#92A3FD'
            onChangeText={userHeight => setHeight(userHeight)}
            keyboardType='numeric'
            autoCorrect={false}
          />
          <Image
            style={styles.imageStyle}
            source={require('../images/cm.png')}
          />
        </View>
        <Button
          style={styles.signUpBtn}
          icon='plus-circle'
          mode='contained'
          labelStyle={{color: '#FFFFFF'}}
          onPress={() =>
            register(email, password, fname, lname, age, weight, height)
          }>
          Sign Up
        </Button>
        <TouchableOpacity
          style={{flexDirection: 'row'}}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.alreadyHaveText}>Already have an account?</Text>
          <Text style={styles.LoginTextButton}> Login</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
  },
  inputWeightContainer: {
    width: 315,
    height: 44,
    margin: 10,
    flexDirection: 'row',
  },
  inputHeightContainer: {
    width: 315,
    height: 44,
    margin: 10,
    flexDirection: 'row',
  },
  imageStyle: {
    marginTop: -2, 
    marginLeft: 15,
  },
  header: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    marginTop: 10,
    color: '#1D1617',
  },
  header2: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    marginTop: 5,
    color: '#1D1617',
  },
  inputEmail: {
    width: 315,
    height: 48,
    margin: 10,
    borderRadius: 5,
    borderWidth: 0.1,
    borderColor: '#ADA4A5',
    backgroundColor: '#F7F8F8',
  },
  inputPassword: {
    width: 315,
    height: 48,
    margin: 10,
    borderRadius: 5,
    borderWidth: 0.1,
    borderColor: '#ADA4A5',
    backgroundColor: '#F7F8F8',
  },
  inputFname: {
    width: 315,
    height: 48,
    margin: 10,
    borderRadius: 5,
    borderWidth: 0.1,
    borderColor: '#ADA4A5',
    backgroundColor: '#F7F8F8',
  },
  inputLname: {
    width: 315,
    height: 48,
    margin: 10,
    borderRadius: 5,
    borderWidth: 0.1,
    borderColor: '#ADA4A5',
    backgroundColor: '#F7F8F8',
  },
  inputAge: {
    width: 315,
    height: 48,
    margin: 10,
    borderRadius: 5,
    borderWidth: 0.1,
    borderColor: '#ADA4A5',
    backgroundColor: '#F7F8F8',
  },
  inputWeight: {
    width: 255,
    height: 48,
    borderRadius: 5,
    borderWidth: 0.1,
    borderColor: '#ADA4A5',
    backgroundColor: '#F7F8F8',
  },
  inputHeight: {
    width: 255,
    height: 48,
    borderRadius: 5,
    borderWidth: 0.1,
    borderColor: '#ADA4A5',
    backgroundColor: '#F7F8F8',
  },

  signUpBtn: {
    marginTop: 13,
    marginBottom: 13,
    width: 315,
    height: 44,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#92A3FD',
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 3,
  },
  alreadyHaveText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#1D1617',
  },
  LoginTextButton: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#C58BF2',
  },
})
