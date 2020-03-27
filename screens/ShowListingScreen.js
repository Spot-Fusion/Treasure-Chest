import * as React from 'react';
import { StyleSheet, View, TextInput, Text, Button, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import ExpoCamera from '../components/ExpoCamera';
import CustomHeader from '../components/CustomHeader';
import axios from 'axios'

 const ShowListingScreen = ({ navigation, route }) => {
   const defaultParams = {name: 'Jordans', description: 'Gunmetal Blue\nSize 13', price: 200.00, zipcode: 70116, negotiable: true, id: 14 }
   const { idListing } = !route.params ? defaultParams  : route.params ;
   const [post, setPost] = React.useState({})
   console.log(idListing);

  const getListing = async (id) => {
    await axios.get(`http://10.0.2.2:8080/listing/${id}`)
      .then(post => setPost(post.data))
      .catch(e => console.error(e));
  }

React.useEffect(() =>{
  getListing(idListing)
}, [])

console.log(post);
const { name, description, price, zipcode, negotiable } = post;
  return (
    <View style={styles.view} style={styles.container} contentContainerStyle={styles.contentContainer}>
    {/* <CustomHeader navigation={navigation} title="Listing" /> */}
      <Button title="Go Back" onPress={() => navigation.navigate('Drawer')} />
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
    justifyContent: 'center',
  },
});

export default ShowListingScreen;
