import { View, Text, Image, Pressable } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useLayoutEffect } from "react";
import { RootStackParamList } from "../../App";
import { useLikes } from "../context/LikesContext";

type Props = NativeStackScreenProps<RootStackParamList, "Profile">;

const PROFILES: Record<string, { name: string; image: any; bio: string }> = {
  "1": {
    name: "Alex",
    image: require("../../assets/alex.jpg"),
    bio: "Curious · Open-minded · Exploring",
  },
  "2": {
    name: "Sam",
    image: require("../../assets/sam.jpg"),
    bio: "Creative · Adventurous · Warm",
  },
  "3": {
    name: "Jamie",
    image: require("../../assets/jamie.jpg"),
    bio: "Artistic · Calm · Thoughtful",
  },
};

export default function ProfileScreen({ route, navigation }: Props) {
  const { profileId } = route.params;
  const { likeProfile, unlikeProfile, isLiked } = useLikes();

  const profile = PROFILES[profileId];
  const liked = isLiked(profileId);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: profile.name,
    });
  }, [navigation, profile.name]);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        paddingTop: 40,
        backgroundColor: "#fff",
      }}
    >
      <Image
        source={profile.image}
        style={{
          width: 160,
          height: 160,
          borderRadius: 80,
          marginBottom: 20,
        }}
      />

      <Text style={{ fontSize: 28, fontWeight: "600" }}>{profile.name}</Text>

      <Text
        style={{
          marginTop: 6,
          color: "#777",
          fontSize: 16,
        }}
      >
        {profile.bio}
      </Text>

      <Pressable
        testID="like-button"
        accessibilityLabel="like-button"
        accessibilityRole="button"
        onPress={() =>
          liked ? unlikeProfile(profileId) : likeProfile(profileId)
        }
        style={{
          marginTop: 40,
          width: "85%",
          paddingVertical: 16,
          borderRadius: 30,
          backgroundColor: liked ? "#ccc" : "#6D5DF6",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontSize: 18,
            fontWeight: "600",
          }}
        >
          {liked ? "Unlike" : "Like"}
        </Text>
      </Pressable>
    </View>
  );
}
