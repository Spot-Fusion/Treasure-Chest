import * as React from 'react';
import { StyleSheet, View, TextInput, Text, Button, Alert, Image } from 'react-native';
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

const Drawer = createDrawerNavigator();
const DrawerStack  = createStackNavigator()

const DrawerStackNavigator = () => (
    <DrawerStack.Navigator>
        <DrawerStack.Screen name="Tabs" component={BottomTabNavigator} />
    </DrawerStack.Navigator>
)

const DrawerNavigator = () =>  (
    <Drawer.Navigator>
        {/* <DrawerContentScrollView>
            <DrawerItem name="top" label={() => (
          <View style={{ flex: 1, flexDirection: "row" }}>
            <Image
              style={{ height: 65, width: 65, resizeMode: "contain" }}
              source={{
                uri: "https://pngimg.com/uploads/face/face_PNG5645.png"
              }} />
            <Text style={{ color: "#E5EBEA", alignSelf: "flex-end", fontSize: 16 }} >
              Fresh Prince
            </Text>
          </View>
           )}
           style={{ backgroundColor: "#3fb984" }} /> */}
            <Drawer.Screen name="GOAuth" component={GoogleAuthScreen} />
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Profile" component={ProfileScreen} />
            <Drawer.Screen name="Create Listing" component={CreateListingScreen} />
            <Drawer.Screen name="Messages" component={MessagesScreen} />
            <Drawer.Screen name="Tabs" component={BottomTabNavigator} />
            <Drawer.Screen name="Log Out" component={LogInScreen} />
        {/* </DrawerContentScrollView> */}
    </Drawer.Navigator>
    )


export default DrawerNavigator;
