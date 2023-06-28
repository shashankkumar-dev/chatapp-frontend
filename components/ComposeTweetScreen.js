import React, { useState } from 'react';
import {TWEET_URL} from '../config.js';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import axiosInstance from "./axiosInstance";

const userID = '5f9f7b7b1c9d440000b0b9a0';

const ComposeTweetScreen = () => {
    const [tweetContent, setTweetContent] = useState('');

    const handleTweetSubmit = async () => {
        try {
            const response = await axiosInstance.post(TWEET_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: {
                    messageID: '5f9f7b7b1c9d440000b0b9a0',
                    handle: userID,
                    content: tweetContent
                },
            });

            if (response.status === 200) {
                setTweetContent('');
                console.log('Tweet submitted!');
            } else {
                console.error('Failed to submit tweet:', response.status);
            }
        } catch (error) {
            console.error('Error submitting tweet:', error);
        }
    };


    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="What's happening?"
                multiline
                value={tweetContent}
                onChangeText={setTweetContent}
            />
            <Button title="Tweet" onPress={handleTweetSubmit} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    input: {
        height: 150,
        marginBottom: 16,
        padding: 8,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 8,
    },
});

export default ComposeTweetScreen;
