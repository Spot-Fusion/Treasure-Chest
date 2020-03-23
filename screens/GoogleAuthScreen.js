import * as React from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import * as Google from 'expo-google-app-auth';
import HomeScreen from './HomeScreen';

const GoogleAuthScreen = ({ navigation }) => {
  const [name, setName] = React.useState('');
  const [photoUrl, setPhotoUrl] = React.useState('');
  const [id, setId] = React.useState(0);
  const [result, setResult] = React.useState({});

  const adduser = async (name, email, icon) => {
    await axios.post(`http://10.0.2.2:8080/user/`, { name, email, icon, bio: '' });
  }

  const getUser = async (name, email, icon) => {
    let user = await axios.get(`http://10.0.2.2:8080/user/${email}`);
    setId(user.data.id);
    setName(name);
    setPhotoUrl(icon);
    global.id = user.data.id || 0;
  }

  const signInWithGoogleAsync = async () => {
    try {
      const result = await Google.logInAsync({
        androidClientId: "684227107653-acg78a8aheolp70sn26ssh3hqc5nqa5d.apps.googleusercontent.com",
        //androidClientId: "684227107653-u9rsur77ls32qhb4gs1rjhk6rq1let2j.apps.googleusercontent.com",
        scopes: ['profile', 'email'],
      });

      if (result.type === 'success') {
        // navigation.navigate('Home')
        console.log(result);
        adduser(result.user.name, result.user.email, result.user.photoUrl);
        getUser(result.user.name, result.user.email, result.user.photoUrl)
        // return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      //return { error: true };
      console.error('user not valid', e)
      //return { error: true };
    }
  }
  
  React.useEffect(() => { signInWithGoogleAsync() }, []);
  // }
  // console.log(result);
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Welcome Back {name}</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home', { name, photoUrl, id })} />
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