import React from "react";
import { View, Text, Pressable, Switch } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
import { colors, spacing, text } from "../styles/theme";

type Props = NativeStackScreenProps<RootStackParamList, "Settings">;

export default function SettingsScreen({ navigation }: Props) {
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);

  const handleLogout = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Welcome" }],
    });
  };

  return (
    <View
      testID="settings-screen"
      accessibilityLabel="settings-screen"
      accessible
      style={{
        flex: 1,
        backgroundColor: colors.background,
        padding: spacing.lg,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: spacing.xl,
        }}
      >
        <Text style={text.subtitle}>Notifications</Text>

        <Switch
          testID="notifications-switch"
          accessibilityLabel="notifications-switch"
          value={notificationsEnabled}
          onValueChange={setNotificationsEnabled}
        />
      </View>

      <Pressable
        testID="logout-button"
        accessibilityLabel="logout-button"
        accessibilityRole="button"
        onPress={handleLogout}
        style={({ pressed }) => ({
          borderWidth: 1,
          borderColor: colors.primary,
          borderRadius: 14,
          paddingVertical: spacing.md,
          alignItems: "center",
          opacity: pressed ? 0.7 : 1,
        })}
      >
        <Text
          style={{
            color: colors.primary,
            fontSize: 16,
            fontWeight: "600",
          }}
        >
          Log out
        </Text>
      </Pressable>
    </View>
  );
}
