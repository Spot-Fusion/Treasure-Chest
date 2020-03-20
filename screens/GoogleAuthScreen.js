import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

 const GoogleAuthScreen = ({navigation}) => {
  return (   
      <View style={styles.view}>
        <Text style={styles.text}>LogIn Screen Here</Text>
        <Button title="Login with Google" onPress={() => navigation.navigate('Home')} />
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
