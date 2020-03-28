import * as React from 'react';
import { StyleSheet, View, TextInput, Text, Button, Alert, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import CustomHeader from '../components/CustomHeader';
import ExpoImagePicker from '../components/ExpoImagePicker';
import axios from 'axios';

 const ProfileScreen = ({navigation}) => {
   const [userName, setUserName] = React.useState(global.name);
   const [email, setEmail] = React.useState(global.email);
   const [description, setDescription] = React.useState(global.image);
   const [image, setImage] = React.useState('');
   const [edit, setEdit] = React.useState(false);
  
   const getProfile = async (id) => {
    await axios.get(`http://10.0.2.2:8080/user/id/${id}`)
      .then(post => {
        console.log(post);
        setUserName(post.data.name)
        setEmail(post.data.email)
        setDescription(post.data.bio)
        setImage(post.data.icon)
      })
      .catch(e => console.error(e));
  }
  const patchProfile = async (id, name, bio, icon) => {
   let post = await axios.post(`http://10.0.2.2:8080/user/update/${id}`, { name, bio, icon, id})
   setUserName(post.data.name)
   setEmail(post.data.email)
   setDescription(post.data.bio)
   setImage(post.data.icon)
  }

  let idUser = global.id;
  React.useEffect(() =>{
    getProfile(idUser)
  }, [])
   
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
    <CustomHeader navigation={navigation} title="Profile" />
      <Button title="Go back" onPress={() => !navigation.goBack() ? navigation.navigate('Home') : navigation.goBack()} />
      <Image
          style={{ height: 70, width: 70, borderRadius: 35, resizeMode: "contain" }}
          source={{ uri: image === '' ? "http://pngimg.com/uploads/tiger/tiger_PNG23245.png" : image }} />
      <View style={styles.view}>
      <Button title="Edit Profile" onPress={() => setEdit(!edit)} />
        <ExpoImagePicker />
          <Text style={styles.text}>Profile</Text>
          <Text>User Name: {userName}</Text>
          { edit ? <TextInput
            value={userName}
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(text) => setUserName(text)}
            placeholder='Input User Name...'
          /> : null}
          {/* <Text>Email: {email}</Text> */}
          {/* { edit ? <TextInput
            value={email}
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(text) => setEmail(text)}
            placeholder='Input Email...'
          /> : null} */}
          <Text>Description: {description}</Text>
          { edit ? <TextInput
            multiline
            value={description}
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(text) => setDescription(text)}
            placeholder='Input Description...'
          /> : null}          
          <TouchableOpacity onPress={() => {
            patchProfile(idUser, userName, description, image);
            // getProfile(idUser);
            setEdit(false);
          }}>
            <Text>Update Profile</Text>
          </TouchableOpacity>
      </View>
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
