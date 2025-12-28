import React from "react";
import {
  View,
  Text,
  FlatList,
  Pressable,
  Image,
  Dimensions,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
import { colors, spacing, text } from "../styles/theme";

type Props = NativeStackScreenProps<RootStackParamList, "Discovery">;

const { width } = Dimensions.get("window");
const CARD_WIDTH = width - spacing.lg * 2;
const CARD_HEIGHT = CARD_WIDTH * 1.35;

const PROFILES = [
  {
    id: "1",
    name: "Alex",
    bio: "Open-minded · London",
    image: require("../../assets/alex.jpg"),
  },
  {
    id: "2",
    name: "Sam",
    bio: "Curious · Bristol",
    image: require("../../assets/sam.jpg"),
  },
  {
    id: "3",
    name: "Jamie",
    bio: "Creative · Manchester",
    image: require("../../assets/jamie.jpg"),
  },
];

export default function DiscoveryScreen({ navigation }: Props) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: undefined,
      headerRight: () => (
        <Pressable
          testID="open-likes"
          accessibilityLabel="open-likes"
          accessible
          accessibilityRole="button"
          onPress={() => navigation.navigate("Likes")}
          style={{ paddingRight: spacing.md }}
        >
          <Text style={{ color: colors.primary, fontSize: 16 }}>Likes</Text>
        </Pressable>
      ),
    });
  }, [navigation]);

  return (
    <View
      testID="discovery-screen"
      accessibilityLabel="discovery-screen"
      accessible
      style={{ flex: 1, backgroundColor: colors.background }}
    >
      <FlatList
        data={PROFILES}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          padding: spacing.lg,
          paddingBottom: spacing.xl,
        }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Pressable
            testID={`profile-card-${item.id}`}
            accessibilityLabel={`profile-card-${item.id}`}
            accessible
            accessibilityRole="button"
            onPress={() =>
              navigation.navigate("Profile", {
                profileId: item.id,
              })
            }
            style={{
              width: CARD_WIDTH,
              height: CARD_HEIGHT,
              borderRadius: 28,
              marginBottom: spacing.xl,
              overflow: "hidden",
              backgroundColor: "#000",
            }}
          >
            <Image
              source={item.image}
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
              }}
              resizeMode="cover"
            />

            <View
              style={{
                position: "absolute",
                bottom: 0,
                width: "100%",
                padding: spacing.md,
                backgroundColor: "rgba(0,0,0,0.45)",
              }}
            >
              <Text style={[text.title, { color: "#FFF", fontSize: 22 }]}>
                {item.name}
              </Text>
              <Text
                style={{
                  color: "#E5E5E5",
                  marginTop: 4,
                }}
              >
                {item.bio}
              </Text>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
}
