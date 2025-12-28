import { createContext, useContext, useState, ReactNode } from "react";

type LikesContextType = {
  likedProfiles: string[];
  likeProfile: (id: string) => void;
  unlikeProfile: (id: string) => void;
  isLiked: (id: string) => boolean;
};

const LikesContext = createContext<LikesContextType | undefined>(undefined);

export function LikesProvider({ children }: { children: ReactNode }) {
  const [likedProfiles, setLikedProfiles] = useState<string[]>([]);

  const likeProfile = (id: string) => {
    setLikedProfiles((prev) => (prev.includes(id) ? prev : [...prev, id]));
  };

  const unlikeProfile = (id: string) => {
    setLikedProfiles((prev) => prev.filter((profileId) => profileId !== id));
  };

  const isLiked = (id: string) => {
    return likedProfiles.includes(id);
  };

  return (
    <LikesContext.Provider
      value={{
        likedProfiles,
        likeProfile,
        unlikeProfile,
        isLiked,
      }}
    >
      {children}
    </LikesContext.Provider>
  );
}

export function useLikes() {
  const context = useContext(LikesContext);
  if (!context) {
    throw new Error("useLikes must be used within LikesProvider");
  }
  return context;
}
