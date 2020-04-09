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
        <Image source={require("./assets/icons8-treasure-chest-100.png")} style={{padding: 10, height: 100, width: 100, resizeMode: "contain", marginBottom: 25 }}/>
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
    backgroundColor: '#dfedf5',
    height: '100%',
    width: '100%',
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  text: {
    fontSize: 15,
    marginTop: 1,
    marginBottom: 100,
    fontSize: 25,
    fontWeight: 'bold'
  },
});

export default LogInScreen;
