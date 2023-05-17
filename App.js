
import { useState } from 'react';
import { StyleSheet, View ,Text,Button} from 'react-native';
import App2 from './App2';




export default function App() {
 
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = ()=>{
    setCount(0)
  }


  return (
    <View style={styles.container}>
    <Text style={styles.heading}>Counter App</Text>
    <Text style={styles.countText}>Count: {count}</Text>
    <View style={styles.buttonContainer}>
      <Button title="+" onPress={increment} />
      <Button title='reset' onPress={reset}/>
      <Button title="-" onPress={decrement} />
      <App2 count={count}/>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"black",
    justifyContent: 'center',
    alignItems: 'center',
  },
  countText: {
    fontSize: 34,
    marginBottom: 15,
    backgroundColor:"#00FFFF",
    padding:12,
    borderWidth: 4,
    marginBottom:80,
    borderRadius:15,
    

    
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
     backgroundColor:"black",
    paddingRight:20,
    paddingLeft:20,
    marginBottom:50,
    width:300,
    height:40,
    display:'flex',
    justifyContent:"space-around"
  },
  heading: {
    fontSize:40,
    borderWidth: 6,
    marginBottom:190,
    backgroundColor:"#FF00FF",
    padding:6,
  }
 
});
