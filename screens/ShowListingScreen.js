import * as React from 'react';
import { StyleSheet, View, TextInput, Text, Button, Image, TouchableOpacity, ScrollView } from 'react-native';
import axios from 'axios'
import StaticMap from './StaticMap';
import CustomHeader from '../components/CustomHeader';

 const ShowListingScreen = ({ navigation, route }) => {
   const defaultParams = {name: 'Jordans', description: 'Gunmetal Blue\nSize 13', price: 200.00, zipcode: 70116, negotiable: true, id: 14 }
   const { idListing } = !route.params ? defaultParams  : route.params ;
   const [post, setPost] = React.useState({})
   const [image, setImage] = React.useState('');
   const [favorited, setFavorited] = React.useState(true);
   const [favBtnColor, setBtnColor] = React.useState('#3FC184');
   const [favBtnText, setBtnText] = React.useState('Favorite');

   let url = '10.0.2.2';
   let idUser = global.id || 1;
  const getListing = async (id) => {
    await axios.get(`http://${url}:8080/listing/${id}`)
      .then(post => setPost(post.data))
      .catch(e => console.error(e));
  }

  const getImage = async (id) => {
    await axios.get(`http://${url}:8080/listing/${id}/images`)
      .then(post => {
        setImage(''  + post.data[0].image);
      })
      .catch(e => console.error(e));
  }

  const checkFavoriteListing = async (id) => {
    await axios.get(`http://${url}:8080/favorite/${idUser}/${id}`)
      .then(res => {
          setFavorited(res.data);
          if(res.data){
            setBtnColor('#ff5959');
            setBtnText('Unfavorite');
          }else{
            setBtnColor('#3FC184');
            setBtnText('Favorite');
          }
      })
      .catch(e => console.log(e));
  }

  const favoriteListing = async (id) => {
    if(favorited){
      await axios.delete(`http://${url}:8080/favorite/${idUser}/${id}`)
      .then(res => {
          setBtnColor('#3FC184');
          setBtnText('Favorite');
          checkFavoriteListing(idListing);
      })
      .catch(e => console.log(e));
    }else{
      await axios.post(`http://${url}:8080/favorite/${idUser}/${id}`)
      .then(res => {
          setBtnColor('#ff5959');
          setBtnText('Unfavorite');
          checkFavoriteListing(idListing);
      })
      .catch(e => console.log(e));
    }
  }

  const navigate = async (email) => {
    await navigation.navigate('ChatScreen', { id_recipient: post.id_seller })
  }

React.useEffect(() =>{
  getListing(idListing)
  getImage(idListing)
  checkFavoriteListing(idListing);

}, [])
const styles = StyleSheet.create({
  compartment:{
    marginVertical: 25,
  },
  image:{
    alignSelf: 'center',
    height: 200,
    width: 200,
  },
  info:{
    fontSize: 26,
    marginRight: '10%'
  },
  button1:{
    width: 125,
    height: 35,
    borderRadius: 5,
    backgroundColor: favBtnColor,
    marginRight: 15,
  },
  button2:{
    width: 125,
    height: 35,
    borderRadius: 5,
    backgroundColor: '#3FC184',
    marginRight: 15,
  }
});
const { name, description, price, zipcode} = post;
let map = <Text></Text>;
if(zipcode){
  map = <StaticMap zip={zipcode}></StaticMap>;
}

  return (
    <ScrollView style={styles.compartment}>
      <Image style={styles.image} source={{ uri: image }}/>
      <View style={{marginVertical: 15, marginHorizontal: 15, flexDirection: 'row'}}>
        <Text style={styles.info}>{name}</Text>
        <Text style={styles.info}>{`$${price}`}</Text>
      </View>
      <View style={{marginHorizontal: '15%', flexDirection: 'row',}}>
        <TouchableOpacity onPress={() => {favoriteListing(idListing)}} style={styles.button1}>
          <Text style={{alignSelf:'center', marginTop:6 }}>{favBtnText}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {navigate()}} style={styles.button2}>
          <Text style={{alignSelf:'center', marginTop:6 }}>Message</Text>
        </TouchableOpacity>
      </View>
        <Text style={{marginHorizontal: 30, marginVertical: 30, fontSize: 17}}>{description}</Text>
        <View style={{alignItems: 'center'}}>
          {map}
        </View>
    </ScrollView>
  );
}

export default ShowListingScreen;
