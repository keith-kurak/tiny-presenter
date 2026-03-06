import { Linking, Platform, Pressable, StyleSheet, Text } from "react-native";

interface SlideLinkProps {
  url: string;
  title: string;
}

export function SlideLink({ url, title }: SlideLinkProps) {
  return (
    <Pressable
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
      onPress={() =>
        Platform.OS === "web"
          ? window.open(url, "_blank")
          : Linking.openURL(url)
      }
    >
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.url} numberOfLines={1}>
        {url}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderLeftWidth: 2,
    borderLeftColor: "#3b4fd8",
    paddingLeft: 12,
    alignItems: "center",
    gap: 2,
  },
  pressed: {
    opacity: 0.6,
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
    color: "#93a3fb",
  },
  url: {
    fontSize: 11,
    color: "#6b7280",
    fontFamily: "monospace",
  },
});
