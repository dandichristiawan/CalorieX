import React, {useState, useContext} from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import {AuthContext} from '../navigation/AuthProvider'
import {TextInput, Button} from 'react-native-paper'

export default function LoginScreen ({navigation}) {
  const {login} = useContext(AuthContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const windowWidth = Dimensions.get('window').width
  const windowHeight = Dimensions.get('window').height

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Hey there,</Text>
        <Text style={styles.headerSubTitle}>Welcome Back</Text>
      </View>
      <TextInput
        style={styles.inputEmail}
        value={email}
        placeholder='Email'
        left={
          <TextInput.Icon name={() => <Icon name={'envelope-o'} size={20} />} />
        }
        mode='flat'
        underlineColor='transparent'
        onChangeText={userEmail => setEmail(userEmail)}
        autoCapitalize='none'
        keyboardType='email-address'
        autoCorrect={false}
      />
      <TextInput
        style={styles.inputPassword}
        value={password}
        placeholder='Password'
        left={<TextInput.Icon name={() => <Icon name={'lock'} size={20} />} />}
        right={<TextInput.Icon name={() => <Icon name={'eye'} size={20} />} />}
        mode='flat'
        underlineColor='transparent'
        onChangeText={userPassword => setPassword(userPassword)}
        secureTextEntry={true}
      />
      <TouchableOpacity style={{marginTop: 10}}>
        <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
      </TouchableOpacity>
      <Button
        style={styles.loginButton}
        icon='arrow-right'
        mode='contained'
        onPress={() => login(email, password)}>
        Login
      </Button>
      <TouchableOpacity
        style={{flexDirection: 'row'}}
        onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.donthaveText}>
          Don't have an account yet? 
        </Text>
        <Text style={styles.registerTextButton}> Register</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    alignItems: 'center',
  },
  headerContainer: {
    width: 155,
    height: 50,
    alignItems: 'center',
    margin: 20,
  },
  headerTitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#1D1617',
  },
  headerSubTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    color: '#1D1617',
  },
  forgotPasswordText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#ADA4A5',
  },
  donthaveText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#1D1617',
  },
  registerTextButton: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#C58BF2',
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
  loginButton: {
    width: 285,
    height: 44,
    borderRadius: 30,
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#92A3FD',
  },
})
