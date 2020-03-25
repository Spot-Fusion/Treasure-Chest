import * as React from 'react';
import { StyleSheet, View, TextInput, Text, Button, Alert, Image, SafeAreaView, ScrollView } from 'react-native';
// import TabBarIcon from '../components/TabBarIcon';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';


import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import CreateListingScreen from '../screens/CreateListingScreen';
import MessagesScreen from '../screens/MessagesScreen';
import LogInScreen from '../screens/LogInScreen'
import BottomTabNavigator from './BottomTabNavigator';
import { createStackNavigator } from '@react-navigation/stack';
import TabBarIcon from '../components/TabBarIcon';
import GoogleAuthScreen from '../screens/GoogleAuthScreen';
import { Ionicons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();
const DrawerStack  = createStackNavigator()

const DrawerStackNavigator = () => (
    <DrawerStack.Navigator>
        <DrawerStack.Screen name="Tabs" component={BottomTabNavigator} />
    </DrawerStack.Navigator>
)

const DrawerContent = (props) => (
  <SafeAreaView style={{flex: 1}}>    
    <DrawerItem name="top" label={() => (
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Image
          style={{ height: 70, width: 70, borderRadius: 35, resizeMode: "contain" }}
          source={{
            uri: "http://pngimg.com/uploads/tiger/tiger_PNG23245.png"
          }} />
        <Text style={{ color: "#E5EBEA", alignSelf: "flex-end", fontSize: 16 }} >
          Coach O
        </Text>
      </View>
      )}
      style={{ backgroundColor: "#223843" }} />
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Tabs" onPress={() => props.navigation.navigate('Tabs')} />
    </DrawerContentScrollView>
  </SafeAreaView>
  )

const DrawerNavigator = () =>  (
    <Drawer.Navigator drawerContent={(props) => DrawerContent(props)}>       
      <Drawer.Screen name="GOAuth" component={GoogleAuthScreen} />
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Create Listing" component={CreateListingScreen} />
      <Drawer.Screen name="Messages" component={MessagesScreen} />
      <Drawer.Screen name="Tabs" component={BottomTabNavigator} />
      <Drawer.Screen name="Log Out" component={LogInScreen} />
    </Drawer.Navigator>
    )


export default DrawerNavigator;
