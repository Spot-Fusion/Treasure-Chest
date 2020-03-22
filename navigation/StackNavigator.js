import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNavigator from './DrawerNavigator';
import GoogleAuthScreen from '../screens/GoogleAuthScreen';
import HomeScrene from '../screens/HomeScreen';

import TabBarIcon from '../components/TabBarIcon'
import LogInScreen from '../screens/LogInScreen';
import ChatScreen from '../screens/ChatScreen';
import ShowListingScreen from '../screens/ShowListingScreen';

const Stack = createStackNavigator();

const StackNavigator = (navigation) => (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LogInScreen} />
      <Stack.Screen name="Drawer" component={DrawerNavigator} 
        options={{ headerTitle: null, 
        headerLeft: () => <TabBarIcon 
        name="md-menu" 
        size={30}
        style={{ marginBottom: -3 }}
        onPress={() => navigation.toggleDrawer()} />}}/>
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
        <Stack.Screen name="ShowListing" component={ShowListingScreen} />
    </Stack.Navigator>
  )


export default StackNavigator;
