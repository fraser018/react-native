import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const Header = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: 'darkblue',
  },
  text: {
    color: '#ffffff',
    fontSize: 23,
    textAlign: 'center',
  },
});

export default Header;
