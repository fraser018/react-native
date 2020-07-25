import React from 'react'
import { Text, StyleSheet, View, FlatList } from 'react-native'

const ListScreen = () => {
  const friends = [
    { name: 'Friend #1', age: 35 },
    { name: 'Friend #2', age: 75 },
    { name: 'Friend #3', age: 62 },
    { name: 'Friend #4', age: 42 },
    { name: 'Friend #5', age: 37 },
    { name: 'Friend #6', age: 36 },
    { name: 'Friend #7', age: 32 }
  ]

  return (
    //better to use FlatList instead of .map() ?

    <FlatList
      //properites for the flatlist itself

      //horizontal //changes scroll direction
      //showsHorizontalScrollIndicator={false} //turns off scroll bar
      showsVerticalScrollIndicator={false} //turns off scroll bar
      // a key is needed like when mapping over arrays. use keyExtractor on the object to get a unique key. Probably db id or uuid in bigger projects.
      keyExtractor={friend => friend.name}
      data={friends}
      //the item element returned in it's entirety would be {item{name: 'Friend #1'}, index0}
      //destructure 'item' from element to make it cleaner. Or use props as element and props.item in the return.

      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age {item.age}
          </Text>
        )
      }}
    />
  )
}

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50
  }
})

export default ListScreen
