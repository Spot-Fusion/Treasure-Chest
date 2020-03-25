import * as React from 'react';
import {Image, Platform, StyleSheet, TouchableOpacity, View, Text, Button, FlatList, ScrollView, StatusBar } from 'react-native';
import RecommendedCardItems from '../components/recommendedCardItems';
import ViewPagerAndroid from "@react-native-community/viewpager";
import {Container, Content, Header, Left, Right, Icon, Item, Input, Card, CardItem} from 'native-base';
import FAIcon from 'react-native-vector-icons/FontAwesome'
// import Swiper from 'react-native-swiper';


const HomeScreen = ({ route, navigation }) => {
  console.log(route.params);
  
  return (
    <Container>
      <Header style={[{ backgroundColor: '#3a455c', 
      height: 90, borderBottomColor: '#757575'}, styles.androidHeader]}>
        <Left style = {{flexDirection: 'row'}}>
          <Icon name = "md-menu" style = {{color: 'white', marginRight: 15}}></Icon>
        <FAIcon name='amazon' style={{ fontSize: 32, color: 'white' }}></FAIcon>
        </Left>
        <Right>
          <Icon name = 'md-cart' style = {{ color: 'white'}}></Icon>
        </Right>
      </Header>
      <View
      style = {{position: 'absolute', left: 0, right:0, top:90, height:70, backgroundColor: '#3a455c', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 5}}>
        <TouchableOpacity>
          <View
          style = {{width: 100, backgroundColor: '#e7e7eb', height: 50, borderRadius: 4, padding: 10 }}>
            <Text style = {{fontSize: 12}}>SHOP BY</Text>
            <Text style = {{fontWeight:'bold'}}> Category</Text>
          </View>
        </TouchableOpacity>
        <View style = {{flex:1, height: '100%', marginLeft: 5, justifyContent: 'center'}}></View>
        <Item style = {{backgroundColor: 'white', paddingHorizontal: 10, borderRadius: 4}}>
          <Icon name = 'search' style = {{
            fontSize: 20, paddingTop:5 }} ></Icon>
            <Input placeholder = "Search"></Input>
        </Item>
      </View>
      <Content style = {{backgroundColor: '#d5d5d6', marginTop: 70}}>
        <View style={{ height: 50, backgroundColor: 'white', flexDirection: 'row', paddingHorizontal: 5, alignItems: 'center', justifyContent: 'space-between'}}>
              <Text>Hello, Mr.Johnson</Text>
              <View style = {{flexDirection: 'row'}}>
                <Text>Your Account </Text>
                <Icon name = 'arrow-forward' style = {{fontSize:18}}></Icon>
              </View>
            </View>
        <ViewPagerAndroid
            autoplay = {true}
            style = {{height:100}}>
              <View style = {{flex:1}}>
            <Image style={{ flex: 1, height: null, width: null, resizeMode: 'contain' }} source={require('../assets/images/robot-dev.png')}></Image>
              </View>
              <View style={{ flex: 1 }}>
            <Image style={{ flex: 1, height: null, width: null, resizeMode: 'contain' }} source={require('../assets/images/robot-dev.png')}></Image>
              </View>
              <View style={{ flex: 1 }}>
            <Image style={{ flex: 1, height: null, width: null, resizeMode: 'contain' }} source={require('../assets/images/robot-dev.png')}></Image>
              </View>
        </ViewPagerAndroid>
        <Card>
          <CardItem
           header>
             <Text> Your Recommendations</Text>
           </CardItem>
          <RecommendedCardItems
          itemName ="You Cna heal your life"
          itemCreator = "Louise Hay"
          itemPrice ="$10"
          savings = "2.5"
          imageUrl = {require('../assets/images/robot-prod.png')}
          ratings = {5} >
          </RecommendedCardItems>
        </Card>
      </Content>
      
    </Container>
    
  );

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignContent: 'center'
  },
  androidHeader: {
    ...Platform.select({
      android: {
        paddingTop: StatusBar.currentHeight,
      }
    })
  },
  text: {
    marginBottom: 20,
    color: 'rgba(96,100,109, 0.8)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});

export default HomeScreen;
