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
          uri: 'https://images.app.goo.gl/LAKDPnBA9VTs4izA7',
        }}
      > 
        <Text>
        현대사회는 ‘국제화’(internationalization) 또는 ‘세계화’(globalization)로 국제사회의
        상호 의존성이 더욱 심화되고 경제를 중심으로 세계가 단일한 체계로 나아가는 한편,
        세계화로 인한 인구의 국제적 이동이 그 어느 때보다 활발하게 이루어지고 있다. 그
        결과 비교적 동질적인 문화를 유지하던 국가들도 국가 간 교류, 결혼과 노동 등으로
        인해 다양한 민족과 인종이 유입되고 그에 따라 이질적인 문화가 들어옴으로써 바야흐로 다문화사회를 맞게 되었다. 다문화사회로의 전환은 이제 거부할 수 없는 하나의
        추세이며, 선택의 문제가 아니라 해결해야 할 필수 과제가 되었다
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