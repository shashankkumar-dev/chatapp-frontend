import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import TweetList from "./TweetList";
import ChatScreen from "./ChatScreen";
import ProfileScreen from "./ProfileScreen";
import EditProfileScreen from "./EditProfileScreen";

const Tab = createBottomTabNavigator();

const BottomTab = () => {
    return (
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color, size }) => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = 'home';
                        } else if (route.name === 'Search') {
                            iconName = 'search';
                        } else if (route.name === 'Notifications') {
                            iconName = 'notifications';
                        } else if (route.name === 'Messages') {
                            iconName = 'mail';
                        } else if (route.name === 'Profile') {
                            iconName = 'person';
                        }

                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    "tabBarActiveTintColor": "blue",
                    "tabBarInactiveTintColor": "gray",
                    "tabBarStyle": [
                        {
                            "display": "flex"
                        },
                        null
                    ],
                    tabBarLabel: '', // Set tabBarLabel to an empty string
                })}
            >
                <Tab.Screen name="Home" component={TweetList} />
                <Tab.Screen name="Search" component={TweetList} />
                <Tab.Screen name="Notifications" component={EditProfileScreen} />
                <Tab.Screen name="Messages" component={ChatScreen} />
                <Tab.Screen name="Profile" component={ProfileScreen} />
            </Tab.Navigator>
    );
};

export default BottomTab;
