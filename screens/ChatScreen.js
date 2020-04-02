import * as React from 'react';
import axios from 'axios';
import { StyleSheet, Text, TextInput, View, Button, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RectButton, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

const ChatScreen = ({ route, navigation }) => {
  const { id_recipient } = route.params;
  const [messages, setMessages] = React.useState([]);
  const [input, setInput] = React.useState('');
  const [recipient, setRecipient] = React.useState({});

  let url = '10.0.2.2';

  const getMessages = async (id_user, id_recipient) => {
    let messages = await axios.get(`http://${url}:8080/message/${id_user}/${id_recipient}`)
    console.log(messages.data);
    setMessages(messages.data);
  }
 
  const getRecipient = async (id) => {
    await axios.get(`http://${url}:8080/user/id/${id}`)
      .then(post => {
        console.log(post);
        setRecipient(post.data);
      })
      .catch(e => console.error(e));
  }

  const sendMessage = async (id_user, id_recipient, text) => {
    await axios.post(`http://${url}:8080/message/${id_user}/${id_recipient}`, { text });
    await getMessages(id_user, id_recipient);
    setInput('');
  }
  
  let idUser = global.id || 1;
  React.useEffect(() => {
    getMessages(idUser, id_recipient);
    getRecipient(id_recipient);
    // let interval = setInterval(() => { getMessages(idUser, id_recipient) }, 1000);
    // return () => clearInterval(interval);
  }, []);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={{fontSize: 20}}>Go Back</Text>
      </TouchableOpacity>
      {/* <Button title="Go back" onPress={() => navigation.goBack()} /> */}
      <View style={styles.view}>
        {messages.map((message) => (<OptionButton
          key={message.id_message}
          navigation={navigation}
          idRecipient={recipient.id}
          idSender={message.id_sender}
          icon={recipient.icon}
          label={`${message.text}`}
        />))}
      </View>
      <TextInput
        autoCorrect={false}
        style={styles.input}
        value={input}
        onChangeText={(val) => setInput(val)}
        onSubmitEditing={() => {
          sendMessage(idUser, id_recipient, input);
          getMessages(idUser, id_recipient)
          setInput('');
        }}
      />
    </ScrollView>
  );
}

function OptionButton({ icon, label, onPress, isLastOption, idRecipient, idSender, navigation }) {
  return (
    <RectButton style={[styles.option, isLastOption && styles.lastOption]} onPress={onPress}>
      <View style={{ flexDirection: 'row' }}>        
          {/* <Ionicons name={icon} size={22} color="rgba(0,0,0,0.35)" /> */}
          {idRecipient === idSender ? 
          <View style={[styles.optionIconContainer, {flex: 1, flexDirection: 'row'}]} >
            <TouchableOpacity onPress={() => navigation.navigate('Profile', {id: idRecipient})} >
              <Image
              style={{padding: 10, height: 30, width: 30, borderRadius: 15, resizeMode: "contain" }}
              source={{ uri: icon }} />
            </TouchableOpacity> 
          {/* </View>
          <View style={styles.optionTextContainer}> */}
            <Text style={[styles.text, {backgroundColor: '#B4EDD2', marginLeft: 10}]}>{label}</Text>
          </View> 
          : <View style={[styles.optionTextContainer, {flex: 1, flexDirection: 'row-reverse'}]}>
        <Text style={[styles.text, {backgroundColor: '#1084ff', color: '#F1F3F5', alignSelf: 'flex-end', marginRight: 10}]}>{label}</Text>
      </View>}
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
    maxWidth: 250,
   paddingHorizontal: 10,
   paddingTop: 10,
   paddingBottom: 10,
   borderRadius: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#A9A9A9',
    padding: 8,
  }
});

export default ChatScreen;
