import * as React from 'react';
// import TabBarIcon from '../components/TabBarIcon';
import { createDrawerNavigator } from '@react-navigation/drawer';


import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import CreateListingScreen from '../screens/CreateListingScreen';
import MessagesScreen from '../screens/MessagesScreen';
import LogInScreen from '../screens/LogInScreen'

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Profile" component={ProfileScreen} />
            <Drawer.Screen name="Create Listing" component={CreateListingScreen} />
            <Drawer.Screen name="Messages" component={MessagesScreen} />
            <Drawer.Screen name="Log Out" component={LogInScreen} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator;
