import React, { createContext, useContext, useState } from "react";

type User = {
  name: string;
};

type UserContextType = {
  user: User;
  updateUser: (data: Partial<User>) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>({
    name: "You",
  });

  const updateUser = (data: Partial<User>) => {
    setUser((prev) => ({
      ...prev,
      ...data,
    }));
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
