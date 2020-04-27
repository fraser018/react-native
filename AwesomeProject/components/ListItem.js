import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const ListItem = props => {
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemsView} />
      <Text style={styles.listItemText}>{props.item.text}</Text>
      <Icon
        name="remove"
        size={20}
        color="firebrick"
        // eslint-disable-next-line no-undef
        onPress={() => props.deleteItem(props.item.id)}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  listItemsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listItemText: {
    fontSize: 18,
  },
});

export default ListItem;
