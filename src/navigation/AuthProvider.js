import React, {createContext, useState} from 'react'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'

export const AuthContext = createContext({})

//authprovider berisi fungsi-fungsi untuk login,logout,registrasi

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null)
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
            await auth().signInWithEmailAndPassword(email, password)
          } catch (e) {
            console.log(e)
          }
        },
        register: async (
          email,
          password,
          fname,
          lname,
          age,
          weight,
          height,
        ) => {
          try {
            await auth()
              .createUserWithEmailAndPassword(email, password)
              .then(data => {
                firestore()
                  .collection('users')
                  .doc(data.user.uid)
                  .set({
                    email: email,
                    fname: fname,
                    lname: lname,
                    age: age,
                    weight: weight,
                    height: height,
                    createdAt: firestore.Timestamp.fromDate(new Date()),
                  })
                  .then(() => {
                    console.log('User added!')
                  })
                  .catch(error => {
                    console.log('Something went wrong.', error)
                  })
              })
          } catch (e) {
            console.log(e)
          }
        },
        logout: async () => {
          try {
            await auth().signOut()
          } catch (e) {
            console.error(e)
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  )
}
