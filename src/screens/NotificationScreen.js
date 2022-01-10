import React from 'react'
import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'

export default function NotificationScreen () {
  return (
    <View style={styles.container}>
      <View style={styles.notifList}>
        <View style={styles.elipse} />
        <View style={styles.notifTextContainer}>
          <Text style={styles.notifTextStyle}>
            Hey, Let's Burn some of that Calories!
          </Text>
          <Text style={styles.notifHourTextStyle}>6 hours ago</Text>
        </View>
        <TouchableOpacity>
          <View style={styles.iconContainer}>
            <Entypo name='dots-three-vertical' size={14} color='#ADA4A5' />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
  },
  notifList: {
    width: 315,
    height: 70,
    marginTop: 10,
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: '#DDDADA',
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  notifTextContainer: {
    marginTop: 5,
    width: 230,
    height: 38,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  iconContainer: {
    marginTop: 20,
    width: 14,
    height: 14,
    alignItems: 'center',
  },
  notifTextStyle: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    color: '#1D1617',
  },
  notifHourTextStyle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    color: '#7B6F72',
  },
  elipse: {
    marginTop: 5,
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    backgroundColor: '#92A3FD',
  },
})
