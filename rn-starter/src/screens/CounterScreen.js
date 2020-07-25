import React, { useReducer } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const NUMBER_CHANGE = 1

const reducer = (state, action) => {
  switch (action.type) {
    case 'increase_number':
      return { ...state, number: state.number + action.payload }
    case 'decrease_number':
      return { ...state, number: state.number - action.payload }
    default:
      return state
  }
}

const CounterScreen = () => {
  //array descruturing, (0) defines the initial state value
  const [state, dispatch] = useReducer(reducer, { number: 0 })

  return (
    <View>
      <Button
        title='Increase'
        onPress={() =>
          dispatch({ type: 'increase_number', payload: NUMBER_CHANGE })
        }

        //Don't modify the variable directly
        // counter++
        //instead:
        // setCounter(counter + 1)
      />
      <Button
        title='Decrease'
        onPress={() =>
          dispatch({ type: 'decrease_number', payload: NUMBER_CHANGE })
        }
      />
      <Text>Current Count: {state.number}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default CounterScreen
