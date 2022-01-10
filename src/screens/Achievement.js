import React from 'react'
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native'

export default function Achievement () {
  return (
    <View style={styles.container}>
      <View style={styles.achievementProgressContainer}>
      </View>
        <ScrollView style={styles.achievementCardStyle}>
          <View style={styles.boxCard1}>
            <View style={styles.insideBoxCard1}>
              <Image
                style={{marginTop: 10}}
                source={require('../images/bronze-medal.png')}
              />
            </View>
            <View style={styles.insideBoxCard2}>
              <Image
                style={{marginTop: 10}}
                source={require('../images/bronze-medal.png')}
              />
            </View>
            <View style={styles.insideBoxCard3}>
              <Image
                style={{marginTop: 10}}
                source={require('../images/bronze-medal.png')}
              />
            </View>
          </View>
          <View style={styles.boxCard2}>
            <View style={styles.insideBoxCard1}>
              <Image
                style={{marginTop: 10}}
                source={require('../images/bronze-medal.png')}
              />
            </View>
            <View style={styles.insideBoxCard2}>
              <Image
                style={{marginTop: 10}}
                source={require('../images/bronze-medal.png')}
              />
            </View>
            <View style={styles.insideBoxCard3}>
              <Image
                style={{marginTop: 10}}
                source={require('../images/bronze-medal.png')}
              />
            </View>
          </View>
          <View style={styles.boxCard3}>
            <View style={styles.insideBoxCard1}>
              <Image
                style={{marginTop: 10}}
                source={require('../images/bronze-medal.png')}
              />
            </View>
            <View style={styles.insideBoxCard2}>
              <Image
                style={{marginTop: 10}}
                source={require('../images/bronze-medal.png')}
              />
            </View>
            <View style={styles.insideBoxCard3}>
              <Image
                style={{marginTop: 10}}
                source={require('../images/bronze-medal.png')}
              />
            </View>
          </View>
          <View style={styles.boxCard4}>
            <View style={styles.insideBoxCard1}>
              <Image
                style={{marginTop: 10}}
                source={require('../images/bronze-medal.png')}
              />
            </View>
            <View style={styles.insideBoxCard2}>
              <Image
                style={{marginTop: 10}}
                source={require('../images/bronze-medal.png')}
              />
            </View>
            <View style={styles.insideBoxCard3}>
              <Image
                style={{marginTop: 10}}
                source={require('../images/bronze-medal.png')}
              />
            </View>
          </View>
          <View style={styles.boxCard5}>
            <View style={styles.insideBoxCard1}>
              <Image
                style={{marginTop: 10}}
                source={require('../images/bronze-medal.png')}
              />
            </View>
            <View style={styles.insideBoxCard2}>
              <Image
                style={{marginTop: 10}}
                source={require('../images/bronze-medal.png')}
              />
            </View>
            <View style={styles.insideBoxCard3}>
              <Image
                style={{marginTop: 10}}
                source={require('../images/bronze-medal.png')}
              />
            </View>
          </View>
          <View style={styles.boxCard6}>
            <View style={styles.insideBoxCard1}>
              <Image
                style={{marginTop: 10}}
                source={require('../images/bronze-medal.png')}
              />
            </View>
            <View style={styles.insideBoxCard2}>
              <Image
                style={{marginTop: 10}}
                source={require('../images/bronze-medal.png')}
              />
            </View>
            <View style={styles.insideBoxCard3}>
              <Image
                style={{marginTop: 10}}
                source={require('../images/bronze-medal.png')}
              />
            </View>
          </View>
          <View style={styles.boxCard7}>
            <View style={styles.insideBoxCard1}>
              <Image
                style={{marginTop: 10}}
                source={require('../images/bronze-medal.png')}
              />
            </View>
            <View style={styles.insideBoxCard2}>
              <Image
                style={{marginTop: 10}}
                source={require('../images/bronze-medal.png')}
              />
            </View>
            <View style={styles.insideBoxCard3}>
              <Image
                style={{marginTop: 10}}
                source={require('../images/bronze-medal.png')}
              />
            </View>
          </View>
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
  },
  achievementProgressContainer: {
    width: 350,
    height: 165,
    backgroundColor: '#ffff',
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 3,
    marginTop: 10,
    borderRadius: 10,
  },
  achievementCardStyle: {
    width: 350,
    height: 265,
    backgroundColor: '#ffff',
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 3,
    marginTop: 15,
    borderRadius: 10,
  },
  boxCard1: {
    width: 350,
    height: 100,
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
    marginBottom: 10,
  },
  boxCard2: {
    width: 350,
    height: 100,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 10,
    padding: 10,
  },
  boxCard3: {
    width: 350,
    height: 100,
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
    marginBottom: 10,
  },
  boxCard4: {
    width: 350,
    height: 100,
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
    marginBottom: 10,
  },
  boxCard5: {
    width: 350,
    height: 100,
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
    marginBottom: 10,
  },
  boxCard6: {
    width: 350,
    height: 100,
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
    marginBottom: 10,
  },
  boxCard7: {
    width: 350,
    height: 100,
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
    marginBottom: 10,
  },
  insideBoxCard1: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    backgroundColor: 'yellow',
    alignItems: 'center',
    padding: 5,
  },
  insideBoxCard2: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    backgroundColor: 'blue',
    alignItems: 'center',
    padding: 5,
  },
  insideBoxCard3: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    backgroundColor: 'green',
    alignItems: 'center',
    padding: 5,
  },
})
