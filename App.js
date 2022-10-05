import React from "react";
import { Button, View, ScrollView, StyleSheet, Text, Image, ImageBackground } from "react-native";
import Constants from 'expo-constants';

const App = () => {
  return (<>
    <View style={{paddingTop:Constants.statusBarHeight}}></View>
    <View style={[styles.container, styles.playingSpace]}>
      <Text>글을 씁니다.</Text>
      <Text>글을 또 씁니다.</Text>
      
      <Image source={require('./assets/favicon.png')}/>
      <ImageBackground
        style={{width:200, height:200}}
        source={{
          uri: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg',
        }}
      > 
        <Text>
          한미 군 당국은 5일 북한의 중거리 탄도미사일(IRBM) 
          도발에 대응해 동해상으로 연합 지대지미사일 사격을 했다고 합동참모본부가 밝혔다.
          이번 연합 지대지미사일 사격에서 우리 군과 주한미군은 에이태큼스(ATACMS) 2발씩 
          모두 4발을 동해상으로 발사해 가상표적을 정밀타격했다. 이는 북한의 추가 도발을
          억제하기 위한 연합전력의 대응 능력을 보여준 것이라고 합참은 설명했다.
        </Text>
      
      </ImageBackground>
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