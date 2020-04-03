import * as React from 'react';
import { StyleSheet, View, TextInput, Text, Button, Alert, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import ExpoCamera from '../components/ExpoCamera';
import CheckBox from 'react-native-check-box'
import CategoryPicker from '../components/CategoryPicker';
import CustomHeader from '../components/CustomHeader';
import ExpoImagePicker from '../components/ExpoImagePicker';
import axios from 'axios';

 const CreateListingScreen = ({navigation}) => {
   const [idSeller, setIdSeller] = React.useState(global.id);
   const [idCategory, setIdCategory] = React.useState(1);
   const [name, setName] = React.useState('');
   const [description, setDescription] = React.useState('')
   const [price, setPrice] = React.useState(0);
   const [zipcode, setZipcode] = React.useState(0);
   const [negotiable, setNegotialbe] = React.useState(0);
   const [image, setImage] = React.useState('');
   const [idListing, setIdListing] = React.useState(0);

   let url = '10.0.2.2';

   const addImage = async (id, image) => {
    await axios.post(`http://${url}:8080/listing/${id}`, { image })
    .then(body => {
      console.log(body.data);
      navigation.navigate('ShowListing', { idListing });
    })
    .catch(e => console.error(e))
   }

   const addPost = async (name, description, price, zipcode, negotiable) => {
    await axios.post(`http://${url}:8080/listing/`, {id_seller: idSeller, id_category: 1, name, description, price, zipcode, negotiable })
    .then(body => {
      addImage(body.data, image)
      setIdListing(body.data);
    })
    .catch(e => console.error(e));
  }


  const chooseImage = (img) => {
    setImage('' + img);
    console.log(`This is chosen: ${img}`);
  };

  return (    
      <ScrollView style={styles.view} /*style={styles.container} contentContainerStyle={styles.contentContainer}*/>
        <CustomHeader navigation={navigation} title="Create Listing" />
      <Button color={'#3FC184'} title="Go back" onPress={() => !navigation.goBack() ? navigation.navigate('Home') : navigation.goBack()} />
        {/* <ExpoCamera /> */}
        <Image
          style={{padding: 10, height: 70, width: 70, borderRadius: 35, resizeMode: "contain" }}
          source={{ uri: image === '' ? "http://pngimg.com/uploads/tiger/tiger_PNG23245.png" : image }} />
        <ExpoImagePicker chooseImage={chooseImage}/>
          <Text style={styles.text}>Create Listing Screen Here</Text>
          {/* <CategoryPicker onClick={(v) => setIdCategory(v.id)}/> */}
          <Text>Name</Text>
          <TextInput
            value={name}
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(text) => setName(text)}
            placeholder='Input Title...'
          />
          <Text>Description</Text>
          <TextInput
            multiline
            value={description}
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(text) => setDescription(text)}
            placeholder='Input Description...'
          />
          <Text>Price</Text>
          <TextInput
            keyboardType={"number-pad"}
            value={price}
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(num) => setPrice(num)}
            placeholder='Input Price...'
          />
          <Text>ZipCode</Text>
          <TextInput
            keyboardType={"number-pad"}
            value={zipcode}
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(num) => setZipcode(num)}
            placeholder='Input Price...'
          />
          <Text>Negotiable: {negotiable === 1 ? 'yes' : 'no'}</Text>
          <CheckBox style={{flex: 1, padding: 10}}
            value={negotiable > 0 ? true : false}
            onClick={()=> setNegotialbe(negotiable > 0 ? 0 : 1)}
            isChecked={negotiable}
            leftText={"Negotiable?"}
          />
          <Button color={'#3FC184'} title="Create Listing" onPress={() => {
            addPost(name, description, price, zipcode, negotiable)
            setName('');
            setDescription('');
            setPrice(0);
            setZipcode(0);
            setNegotialbe(0);
            setImage('')
            console.log("listing created")}}
            />
          {/* <Button title="Show Listing" onPress={() => navigation.navigate('ShowListing', { idListing })} /> */}
      </ScrollView>
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
