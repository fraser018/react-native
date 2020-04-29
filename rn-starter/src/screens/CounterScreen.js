import React, { useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const CounterScreen = () => {
  //array descruturing, (0) defines the initial state value
  const [counter, setCounter] = useState(0)

  return (
    <View>
      <Button
        title='Increase'
        onPress={() => {
          //Don't modify the variable directly
          // counter++
          //instead:
          setCounter(counter + 1)
        }}
      />
      <Button
        title='Decrease'
        onPress={() => {
          setCounter(counter - 1)
        }}
      />
      <Text>Current Count: {counter}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default CounterScreen
