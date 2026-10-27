import { Linking, Platform, Pressable, StyleSheet, Text } from "react-native";

import { useSlideScale } from "@/hooks/useSlideScale";

interface SlideLinkProps {
  url: string;
  title: string;
}

export function SlideLink({ url, title }: SlideLinkProps) {
  const scale = useSlideScale();

  return (
    <Pressable
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
      onPress={() =>
        Platform.OS === "web"
          ? window.open(url, "_blank")
          : Linking.openURL(url)
      }
    >
      <Text style={[styles.title, { fontSize: 14 * scale.text }]}>
        {title}
      </Text>
      <Text style={[styles.url, { fontSize: 11 * scale.text }]} numberOfLines={1}>
        {url}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    maxWidth: "100%",
    borderLeftWidth: 2,
    borderLeftColor: "#3b4fd8",
    paddingLeft: 12,
    alignItems: "flex-start",
    gap: 2,
  },
  pressed: {
    opacity: 0.6,
  },
  title: {
    fontWeight: "600",
    color: "#93a3fb",
  },
  url: {
    color: "#6b7280",
    fontFamily: "monospace",
  },
});
