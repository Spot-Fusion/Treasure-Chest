import * as React from 'react';
// import TabBarIcon from '../components/TabBarIcon';
import { createDrawerNavigator } from '@react-navigation/drawer';


import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import CreateListingScreen from '../screens/CreateListingScreen';
import MessagesScreen from '../screens/MessagesScreen';
import LogInScreen from '../screens/LogInScreen'
import BottomTabNavigator from './BottomTabNavigator';
import { createStackNavigator } from '@react-navigation/stack';
import TabBarIcon from '../components/TabBarIcon';

const Drawer = createDrawerNavigator();
const DrawerStack  = createStackNavigator()

const DrawerStackNavigator = () => (
    <DrawerStack.Navigator>
        <DrawerStack.Screen name="Tabs" component={BottomTabNavigator} options={{headerTitle: null, headerLeft: ({navigation}) => <TabBarIcon name="md-menu" onPress={() => navigation.toggleDrawer()} />}} />
    </DrawerStack.Navigator>
)
const DrawerNavigator = () =>  (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Profile" component={ProfileScreen} />
            <Drawer.Screen name="Create Listing" component={CreateListingScreen} />
            <Drawer.Screen name="Messages" component={MessagesScreen} />
            <Drawer.Screen name="Log Out" component={LogInScreen} />
            <Drawer.Screen name="Tabs" component={DrawerStackNavigator} />
        </Drawer.Navigator>
    )


export default DrawerNavigator;
