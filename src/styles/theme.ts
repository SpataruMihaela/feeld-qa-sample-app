export const colors = {
  background: "#FFFFFF",
  primary: "#6B4EFF",
  textPrimary: "#111111",
  textSecondary: "#666666",
  card: "#F5F5F7",
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

export const text = {
  title: {
    fontSize: 24,
    fontWeight: "600" as const,
    color: colors.textPrimary,
  },
  subtitle: {
    fontSize: 16,
    color: colors.textSecondary,
  },
};
