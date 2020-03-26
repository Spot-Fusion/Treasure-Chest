import * as React from 'react';
import { StyleSheet, View, TextInput, Text, Button, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import CustomHeader from '../components/CustomHeader';
import ExpoImagePicker from '../components/ExpoImagePicker';

 const ProfileScreen = ({navigation}) => {
   const [userName, setUserName] = React.useState(global.name);
   const [email, setEmail] = React.useState(global.email)
   const [description, setDescription] = React.useState(global.image)

   let url = 'localhost' || '10.0.2.2';
   
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
    <CustomHeader navigation={navigation} title="Profile" />
      <Button title="Go back" onPress={() => !navigation.goBack() ? navigation.navigate('Home') : navigation.goBack()} />
      <View style={styles.view}>
      <Button title="Edit Profile" onPress={() => Alert.alert('Todo')} />
        <ExpoImagePicker />
          <Text style={styles.text}>Create Listing Screen Here</Text>
          <Text>User Name: {userName}</Text>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(text) => setUserName(text)}
            placeholder='Input User Name...'
          />
          <Text>Email: {email}</Text>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(text) => setEmail(text)}
            placeholder='Input Email...'
          />
          <Text>Description: {description}</Text>
          <TextInput
            multiline
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(text) => setDescription(text)}
            placeholder='Input Description...'
          />          
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
