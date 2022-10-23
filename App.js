import React from "react";
import { Button, View, ScrollView, StyleSheet, Text, Image, ImageBackground } from "react-native";
import Constants from 'expo-constants';
import { useState } from "react";

const App = () => {

  const flexDirections = ['row', 'rew-reverse', 'column', 'column-reverse'];

  const [flexDirection, setFlexDirection] = useState(0);

  const Square = () => {
    const sqStyle = {
      width: 50,
      height: 50,
      backgroundColor:randomHexColor(),
    };
    return <View style={sqStyle} />;
  };

  const [squares, setSquares] = useState([Square(), Square(), Square()]);


  return (<>
    <View style={{paddingTop:Constants.statusBarHeight}}></View>
    <View style={[styles.container, styles.playingSpace]}>
      { squares.map(elem => elem) }      
    </View>

    <ScrollView style={[styles.container]}>
      <View style = {[styles.controlSpace]}>
        <View style={[styles.buttonView]}>
          <Button title="CHANGE FLEX DIRECTION" 
            onPress={() => console.log("CHANGE FLEX DIRECTION")}
          />
        </View>
        <View style={[styles.buttonView]}>
          <Button title="CHANGE JUSTIFY CONTENT" 
            onPress={() => console.log("CHANGE JUSTIFY CONTENT")}
          />
        </View>
        <View style={[styles.buttonView]}>
          <Button title="CHANGE ALIGN ITEMS" 
            onPress={() => console.log("CHANGE ALIGN ITEMS")}/>
        </View>
        <View style={[styles.buttonView]}>
          <Button title="CHANGE DIRECTION" 
            onPress={() => console.log("CHANGE DIRECTION")}/>
        </View>
        <View style={[styles.buttonView]}>
          <Button title="CHAGE FLEX WRAP" 
            onPress={() => console.log("CHAGE FLEX WRAP")}/>
        </View>
        <View style={[styles.buttonView]}>
          <Button title="ADD SQUARE" 
            onPress={() => setSquares([...squares, Square()])}/>
        </View>
        <View style={[styles.buttonView]}>
          <Button title="DELETE SQUARE" 
            onPress={() => setSquares(squares.filter((v, i) => i != squares.length-1))}/>
        </View>
      </View>
      

    </ScrollView>

  </>);
}

const styles = StyleSheet.create({
  container: {
    height: '50%'
  },
  playingSpace: {
    backgroundColor: 'white',
    borderColor: 'blue',
    borderWidth: 3

  },
  controlSpace: {
    backgroundColor: '#F5F5F5',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },

  buttonView: {

    width:'50%',
    padding:10
  }
});

const randomHexColor = () => {
  return '#000000'.replace(/0/g, () => {
    return (~~(Math.random() * 16)).toString(16);
  });
};

export default App;