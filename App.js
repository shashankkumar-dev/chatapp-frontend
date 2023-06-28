import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ComposeTweetScreen from "./components/ComposeTweetScreen";
import LoginScreen from "./components/LoginScreen";
import SignUpScreen from "./components/SignUpScreen";
import {setNavigator} from "./components/navigation";
import BottomTab from "./components/BottomTab";
import EditProfileScreen from "./components/EditProfileScreen";

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer ref={setNavigator}>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="SignUp" component={SignUpScreen} />
                <Stack.Screen name="Compose" component={ComposeTweetScreen} />
                <Stack.Screen name="EditProfile" component={EditProfileScreen} />

                <Stack.Screen name="Tab" component={BottomTab} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
