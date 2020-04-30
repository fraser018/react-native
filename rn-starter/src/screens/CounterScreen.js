import React, { useReducer } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const reducer = (state, action) ={
  switch (action.type)
}

const CounterScreen = () => {
  //array descruturing, (0) defines the initial state value
  const [state, dispatch] = useReducer(reducer, 0)

  return (
    <View>
      <Button
        title='Increase'
        onPress={() => dispatch({type: 'increase_number', payload: ++})}
          
          //Don't modify the variable directly
          // counter++
          //instead:
          // setCounter(counter + 1)
          
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
