import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNavigator from './DrawerNavigator';
import GoogleAuthScreen from '../screens/GoogleAuthScreen';
import HomeScrene from '../screens/HomeScreen';

import LogInScreen from '../screens/LogInScreen';
import ChatScreen from '../screens/ChatScreen';
import ShowListingScreen from '../screens/ShowListingScreen';
import MenuButton from '../components/MenuButton';
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();

const options={ headerTitle: null, 
  headerLeft: () => <MenuButton />}

const StackNavigator = () => (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={LogInScreen} />
      <Stack.Screen name="GoogleAuth" component={GoogleAuthScreen} />
      <Stack.Screen name="Drawer" component={DrawerNavigator} 
      options={{ headerTitle: null, 
        }}/>
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
        <Stack.Screen name="ShowListing" component={ShowListingScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  )


export default StackNavigator;
