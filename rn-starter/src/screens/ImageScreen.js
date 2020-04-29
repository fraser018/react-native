import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ImageDetail from '../components/ImageDetail'

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title='Forest'
        path={require('../../assets/forest.jpg')}
        score={8}
      />
      <ImageDetail
        title='Beach'
        path={require('../../assets/beach.jpg')}
        score={2}
      />
      <ImageDetail
        title='Mountain'
        path={require('../../assets/mountain.jpg')}
        score={5}
      />
    </View>
  )
}

const styles = StyleSheet.create({})

export default ImageScreen
