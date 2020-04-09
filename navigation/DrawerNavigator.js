import * as React from 'react';
import { StyleSheet, View, TextInput, Text, Button, Alert, Image, SafeAreaView, ScrollView } from 'react-native';
// import TabBarIcon from '../components/TabBarIcon';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import axios from 'axios';

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
import ShowListingScreen from '../screens/ShowListingScreen';

const Drawer = createDrawerNavigator();
const DrawerStack  = createStackNavigator()

const DrawerStackNavigator = ({ navigation }) => (
    <DrawerStack.Navigator screenOptions={{headerShown: false}}>
        <DrawerStack.Screen name="Tabs" component={BottomTabNavigator} />
    </DrawerStack.Navigator>
)

const DrawerContent = (props, {user}) => {
 
  return (
  <SafeAreaView style={{flex: 1}}>    
    <DrawerItem name="top" label={() => (
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Image
          style={{ height: 70, width: 70, borderRadius: 35, resizeMode: "contain" }}
          source={{
            uri: !user ? "http://pngimg.com/uploads/tiger/tiger_PNG23245.png" : user.icon
          }} />
        <Text style={{ color: "#E5EBEA", alignSelf: "flex-end", fontSize: 16 }} >
          {!user ? "Coach O" : user.name}
        </Text>
      </View>
      )}
      style={{ marginTop: 25 ,backgroundColor: "#223843", paddingTop: 15, paddingBottom: 65}} />
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Log Out" onPress={() => props.navigation.navigate('Login')} />

    </DrawerContentScrollView>
  </SafeAreaView>
  )
}

const DrawerNavigator = ({ navigation }) =>  {
  const [user, setUser] = React.useState({})

  let url = '10.0.2.2'

  const getProfile = async (id) => {
    await axios.get(`http://${url}:8080/user/id/${id}`)
      .then(post => setUser(post.data))
      .catch(e => console.error(e));
  }

  let idUser = 5;
  React.useEffect(() =>{
    getProfile(idUser)
  }, [])
 
  // console.log(user);

  return (
    <Drawer.Navigator drawerContent={(props) => DrawerContent(props, {user})}>       
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Create Listing" component={CreateListingScreen} />
      <Drawer.Screen name="Messages" component={MessagesScreen} />
      <Drawer.Screen name="Tabs" component={DrawerStackNavigator} />
      {/* <Drawer.Screen name="Log Out" component={LogInScreen} /> */}
      {/* <Drawer.Screen name="ShowListing" component={ShowListingScreen} options={{drawerLabel: () => null, title: null, }}/> */}
    </Drawer.Navigator>
    )
}


export default DrawerNavigator;
