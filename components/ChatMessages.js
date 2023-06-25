import React, { useState, useEffect, useRef } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { styles } from './styles';

export default function ChatMessages({ userId, socket }) {
  const [messages, setMessages] = useState([]);
  const scrollViewRef = useRef();

  useEffect(() => {
    socket.on('receiveMessage', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
      scrollToBottom();
    });
  }, []);

  const scrollToBottom = () => {
    scrollViewRef.current.scrollToEnd({ animated: true });
  };

  return (
    <ScrollView
      contentContainerStyle={styles.scrollViewContent}
      ref={scrollViewRef}
      onContentSizeChange={scrollToBottom}
    >
      {messages.map((item) => {
        const isCurrentUser = item.userId === userId;
        const containerStyle = isCurrentUser
          ? [styles.messageContainer, styles.alignRight]
          : [styles.messageContainer, styles.alignLeft];
        const textStyle = styles.messageText;

        return (
          <View style={containerStyle} key={item.msgId}>
            <Text style={textStyle}>
              {isCurrentUser ? 'You' : item.userId}: {item.text}
            </Text>
          </View>
        );
      })}
    </ScrollView>
  );
}
