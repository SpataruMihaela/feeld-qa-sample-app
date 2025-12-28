import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import { useProfile } from "../context/ProfileContext";
import { useUser } from "../context/UserContext";
import { RootStackParamList } from "../../App";

type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "EditProfile"
>;

export default function EditProfileScreen() {
  const navigation = useNavigation<NavigationProp>();

  const { name, updateName } = useProfile();
  const { updateUser } = useUser();

  const [value, setValue] = useState(name);
  const [showSuccess, setShowSuccess] = useState(false);

  const save = () => {
    const newName = value.trim();

    if (!newName) {
      return;
    }

    updateName(newName);
    updateUser({ name: newName });
    setShowSuccess(true);
  };

  return (
    <View
      style={styles.container}
      testID="edit-profile-screen"
      accessibilityLabel="edit-profile-screen"
      accessible
    >
      <Text style={styles.label}>Name</Text>

      <TextInput
        testID="edit_name_input"
        accessibilityLabel="edit_name_input"
        accessible
        value={value}
        onChangeText={setValue}
        style={styles.input}
        placeholder="Your name"
      />

      <TouchableOpacity
        testID="save_profile_button"
        accessibilityLabel="save_profile_button"
        accessible
        style={styles.button}
        onPress={save}
      >
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>

      {showSuccess && (
        <Text
          testID="profile_update_success"
          accessibilityLabel="profile_update_success"
          accessible
          style={styles.success}
        >
          Name has been changed successfully
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
  },
  button: {
    marginTop: 24,
    backgroundColor: "#6D5DF6",
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  success: {
    marginTop: 16,
    color: "green",
    fontSize: 14,
    textAlign: "center",
  },
});
