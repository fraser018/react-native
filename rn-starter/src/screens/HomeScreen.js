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
