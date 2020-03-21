import * as React from 'react';
import { StyleSheet, View, TextInput, Text, Button, Alert } from 'react-native';
// import { Text, Button } from 'native-base'
import { Ionicons } from '@expo/vector-icons';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import ExpoCamera from '../components/ExpoCamera'

 const ShowListingScreen = ({ navigation, route }) => {
  //  const [title, setTitle] = React.useState('');
  //  const [description, setDescription] = React.useState('')
  //  const [price, setPrice] = React.useState(0)


  return (
    <View style={styles.view} style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Button title="Go Home" onPress={() => navigation.navigate('Home')} />
        {/* <ExpoCamera /> */}
          <Text style={styles.text}> Listing Image </Text>
          <Text>Title: {route.params.title}</Text>
         
          <Text>Description: {route.params.description}</Text>
          
          <Text>Price: ${route.params.price}</Text>
          
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    alignContent: 'center',
    justifyContent: 'center'
  },
  contentContainer: {
    paddingTop: 15,
  },
  optionIconContainer: {
    marginRight: 12,
  },
  View: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
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

export default ShowListingScreen;
