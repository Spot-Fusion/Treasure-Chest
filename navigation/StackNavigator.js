import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNavigator from './DrawerNavigator';
import GoogleAuthScreen from '../screens/GoogleAuthScreen';
import HomeScrene from '../screens/HomeScreen';

import LogInScreen from '../screens/LogInScreen';
import ChatScreen from '../screens/ChatScreen';
import ShowListingScreen from '../screens/ShowListingScreen';
import MenuButton from '../components/MenuButton';

const Stack = createStackNavigator();

const options={ headerTitle: null, 
  headerLeft: () => <MenuButton />}

const StackNavigator = ({navigation}) => (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={LogInScreen} />
      <Stack.Screen name="Drawer" component={DrawerNavigator} />
        {/* <Stack.Screen name="ChatScreen" component={ChatScreen} />
        <Stack.Screen name="ShowListing" component={ShowListingScreen} /> */}
    </Stack.Navigator>
  )


export default StackNavigator;
