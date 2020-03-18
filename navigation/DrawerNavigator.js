import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { SplashScreen } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import BottomTabNavigator from './navigation/BottomTabNavigator';
import useLinking from './navigation/useLinking';
import LinksScreen from './screens/LinksScreen';
import HomeScreen from './screens/HomeScreen';
import CreateListingScreen from './screens/CreateListingScreen'

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {

}

export default DrawerNavigator;
