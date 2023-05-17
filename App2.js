import React from 'react'
import { View,Text,StyleSheet } from 'react-native'

function App2(props) {

  return (
    <View>
        <Text style={styles.count2}>{props.count}</Text>
    </View>
  )
}

let styles = StyleSheet.create({
    count2:{
        color:"white",

    }
})

export default App2