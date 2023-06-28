import React, { Component } from 'react';
import axiosInstance from './axiosInstance';
import { TWEET_URL } from "../config";
import { StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';
import TweetItem from './TweetItem';
import Icon from 'react-native-vector-icons/FontAwesome';
import { navigate } from './navigation';


class TweetList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tweets: [],
        };
    }

    componentDidMount() {
        this.fetchTweets().then(() => console.log('Tweets fetched'));
    }

    fetchTweets = async () => {
        try {
            const response = await axiosInstance.get(TWEET_URL);
            const data = response.data;
            console.log('Tweets:', data)
            this.setState({ tweets: data });
        } catch (error) {
            console.error('Error fetching tweets:', error);
        }
    };

    renderTweetItem = ({ item }) => <TweetItem item={item} />;

    onClickPencil = () => {
        navigate('Compose');
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.tweets}
                    renderItem={this.renderTweetItem}
                    keyExtractor={(item) => item._id}
                />

                <TouchableOpacity style={styles.favoriteIconContainer}>
                    <Icon name="pencil" size={25} color="white" onPress={this.onClickPencil} />
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    favoriteIconContainer: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: '#1DA1F2',
        borderRadius: 20,
        padding: 10,
    },
});

export default TweetList;
