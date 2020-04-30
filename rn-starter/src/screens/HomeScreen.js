import React from 'react'
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native'

const HomeScreen = ({ navigation }) => {
  return (
    //Button is a simple button primative, os syled
    //TouchableOpacity is a stylised primative that can be used as a buttom or touch based input

    <View>
      <Text style={styles.text}>HOME</Text>
      <Button
        onPress={() => navigation.navigate('Components')}
        title='Go to Components Demo'
      />
      <Button
        onPress={() => navigation.navigate('List')}
        title='Go to List Demo'
      />
      <Button
        onPress={() => navigation.navigate('Image')}
        title='Go to Image Demo'
      />
      <Button
        onPress={() => navigation.navigate('Counter')}
        title='Go to Counter Demo'
      />
      <Button
        onPress={() => navigation.navigate('Colors')}
        title='Go to Color Box Demo'
      />
      <Button
        onPress={() => navigation.navigate('Square')}
        title='Go to Square Demo'
      />
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    justifyContent: 'center'
  }
})

export default HomeScreen
