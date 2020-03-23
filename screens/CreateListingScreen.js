import * as React from 'react';
import { StyleSheet, View, TextInput, Text, Button, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import ExpoCamera from '../components/ExpoCamera';
import CheckBox from 'react-native-check-box'
import CategoryPicker from '../components/CategoryPicker';

 const CreateListingScreen = ({navigation}) => {
   const [idCategory, setIdCategory] = React.useState(1);
   const [name, setName] = React.useState('');
   const [description, setDescription] = React.useState('')
   const [price, setPrice] = React.useState(0);
   const [zipcode, setZipcode] = React.useState(0);
   const [negotiable, setNegotialbe] = React.useState(false);   

   const addPost = async (name, description, price, zipcode, negotiable) => {
    await axios.post(`http://10.0.2.2:8080/user/`, {id_seller: 5, id_category: 1, name, description, price, zipcode, negotiable });
  }

  return (    
      <View style={styles.view}style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Button title="Go back" onPress={() => !navigation.goBack() ? navigation.navigate('Home') : navigation.goBack()} />
        {/* <ExpoCamera /> */}
          <Text style={styles.text}>Create Listing Screen Here</Text>
          {/* <CategoryPicker onClick={(v) => setIdCategory(v.id)}/> */}
          <Text>Name: {name}</Text>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(text) => setName(text)}
            placeholder='Input Title...'
          />
          <Text>Description: {description}</Text>
          <TextInput
            multiline
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(text) => setDescription(text)}
            placeholder='Input Description...'
          />
          <Text>Price: ${price}</Text>
          <TextInput
            keyboardType={"number-pad"}
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(num) => setPrice(num)}
            placeholder='Input Price...'
          />
          <Text>ZipCode: {zipcode}</Text>
          <TextInput
            keyboardType={"number-pad"}
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(num) => setZipcode(num)}
            placeholder='Input Price...'
          />
          <Text>Negotiable: { negotiable ? "yes" : "no" }</Text>
          <CheckBox style={{flex: 1, padding: 10}}
            onClick={()=> setNegotialbe(true)}
            isChecked={negotiable}
            leftText={"Negotiable?"}
          />
          <Button title="Create Listing" onPress={() => {
            // addPost(name, description, price, zipcode, negotiable);
            navigation.navigate('ShowListing', { name, description, price, zipcode, negotiable })}} />
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

export default CreateListingScreen;
