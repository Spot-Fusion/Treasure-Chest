import * as React from 'react';
import { StyleSheet, View, TextInput, Text, Button, Alert } from 'react-native';
// import { Text, Button } from 'native-base'
import { Ionicons } from '@expo/vector-icons';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import ExpoCamera from '../components/ExpoCamera';
import CustomHeader from '../components/CustomHeader';

 const ShowListingScreen = ({ navigation, route }) => {
   const defaultParams = {name: 'Jordans', description: 'Gunmetal Blue\nSize 13', price: 200.00, zipcode: 70116, negotiable: true }
   const { name, description, price, zipcode, negotiable } = !route.params ? defaultParams  : route.params ;
 
  return (
    <View style={styles.view} style={styles.container} contentContainerStyle={styles.contentContainer}>
    <CustomHeader navigation={navigation} title="Listing" />
      <Button title="Go Home" onPress={() => navigation.navigate('Home')} />
        {/* <ExpoCamera /> */}
          <Text style={styles.text}> Listing Image </Text>
          <Text>Title: {name}</Text>
         
          <Text>Description: {description}</Text>
          
          <Text>Price: ${price}</Text>

          <Text>ZipCode: {zipcode}</Text>

          <Text>Negotiable: {negotiable ? 'yes' : 'no'}</Text>

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
