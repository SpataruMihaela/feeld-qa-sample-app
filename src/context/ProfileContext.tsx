import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type ProfileContextType = {
  name: string;
  bio: string;
  imageUri: string | null;
  updateName: (name: string) => void;
  updateImage: (uri: string) => void;
};

const STORAGE_KEY = "MY_PROFILE";

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export function ProfileProvider({ children }: { children: ReactNode }) {
  const [name, setName] = useState("You");
  const [bio] = useState("Curious · Open-minded · Exploring");
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const stored = await AsyncStorage.getItem(STORAGE_KEY);
        if (stored) {
          const parsed = JSON.parse(stored);
          if (parsed.name) setName(parsed.name);
          if (parsed.imageUri) setImageUri(parsed.imageUri);
        }
      } catch {}
      setLoaded(true);
    };

    loadProfile();
  }, []);

  const persist = async (data: { name?: string; imageUri?: string }) => {
    try {
      const current = await AsyncStorage.getItem(STORAGE_KEY);
      const parsed = current ? JSON.parse(current) : {};
      const updated = { ...parsed, ...data };
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch {}
  };

  const updateName = (newName: string) => {
    setName(newName);
    persist({ name: newName });
  };

  const updateImage = (uri: string) => {
    setImageUri(uri);
    persist({ imageUri: uri });
  };

  if (!loaded) {
    return null;
  }

  return (
    <ProfileContext.Provider
      value={{ name, bio, imageUri, updateName, updateImage }}
    >
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfile() {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error("useProfile must be used within ProfileProvider");
  }
  return context;
}
