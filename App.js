import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View, Button } from 'react-native';
import { SplashScreen } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';

import BottomTabNavigator from './navigation/BottomTabNavigator';
import DrawerNavigator from './navigation/DrawerNavigator';
import useLinking from './navigation/useLinking';
import StackNavigator from './navigation/StackNavigator';
import MenuButton from './components/MenuButton';



export default function App(props, { navigation }) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const containerRef = React.useRef();

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();
        // Load our initial navigation state
        setInitialNavigationState(await getInitialState());
        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }
    loadResourcesAndDataAsync();
  }, []);

  
  if (!isLoadingComplete && !props.skipLoadingScreen) { return null; } 
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <MenuButton navigation={navigation}/>     
        <NavigationContainer>
          <StackNavigator />          
        </NavigationContainer>
      </View>
    );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignContent: 'center'
  },
});
