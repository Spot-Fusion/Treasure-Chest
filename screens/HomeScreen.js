import * as React from 'react';
import { Image, Platform, StyleSheet, TouchableOpacity, View, Text, Button, FlatList } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { NavigationContainer } from '@react-navigation/native';
import TabBarIcon from '../components/TabBarIcon'
import BottomTabNavigator from '../navigation/BottomTabNavigator'
import Expo from 'expo';

const DATA = [
  { key: <TabBarIcon name="md-image"/>, id: 1 },
  { key: <TabBarIcon name="md-image"/>, id: 2 },
  { key: <TabBarIcon name="md-image"/>, id: 3 },
  { key: <TabBarIcon name="md-image"/>, id: 4 },
  { key: <TabBarIcon name="md-image"/>, id: 5 },
  { key: <TabBarIcon name="md-image"/>, id: 6 },
  { key: <TabBarIcon name="md-image"/>, id: 7 },
  { key: <TabBarIcon name="md-image"/>, id: 8 },
  { key: <TabBarIcon name="md-image"/>, id: 9 },
  { key: <TabBarIcon name="md-image"/>, id: 10 },
  ];

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Button title={<TabBarIcon name="md-menu"/>} onPress={() => navigation.toggleDrawer()} />
        <Button title="Go to Create Listings" onPress={() => navigation.navigate('Create Listing')} />
        <View style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={({ item }) => <TouchableOpacity style={{justifyContent: 'center'}}>{item.key}</TouchableOpacity>}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </View>
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
