import * as React from 'react';
import { Image, Platform, StyleSheet, TouchableOpacity, View, Text, Button, FlatList, ScrollView } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { NavigationContainer } from '@react-navigation/native';
import TabBarIcon from '../components/TabBarIcon'
import BottomTabNavigator from '../navigation/BottomTabNavigator';
import Expo from 'expo';
//import { Ionicons } from '@expo/vector-icons';
import {Container, Content, Header, Left, Right, Icon} from 'native-base';
import { render } from 'react-dom';

// const DATA = [
//   { key: <Ionicons name="md-image" size={100} style={{ marginBottom: -3 }}/>, id: 1 },
//   { key: <Ionicons name="md-image" size={100} style={{ marginBottom: -3 }}/>, id: 2 },
//   { key: <Ionicons name="md-image" size={100} style={{ marginBottom: -3 }}/>, id: 3 },
//   { key: <Ionicons name="md-image" size={100} style={{ marginBottom: -3 }}/>, id: 4 },
//   { key: <Ionicons name="md-image" size={100} style={{ marginBottom: -3 }}/>, id: 5 },
//   { key: <Ionicons name="md-image" size={100} style={{ marginBottom: -3 }}/>, id: 6 },
//   { key: <Ionicons name="md-image" size={100} style={{ marginBottom: -3 }}/>, id: 7 },
//   { key: <Ionicons name="md-image" size={100} style={{ marginBottom: -3 }}/>, id: 8 },
//   { key: <Ionicons name="md-image" size={100} style={{ marginBottom: -3 }}/>, id: 9 },
//   { key: <Ionicons name="md-image" size={100} style={{ marginBottom: -3 }}/>, id: 10 },
//   ];

const HomeScreen = ({ route, navigation}) => {
  console.log(route.params);
  
  return (
    <Container>
      <Header style={{ backgroundColor: '#3a455c', height: 90, borderBottomColor: '#757575'}}>
        
      </Header>
    </Container>
    // <View style={styles.container}>
    //   <Button title= 'Menu' onPress={() => navigation.toggleDrawer()} />
    //     <Button title="Go to Create Listings" onPress={() => navigation.navigate('Create Listing')} />
    //     <View style={styles.container}>
    // <ScrollView scrollEventThrottle= {16}>
    //       <View style={{ flex: 1, backgroundColor: 'white', paddingHorizontal: 20}}>
    //           <Text style = {{fontSize: 24, fontWeight: '700', paddingHorizontal: 20}} > Wassup shopper</Text>
    //           <View style = {{height:130, marginTop: 20}}>
    //             <ScrollView>
    //               <View style = {{height: 130, height:130}}>
    //                 <View style = {{flex:2}}>
                    
    //                 </View>
    //                 <View style = {{flex:1}}>

    //                 </View>
    //               </View>
    //             </ScrollView>
    //           </View>
    //       </View>
    // </ScrollView>
    //     <FlatList
    //       data={DATA}
    //       renderItem={({ item }) => <TouchableOpacity style={{justifyContent: 'center'}}>{item.key}</TouchableOpacity>}
    //       keyExtractor={item => item.id.toString()}
    //     /> 
    //   </View>
    // </View>
  );

}
HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignContent: 'center'
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
