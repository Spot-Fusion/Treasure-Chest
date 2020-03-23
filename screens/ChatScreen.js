import * as React from 'react';
import axios from 'axios';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

const ChatScreen = ({ route, navigation }) => {
  const { id_recipient } = route.params;
  const [messages, setMessages] = React.useState([]);
  const [input, setInput] = React.useState('');
  // const a = setInterval(() => { getMessages(1, id_recipient) }, 1000);

  const getMessages = async (id_user, id_recipient) => {
    let messages = await axios.get(`http://10.0.2.2:8080/message/${id_user}/${id_recipient}`)
    console.log(messages.data);
    setMessages(messages.data);
  }

  const sendMessage = async (id_user, id_recipient, text) => {
    await axios.post(`http://10.0.2.2:8080/message/${id_user}/${id_recipient}`, { text });
    await getMessages(id_user, id_recipient);
    await setInput('');
  }
  
  React.useEffect(() => {
    //replace with id_user, id_recipient
    getMessages(1, id_recipient)
    let interval = setInterval(() => { getMessages(1, id_recipient) }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <View style={styles.view}>
        {messages.map((message) => (<OptionButton
          key={message.id_message}
          icon="md-contact"
          label={`${message.sender} ${message.text}`}
        />))}
      </View>
      <TextInput
        style={styles.input}
        placeholder
        onChangeText={(val) => setInput(val)}
        onSubmitEditing={() => sendMessage(1, id_recipient, input)}
      />
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
  input: {
    borderWidth: 1,
    borderColor: '#A9A9A9',
    padding: 8,
  }
});

export default ChatScreen;
