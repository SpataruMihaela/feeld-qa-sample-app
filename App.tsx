import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WelcomeScreen from "./src/screens/WelcomeScreen";
import DiscoveryScreen from "./src/screens/DiscoveryScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import LikesScreen from "./src/screens/LikesScreen";
import SettingsScreen from "./src/screens/SettingsScreen";
import MyProfileScreen from "./src/screens/MyProfileScreen";
import EditProfileScreen from "./src/screens/EditProfileScreen";

import { LikesProvider } from "./src/context/LikesContext";
import { ProfileProvider } from "./src/context/ProfileContext";
import { UserProvider } from "./src/context/UserContext";

export type RootStackParamList = {
  Welcome: undefined;
  Discovery: undefined;
  Profile: { profileId: string };
  Likes: undefined;
  Settings: undefined;
  MyProfile: undefined;
  EditProfile: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <UserProvider>
      <LikesProvider>
        <ProfileProvider>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Welcome">
              <Stack.Screen
                name="Welcome"
                component={WelcomeScreen}
                options={{ title: "" }}
              />
              <Stack.Screen name="Discovery" component={DiscoveryScreen} />
              <Stack.Screen name="Profile" component={ProfileScreen} />
              <Stack.Screen name="Likes" component={LikesScreen} />
              <Stack.Screen
                name="MyProfile"
                component={MyProfileScreen}
                options={{ title: "My Profile" }}
              />
              <Stack.Screen
                name="EditProfile"
                component={EditProfileScreen}
                options={{ title: "Edit Profile" }}
              />
              <Stack.Screen name="Settings" component={SettingsScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </ProfileProvider>
      </LikesProvider>
    </UserProvider>
  );
}
