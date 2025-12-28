import { View, Text, Image, Pressable, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useProfile } from "../context/ProfileContext";

export default function MyProfileScreen() {
  const navigation = useNavigation();
  const { name, bio, imageUri, updateImage } = useProfile();

  const DEFAULT_IMAGE = require("../../assets/me.jpg");

  const changePhoto = () => {
    Alert.alert("Change photo", "", [{ text: "Cancel", style: "cancel" }]);
  };

  const resolvedImage = imageUri ? { uri: imageUri } : DEFAULT_IMAGE;

  const imageAccessibilityLabel = imageUri
    ? "profile-image-custom"
    : "profile-image-default";

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        paddingTop: 40,
        backgroundColor: "#fff",
      }}
    >
      <Pressable
        testID="change-profile-photo"
        accessibilityLabel="change-profile-photo"
        onPress={changePhoto}
      >
        <View>
          <Image
            testID="my-profile-image"
            accessibilityLabel={imageAccessibilityLabel}
            source={resolvedImage}
            style={{
              width: 160,
              height: 160,
              borderRadius: 80,
            }}
          />

          <View
            style={{
              position: "absolute",
              bottom: 6,
              right: 6,
              width: 36,
              height: 36,
              borderRadius: 18,
              backgroundColor: "#6D5DF6",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "#fff", fontSize: 22 }}>+</Text>
          </View>
        </View>
      </Pressable>

      <Text
        testID="my-profile-name"
        accessibilityLabel="my-profile-name"
        style={{ fontSize: 28, fontWeight: "600", marginTop: 20 }}
      >
        {name}
      </Text>

      <Text
        testID="my-profile-bio"
        accessibilityLabel="my-profile-bio"
        style={{ marginTop: 6, color: "#777", fontSize: 16 }}
      >
        {bio}
      </Text>

      <Pressable
        testID="open-edit-profile"
        accessibilityLabel="open-edit-profile"
        onPress={() => navigation.navigate("EditProfile" as never)}
        style={{
          marginTop: 40,
          width: "85%",
          paddingVertical: 16,
          borderRadius: 30,
          backgroundColor: "#6D5DF6",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "#fff", fontSize: 18, fontWeight: "600" }}>
          Edit profile
        </Text>
      </Pressable>
    </View>
  );
}
