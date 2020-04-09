import * as React from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RectButton, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import CustomHeader from '../components/CustomHeader';

const MessagesScreen = ({ navigation }) => {
  const [users, setUsers] = React.useState([]);

  let url = '10.0.2.2';

  const getUsers = async (id) => {
    let users = await axios.get(`http://${url}:8080/message/users/${id}`)
    // console.log(users.data);
    setUsers(users.data);
  }

  const getId = async (email) => {
    let user = await axios.get(`http://${url}:8080/user/${email}`)
    console.log('id:', user.data);
    return user.data.id
  }

  const navigate = async (email) => {
    await navigation.navigate('ChatScreen', { id_recipient: await getId(email) })
  }

  let idUser = global.id || 1
  React.useEffect(() => {
    getUsers(idUser)
    // let interval = setInterval(() => { getUsers(idUser) }, 1000);
    // return () => clearInterval(interval);
  }, []);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <CustomHeader navigation={navigation} title="Messages"/>
      {/* <Button color={'#3FC184'} title="Go back" onPress={() => !navigation.goBack() ? navigation.navigate('Home') : navigation.goBack()} /> */}
      {!!users.length && users.map((user) => (<OptionButton
        navigation={navigation}
        key={user.id_message}
        idUser={user.id}
        icon={user.icon}
        name={`${user.name}`}
        text={`${user.text}`}
        onPress={() => navigate(user.email)}
      />))}
    </ScrollView>
  );
}

function OptionButton({ icon, label, onPress, isLastOption, idUser, navigation, name, text }) {
  return (
    <RectButton style={[styles.option, isLastOption && styles.lastOption]} onPress={onPress}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.optionIconContainer}>
          {/* <Ionicons name={icon} size={22} color="rgba(0,0,0,0.35)" /> */}
          {/* <TouchableOpacity onPress={() => navigation.navigate('Profile', {id: idUser})}> */}
          <Image
          style={{padding: 10, height: 36, width: 36, borderRadius: 18, resizeMode: "contain" }}
          source={{ uri: icon === '' ? "http://pngimg.com/uploads/tiger/tiger_PNG23245.png" : icon }} />
          {/* </TouchableOpacity> */}
        </View>
        <View style={styles.optionTextContainer}>
          <Text style={[styles.optionText, {fontWeight: 'bold'}]}>{name}</Text>
          <Text style={styles.optionText}>{text}</Text>
        </View>
      </View>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    marginTop: 9,
  },
  contentContainer: {
    paddingTop: 15,
  },
  optionIconContainer: {
    marginRight: 12,
  },
  option: {
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
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
});

export default MessagesScreen;
