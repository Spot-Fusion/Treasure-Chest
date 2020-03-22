import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import ChatScreen from './ChatScreen'

 const MessagesScreen = ({ id, navigation}) => {
   const [users, setUsers] = React.useState([
     {user: 'ben', message: 'Wadup, dude?', created_at: '2/3/20'},
     {user: 'jill', message: 'Hello', created_at: '2/12/20'},
     {user: 'steve', message: 'What?', created_at: '2/29/20'}, 
   ]);

   const getUsers = async (id) => {
    axios.get({app})
   }

   React.useEffect(() => {

   }, [])

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Button title="Go back" onPress={() => !navigation.goBack() ? navigation.navigate('Home') : navigation.goBack()} />
      {users.map((user) => (<OptionButton
        icon="md-contact"
        label={`${user.user} ${user.message} ${user.created_at}`}
        onPress={() => navigation.navigate(ChatScreen, {users, id})}
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
