import React from 'react';
import io from 'socket.io-client';
import { styles } from './styles';
import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';
import { View } from 'react-native';


const socket = io('https://chatapp-r5ts.onrender.com/'); // Replace with your backend server URL
const userId = Math.random().toString(16).slice(2);

export default function ChatScreen() {
  return (
    <View style={styles.container}>
      <ChatMessages userId={userId} socket={socket} />
      <ChatInput userId={userId} socket={socket} />
    </View>
  );
}
