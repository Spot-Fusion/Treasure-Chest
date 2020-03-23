import * as React from 'react';
import { StyleSheet, View, TextInput, Text, Button, Alert } from 'react-native';
// import { Text, Button } from 'native-base'
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import ExpoCamera from '../components/ExpoCamera'
import CustomHeader from '../components/CustomHeader';

 const CreateListingScreen = ({navigation}) => {
   const [userName, setUserName] = React.useState('');
   const [description, setDescription] = React.useState('')

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
    <CustomHeader navigation={navigation} title="Profile" />
      <Button title="Go back" onPress={() => !navigation.goBack() ? navigation.navigate('Home') : navigation.goBack()} />
      <View style={styles.view}>
      <Button title="Edit Profile" onPress={() => Alert.alert('Todo')} />
        {/* <ExpoCamera /> */}
          <Text style={styles.text}>Create Listing Screen Here</Text>
          <Text>Title: {userName}</Text>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(text) => setUserName(text)}
            placeholder='Input Title...'
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

export default CreateListingScreen;
