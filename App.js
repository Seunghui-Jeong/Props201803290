import React from "react";
import { Button, View, ScrollView, StyleSheet, Text, Image, ImageBackground} from "react-native"
import Constants from 'expo-constants';

const App = () => {
 return (<>
   <View style={{paddingTop:Constants.statusBarHeight}}></View>
   <View style ={[styles.container, styles.playingSpace]}>
    <Text>글을 씁니다!!!!</Text>
    <Image source={require('./assets/favicon.png')}/>
    <ImageBackground
      style={{width:200, height:200}}
      source={{
        uri: 'https://mblogthumb-phinf.pstatic.net/20130120_287/ssokary57_1358684200722jPENM_JPEG/37.JPG?type=w2'
      }}>
      <Text>201803290</Text>
    </ImageBackground>
    </View>

    <ScrollView style ={[styles.container]}>
     <View style = {[styles.controlSpace]}>
     
     <View style={[styles.buttonView]}>
        <Button title="CHANGE FLEX DIRECTION"/>
      </View>
      <View style={[styles.buttonView]}>
        <Button title="CHANGE JUSTIFY CONTENT"/>
      </View>
      <View style={[styles.buttonView]}>  
        <Button title="CHANGE ALIGN ITEMS"/>
      </View>
      <View style={[styles.buttonView]}>  
        <Button title="CHANGE DIRECTION"/>
      </View>
      <View style={[styles.buttonView]}>  
        <Button title="CHANGE FLEX WRAP"/>
      </View>
      <View style={[styles.buttonView]}>  
        <Button title="ADD SQUARE"/>
      </View>
      <View style={[styles.buttonView]}>  
        <Button title="DELETE SQUARE"/>
      </View>
    </View>

    </ScrollView>

 </>);
}

const styles = StyleSheet.create({
 container: {
   height:'50%'
 },

 playingSpace: {
    backgroundColor: 'white',
    borderColor: 'purple',
    borderwidth:3
 },

 controlSpace:{
    backgroundColor: '#F5F5F5',
    flexDirection:'row',
    flexWrap: 'wrap'

 },

 buttonView:{
  width:'50%',
  padding:10
 }

});

export default App;