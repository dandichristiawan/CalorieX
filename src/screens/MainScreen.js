import React, {Component} from 'react'
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  Dimensions,
  StatusBar,
} from 'react-native'
import MapView from 'react-native-maps'
import Geolocation from '@react-native-community/geolocation'
import haversine from 'haversine'
import pick from 'lodash'

const {width, height} = Dimensions.get('window')

export default class MainScreen extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      routeCoordinates: [],
      distanceTravelled: 0,
      prevLatLng: {},
    }
  }

  componentDidMount () {
    Geolocation.getCurrentPosition(
      position => {},
      error => alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    )

    this.watchID = Geolocation.watchPosition(position => {
      const {routeCoordinates, distanceTravelled} = this.state
      const newLatLngs = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      }
      
      const positionLatLngs = pick(position.coords, ['latitude', 'longitude'])
      this.setState({
        routeCoordinates: routeCoordinates.concat(positionLatLngs),
        distanceTravelled: distanceTravelled + this.calcDistance(newLatLngs),
        prevLatLng: newLatLngs,
      })
    })
  }

  componentWillUnmount () {
    Geolocation.clearWatch(this.watchID)
  }

  calcDistance (newLatLng) {
    const {prevLatLng} = this.state
    return haversine(prevLatLng, newLatLng) || 0
  }

  render () {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          showsUserLocation={true}
          followUserLocation={true}
          overlays={[
            {
              coordinates: this.state.routeCoordinates,
              strokeColor: '#19B5FE',
              lineWidth: 10,
            },
          ]}
        />
        <View style={styles.bottomBar}>
          <View style={styles.bottomBarGroup}>
            <Text style={styles.bottomBarHeader}>DISTANCE</Text>
            <Text style={styles.bottomBarContent}>
              {parseFloat(this.state.distanceTravelled).toFixed(2)} km
            </Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    width: width,
    height: height,
  },
  bottomBar: {
    marginTop: 500,
    marginRight: 250,
    borderRadius: 100/2,
    backgroundColor: '#9cacfd',
    height: 85,
    width: 100,
    padding: 20,
    flexDirection: 'row',
  },
  bottomBarGroup: {
    flex: 1,
  },
  bottomBarHeader: {
    color: '#fff',
    fontWeight: '200',
    textAlign: 'center',
    fontFamily: 'Poppins-Italic',
    fontSize: 12,
  },
  bottomBarContent: {
    fontFamily: 'Poppins-Italic',
    color: '#fff',
    fontWeight: '700',
    fontSize: 12,
    marginTop: 5,
    color: '#fff',
    textAlign: 'center',
  },
})
