import * as React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import GoogleAuthScreen from './GoogleAuthScreen'
import { setWorldOriginAsync } from 'expo/build/AR';

 const LogInScreen = ({navigation, auth, changeAuth}) => {
   const [login, setLogin] = React.useState(false) 
  return (    
      <View style={styles.view}>
        {/* <Ionicons name="md-cart" size={60} style={{justifyContent: 'flex-start', alignContent: 'center'}} /> */}
        <Image source={require("./assets/icons8-treasure-chest-100.png")} style={{padding: 10, height: 100, width: 100, resizeMode: "contain" }}/>
        <Text style={styles.text}>Treasure-Chest</Text>
        <Button color={'#3FC184'} title="Sign in with Google" onPress={() => navigation.navigate('GoogleAuth')} style={{justifyContent: 'flex-end'}} />
      </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  contentContainer: {
    paddingTop: 15,
  },
  optionIconContainer: {
    marginRight: 12,
  },
  view: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
    justifyContent: 'center',
    alignContent: 'center'
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  text: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
});

export default LogInScreen;
