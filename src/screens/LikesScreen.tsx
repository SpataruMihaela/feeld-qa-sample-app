import { View, Text, FlatList, Pressable, Image } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
import { useLikes } from "../context/LikesContext";
import { colors, spacing, text } from "../styles/theme";

type Props = NativeStackScreenProps<RootStackParamList, "Likes">;

const PROFILES = [
  { id: "1", name: "Alex", image: require("../../assets/alex.jpg") },
  { id: "2", name: "Sam", image: require("../../assets/sam.jpg") },
  { id: "3", name: "Jamie", image: require("../../assets/jamie.jpg") },
];

export default function LikesScreen({ navigation }: Props) {
  const { likedProfiles } = useLikes();

  const resolveProfile = (id: string) => PROFILES.find((p) => p.id === id);

  return (
    <View
      style={{ flex: 1, backgroundColor: "#F6F5FF" }}
      accessibilityLabel="likes_screen"
      accessible
    >
      <View style={{ padding: spacing.lg }}>
        <Text accessibilityLabel="likes_title" style={text.title}>
          Likes
        </Text>
        <Text style={{ color: colors.textSecondary, marginTop: 4 }}>
          Profiles you liked
        </Text>
      </View>

      {likedProfiles.length === 0 ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          accessibilityLabel="likes_empty_state"
          accessible
        >
          <Text style={{ color: colors.textSecondary }}>No likes yet</Text>
        </View>
      ) : (
        <FlatList
          accessibilityLabel="likes_list"
          data={likedProfiles}
          keyExtractor={(id) => id}
          contentContainerStyle={{
            paddingHorizontal: spacing.lg,
            paddingBottom: spacing.xl,
          }}
          renderItem={({ item }) => {
            const profile = resolveProfile(item);
            if (!profile) return null;

            return (
              <Pressable
                accessibilityLabel={`liked_profile_${profile.name.toLowerCase()}`}
                accessibilityHint="Tap to open profile"
                accessible
                onPress={() =>
                  navigation.navigate("Profile", {
                    profileId: profile.id,
                  })
                }
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: "#FFF",
                  borderRadius: 22,
                  padding: spacing.md,
                  marginBottom: spacing.md,
                }}
              >
                <Image
                  source={profile.image}
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 28,
                    marginRight: spacing.md,
                  }}
                />

                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 16, fontWeight: "600" }}>
                    {profile.name}
                  </Text>
                  <Text
                    style={{
                      color: colors.textSecondary,
                      marginTop: 2,
                    }}
                  >
                    Tap to view profile
                  </Text>
                </View>
              </Pressable>
            );
          }}
        />
      )}
    </View>
  );
}
