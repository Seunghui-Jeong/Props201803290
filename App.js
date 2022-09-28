import React from "react";
import { Button, View, ScrollView, StyleSheet } from "react-native";

const App = () => {
  return (<>
    <View style={[styles.container, styles.playingSpace]}>

    </View>
    <ScrollView style={[styles.container]}>
      <View style = {[styles.controlSpace]}>
        <View style={[styles.buttonView]}>
          <Button title="1" />
        </View>
        <View style={[styles.buttonView]}>
          <Button title="2" />
        </View>
        <View style={[styles.buttonView]}>
          <Button title="3" />
        </View>
        <View style={[styles.buttonView]}>
          <Button title="4" />
        </View>
        <View style={[styles.buttonView]}>
          <Button title="5" />
        </View>
        <View style={[styles.buttonView]}>
          <Button title="6" />
        </View>
        <View style={[styles.buttonView]}>
          <Button title="7" />
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



export default App;