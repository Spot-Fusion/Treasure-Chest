import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import * as Google from 'expo-google-app-auth';
import HomeScreen from './HomeScreen';

const GoogleAuthScreen = ({ navigation }) => {
  const test = () => {
    return async function signInWithGoogleAsync() {
    try {
      const result = await Google.logInAsync({
        androidClientId: "684227107653-acg78a8aheolp70sn26ssh3hqc5nqa5d.apps.googleusercontent.com",
        //androidClientId: "684227107653-u9rsur77ls32qhb4gs1rjhk6rq1let2j.apps.googleusercontent.com",
        scopes: ['profile', 'email'],
      });

      if (result.type === 'success') {
        this.props.navigation.navigate('Home')
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      //return { error: true };
      console.log('user not valid', e)
      //return { error: true };
    }
  }
}
  return (
    <View style={styles.view}>
      <Text style={styles.text}>LogIn Screen Here</Text>
      <Button title="Login with Google" onPress={test()} />
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

export default GoogleAuthScreen
  ;