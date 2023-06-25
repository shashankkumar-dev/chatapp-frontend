import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { styles } from './styles';

export default function ChatInput({ userId, socket }) {
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    if (message.trim() !== '') {
        console.log('Sending message:', message);
        const msgId = Math.random().toString(16).slice(2);
        socket.emit('sendMessage', { msgId: msgId, userId: userId, text: message });
        setMessage('');
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        value={message}
        onChangeText={setMessage}
        placeholder="Type a message"
        autoCapitalize="none"
      />
      <Button onPress={sendMessage} title="Send" />
    </View>
  );
}
