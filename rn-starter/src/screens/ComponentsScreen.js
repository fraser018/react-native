import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const ComponentsScreen = () => {
  const name = 'Fraser'

  return (
    <View>
      <Text style={styles.headingStyle}>
        {' '}
        Getting Started with React Native{' '}
      </Text>
      <Text style={styles.subHeadingStyle}> I am {name} </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  headingStyle: {
    fontSize: 45
  },
  subHeadingStyle: {
    fontSize: 20
  }
})

export default ComponentsScreen
