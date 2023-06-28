import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const imageSrc = "https://www.pngitem.com/pimgs/m/661-6618266_avatar-icon-clipart-png-download-avatar-movie-face.png"

const TweetItem = ({item}) => {
    return (
        <View style={styles.tweetContainer}>
            <Image source={imageSrc} style={styles.avatar}/>
            <View style={styles.tweetContent}>
                <View style={styles.tweetHeader}>
                    <Text style={styles.username}>John Doe</Text>
                    <Text style={styles.handle}>@johndoe</Text>
                </View>
                <Text>{item.content}</Text>
                {item.image && <Image source={item.image} style={styles.image}/>}
                {item.video && <Video source={item.video} style={styles.video}/>}
                <View style={styles.actionsContainer}>
                    <Icon name="comment-o" size={20} color="gray" style={styles.actionIcon}/>
                    <Icon name="heart-o" size={20} color="gray" style={styles.actionIcon}/>
                    <Icon name="retweet" size={20} color="gray" style={styles.actionIcon}/>
                    <Icon name="share-square-o" size={20} color="gray" style={styles.actionIcon}/>
                </View>
            </View>
            <View style={styles.lineBreak}/>
        </View>
    );
};

const styles = StyleSheet.create({
    tweetContainer: {
        flexDirection: 'row',
        padding: 2,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    tweetContent: {
        flex: 1,
    },
    username: {
        fontWeight: 'bold',
        marginBottom: 5,
        marginRight: 5,
    },
    handle: {
        color: 'gray',
        marginBottom: 5,
    },
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
        marginBottom: 10,
    },
    video: {
        width: '100%',
        height: 200,
        marginBottom: 10,
    },
    lineBreak: {
        height: 10,
        backgroundColor: 'lightgray',
    },
    actionsContainer: {
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 4,
    },
    actionIcon: {
        marginRight: 10,
    },
    tweetHeader: {
        flexDirection: 'row',
    },
});

export default TweetItem;
