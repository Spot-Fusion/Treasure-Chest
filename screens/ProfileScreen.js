import * as React from 'react';
import { StyleSheet, View, TextInput, Text, Button, Alert, Image, FlatList, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import CustomHeader from '../components/CustomHeader';
import ExpoImagePicker from '../components/ExpoImagePicker';
import axios from 'axios';

 const ProfileScreen = ({navigation, route}) => {
   const [userName, setUserName] = React.useState(global.name);
   const [description, setDescription] = React.useState(global.image);
   const [image, setImage] = React.useState('');
   const [edit, setEdit] = React.useState(false);
   const [sellList, setSellList] = React.useState([]);
   const [soldList, setSoldList] = React.useState([]);
   const [favList, setFavList] = React.useState([]);
   const [show, setShow] = React.useState(0)

   let url = '10.0.2.2'; 
  
   const getProfile = async (id) => {
    await axios.get(`http://${url}:8080/user/id/${id}`)
      .then(post => {
        // console.log(post);
        setUserName(post.data.name)
        setDescription(post.data.bio)
        setImage(post.data.icon)
      })
      .catch(e => console.error(e));
  }
  const patchProfile = async (id, name, bio, icon) => {
   let post = await axios.post(`http://${url}:8080/user/update/${id}`, { name, bio, icon, id})
   setUserName(post.data.name)
   setDescription(post.data.bio)
   setImage(post.data.icon)
  }

  const getSellListings = async (id) => {
    await axios.get(`http://${url}:8080/listing/user/${id}/0`)
      .then(post => setSellList(post.data))
      .catch(e => console.error(e));
   }

   const getSoldListings = async (id) => {
    await axios.get(`http://${url}:8080/listing/user/${id}/1`)
      .then(post => setSoldList(post.data))
      .catch(e => console.error(e));
   }

   const getFavListings = async (id) => {
    await axios.get(`http://${url}:8080/favorite/${id}`)
      .then(post => {
        console.log(post.data)
        setFavList(post.data)
      })
      .catch(e => console.error(e));
   }

  const chooseImage = (img) => {
    setImage('' + img);
    console.log(`This is chosen: ${img}`);
  };

  let idUser = route.params === undefined ? global.id || 1 : route.params.id;
  React.useEffect(() =>{
    getProfile(idUser)
    getSellListings(idUser)
    getSoldListings(idUser)
    getFavListings(idUser)
  }, [])

  // let sellList = listings.filter((e) => e.seller === userName && e.archived === 0); 
  // let soldList = listings.filter(e => e.seller === userName && e.archived === 1);
  // let DATA = listings.filter(e => e.seller !== userName);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
    <CustomHeader navigation={navigation} title="Profile" />
      <View style={{flexDirection: 'row'}}>
        <Image
          style={{ margin: 30, height: 150, width: 150, borderRadius: 35, resizeMode: "contain" }}
          source={{ uri: image === '' ? "http://pngimg.com/uploads/tiger/tiger_PNG23245.png" : image }}
        />
        <View>
          {edit ? <ExpoImagePicker chooseImage={chooseImage}/> : null}
          <Text style={{marginVertical: 25 ,fontSize: 24}} >{userName}</Text>
          { edit ? <TextInput
            value={userName}
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(text) => setUserName(text)}
            placeholder='Input User Name...'
          /> : null}
          {route.params ? 
            <TouchableOpacity style={{width: 125,
              height: 35,
              borderRadius: 5,
              backgroundColor: '#3FC184',
              marginRight: 15,}} 
              onPress={() => navigation.navigate('ChatScreen', { id_recipient: route.params.id })}>
                <Text style={{alignSelf:'center', marginTop:6 }}>Message</Text>
                </TouchableOpacity>
              : 
            <TouchableOpacity style={{width: 125,
              height: 35,
              borderRadius: 5,
              backgroundColor: '#3FC184',
              marginRight: 15,}} 
              onPress={() => setEdit(!edit)}>
                <Text style={{alignSelf:'center', marginTop:6 }}>Edit Profile</Text>
            </TouchableOpacity> }
        </View>
      </View>
      <View style={{marginHorizontal: 30}}>
          <Text style={{fontSize: 18}}>{description || 'no bio'}</Text>
          { edit ? <TextInput
            multiline
            value={description}
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(text) => setDescription(text)}
            placeholder='Input Description...'
          /> : null}          
          {edit ? <TouchableOpacity onPress={() => {
            patchProfile(idUser, userName, description, image);
            // getProfile(idUser);
            setEdit(false);
          }}>
            <Text>Update Profile</Text>
          </TouchableOpacity> : null}
      </View>
      <View style={{marginHorizontal: '10%', flexDirection: 'row',}}>
        <TouchableOpacity onPress={() => setShow(0)} style={{padding: 20}}><Text>Selling</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => setShow(1)} style={{padding: 20}}><Text>Sold</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => setShow(2)} style={{padding: 20}}><Text>Favorites</Text></TouchableOpacity>
      </View>
      { show === 0 ? <FlatList
          data={sellList}
          renderItem={({ item }) => <TouchableOpacity style={{alignContent: 'center'}} 
          onPress={() => navigation.navigate('ShowListing', { idListing: item.id })}>
            {/* <Ionicons name="md-image" size={50} color='gray' /> */}
            <ImageBackground style={{padding: 10, height: 100, width: 100, position: 'relative'}} source={{ uri: item.image }}>
              <Text style={{ position: 'absolute', bottom: 0, left: 0, backgroundColor: 'gray', color: '#F1F3F5', }}>{`$${item.price}`}</Text>
            </ImageBackground>
            </TouchableOpacity>}
          keyExtractor={item => item.id.toString()}
        /> : null}
        {show === 1 ? <FlatList
          data={soldList}
          renderItem={({ item }) => <TouchableOpacity style={{alignContent: 'center'}} 
          onPress={() => navigation.navigate('ShowListing', { idListing: item.id })}>
            {/* <Ionicons name="md-image" size={50} color='gray' /> */}
            <ImageBackground style={{padding: 10, height: 100, width: 100, position: 'relative'}} source={{ uri: item.image }}>
              <Text style={{ position: 'absolute', bottom: 0, left: 0, backgroundColor: 'gray', color: '#F1F3F5', }}>{`$${item.price}`}</Text>
            </ImageBackground>
            </TouchableOpacity>}
          keyExtractor={item => item.id.toString()}
        /> : null}
        {show === 2 ? <FlatList
          data={favList}
          renderItem={({ item }) => <TouchableOpacity style={{alignContent: 'center'}} 
          onPress={() => navigation.navigate('ShowListing', { idListing: item.id_listing })}>
            {/* <Ionicons name="md-image" size={50} color='gray' /> */}
            <ImageBackground style={{padding: 10, height: 100, width: 100, position: 'relative'}} source={{ uri: item.image }}>
              <Text style={{ position: 'absolute', bottom: 0, left: 0, backgroundColor: 'gray', color: '#F1F3F5', }}>{`$${item.price}`}</Text>
            </ImageBackground>
            </TouchableOpacity>}
          keyExtractor={item => item.id_listing.toString()}
        /> : null}
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    alignContent: 'center',
    // justifyContent: 'center'
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

export default ProfileScreen;
