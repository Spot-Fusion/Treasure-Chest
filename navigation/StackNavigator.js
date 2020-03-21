import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// import BottomTabNavigator from './navigation/BottomTabNavigator';
import DrawerNavigator from './DrawerNavigator';

import LogInScreen from '../screens/LogInScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
  const [auth, setAuth] = React.useState(null);
  const changeAuth = () => setAuth(auth = true);
  console.log(auth);
  return (
    <Stack.Navigator headerMode='none'>
      <Stack.Screen name="Login" component={LogInScreen} />
      <Stack.Screen name="Drawer" component={DrawerNavigator} />
      {/* <Stack.Screen name="Root" component={BottomTabNavigator} /> */}
    </Stack.Navigator>
  )
}

export default StackNavigator;
