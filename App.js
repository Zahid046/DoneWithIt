import React from 'react';
import { StyleSheet, Text, View,Image,SafeAreaView } from 'react-native';

export default function App() {
 const handlePress=()=>console.log("hello");
//  console.log(require('./assets/icon.png'));
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>React Native App</Text>
      <Image 
      fadeDuration={1500}
      style={styles.imageStyle}
      source={
        require('./assets/adaptive-icon.png')
        }
      />
      <Image 
      blurRadius={2}
      fadeDuration={1000}
      source={{
        width : 100,
        height:150,
        uri:"https://picsum.photos/200",
      }}
      />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    backgroundColor:'white',
    width: 100,
    height: 150,
  },
});
