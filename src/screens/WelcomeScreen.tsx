import React from "react";
import { View, Text, Pressable, ImageBackground } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
import { colors, spacing, text } from "../styles/theme";
import { useUser } from "../context/UserContext";

type Props = NativeStackScreenProps<RootStackParamList, "Welcome">;

export default function WelcomeScreen({ navigation }: Props) {
  const { user } = useUser();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
      headerRight: () => (
        <Pressable
          testID="open-my-profile"
          accessibilityLabel="open-my-profile"
          accessibilityRole="button"
          accessible
          onPress={() => navigation.navigate("MyProfile")}
          style={{ marginRight: spacing.md }}
        >
          <View
            style={{
              width: 36,
              height: 36,
              borderRadius: 18,
              backgroundColor: colors.primary,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              testID="avatar-initial"
              accessibilityLabel="avatar-initial"
              style={{ color: "#FFF", fontWeight: "600" }}
            >
              {user.name.charAt(0).toUpperCase()}
            </Text>
          </View>
        </Pressable>
      ),
    });
  }, [navigation, user.name]);

  return (
    <View
      style={{ flex: 1 }}
      testID="welcome-screen"
      accessibilityLabel="welcome-screen"
      accessible
    >
      <ImageBackground
        source={require("../../assets/welcome-bg.jpg")}
        style={{ flex: 1 }}
        resizeMode="cover"
      />

      <View
        style={{
          padding: spacing.lg,
          backgroundColor: colors.background,
        }}
      >
        <Text
          accessibilityLabel="welcome-title"
          accessible
          style={[
            text.title,
            {
              textAlign: "center",
              marginBottom: spacing.lg,
            },
          ]}
        >
          Welcome
        </Text>

        <Pressable
          testID="welcome_continue"
          accessibilityLabel="welcome_continue"
          accessibilityRole="button"
          accessible
          onPress={() => navigation.navigate("Discovery")}
          style={{
            backgroundColor: colors.primary,
            paddingVertical: spacing.md,
            borderRadius: 24,
            marginBottom: spacing.md,
          }}
        >
          <Text
            style={{
              color: "#FFF",
              textAlign: "center",
              fontSize: 16,
              fontWeight: "600",
            }}
          >
            Start Discovering
          </Text>
        </Pressable>

        <Pressable
          testID="open-settings"
          accessibilityLabel="open-settings"
          accessibilityRole="button"
          accessible
          onPress={() => navigation.navigate("Settings")}
          style={{
            backgroundColor: "transparent",
            paddingVertical: spacing.md,
            borderRadius: 24,
            borderWidth: 2,
            borderColor: colors.primary,
          }}
        >
          <Text
            style={{
              color: colors.primary,
              textAlign: "center",
              fontSize: 16,
              fontWeight: "600",
            }}
          >
            Settings
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
