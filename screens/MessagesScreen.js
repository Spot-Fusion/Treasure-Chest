import * as React from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import CustomHeadet from '../components/customHeader';

const MessagesScreen = ({ navigation }) => {
  const [users, setUsers] = React.useState([]);

  const getUsers = async (id) => {
    let users = await axios.get(`http://10.0.2.2:8080/message/users/${id}`)
    setUsers(users.data);
  }

  const getId = async (email) => {
    let user = await axios.get(`http://10.0.2.2:8080/user/${email}`)
    console.log('id:',user.data.id);
    return user.data.id
  }

  const navigate = async (email) => {
    await navigation.navigate('ChatScreen', { id_recipient: await getId(email) })
  }

  React.useEffect(() => {
    getUsers(global.id)
    let interval = setInterval(() => { getUsers(global.id) }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <CustomHeader navigation={navigation} title="Messages" />
      <Button title="Go back" onPress={() => !navigation.goBack() ? navigation.navigate('Home') : navigation.goBack()} />
      {!!users.length && users.map((user) => (<OptionButton
        key={user.id_message}
        icon="md-contact"
        label={`${user.name} ${user.text}`}
        onPress={() => navigate(user.email)}
      />))}
    </ScrollView>
  );
}

function OptionButton({ icon, label, onPress, isLastOption }) {
  return (
    <RectButton style={[styles.option, isLastOption && styles.lastOption]} onPress={onPress}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.optionIconContainer}>
          <Ionicons name={icon} size={22} color="rgba(0,0,0,0.35)" />
        </View>
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionText}>{label}</Text>
        </View>
      </View>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
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
