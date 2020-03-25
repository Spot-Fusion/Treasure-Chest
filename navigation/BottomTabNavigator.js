import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import MessagesScreen from '../screens/MessagesScreen';
import CreateListingScreen from '../screens/CreateListingScreen'
import { Ionicons } from '@expo/vector-icons';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

const BottomTabNavigator = ({ navigation, route }) => {

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME} 
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused ? 'ios-home' : 'md-home';
        } else if (route.name === 'CreateListing') {
          iconName = focused ? 'ios-add-circle' : 'ios-add-circle-outline';
        } else if (route.name === 'Messages') {
          iconName = focused ? 'ios-chatboxes' : 'md-chatboxes';
        }
  
        return <Ionicons name={iconName} size={size} color={color}/>;
      },
    })}
    tabBarOptions={{
      activeTintColor: 'black',
      inactiveTintColor: 'gray',
    }}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
        }}
      />
      <BottomTab.Screen
        name="CreateListing"
        component={CreateListingScreen}
        options={{
          title: 'CreateListing',
        }}
      />
      <BottomTab.Screen
        name="Messages"
        component={MessagesScreen}
        options={{
          title: 'Messages',
        }}
      />
    </BottomTab.Navigator>
  );
}

export default BottomTabNavigator;
