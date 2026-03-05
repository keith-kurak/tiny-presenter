import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface SlideContainerProps {
  children: React.ReactNode;
  nextRoute?: string;
  backRoute?: string;
}

export function SlideContainer({ children, nextRoute, backRoute }: SlideContainerProps) {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.content}>{children}</View>
      <View style={styles.nav}>
        {backRoute ? (
          <Pressable
            style={({ pressed }) => [styles.navBtn, pressed && styles.navBtnPressed]}
            onPress={() => router.push(backRoute as any)}
          >
            <Text style={styles.navBtnText}>← Back</Text>
          </Pressable>
        ) : (
          <View style={styles.navPlaceholder} />
        )}
        {nextRoute ? (
          <Pressable
            style={({ pressed }) => [styles.navBtn, styles.navBtnNext, pressed && styles.navBtnPressed]}
            onPress={() => router.push(nextRoute as any)}
          >
            <Text style={[styles.navBtnText, styles.navBtnNextText]}>Next →</Text>
          </Pressable>
        ) : (
          <View style={styles.navPlaceholder} />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#13151a",
  },
  content: {
    flex: 1,
    padding: 24,
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: "#2a2d36",
  },
  navBtn: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: "#1e2130",
    borderWidth: 1,
    borderColor: "#2a2d36",
  },
  navBtnNext: {
    backgroundColor: "#3b4fd8",
    borderColor: "#3b4fd8",
  },
  navBtnPressed: {
    opacity: 0.7,
  },
  navBtnText: {
    color: "#9ca3af",
    fontSize: 14,
    fontWeight: "600",
  },
  navBtnNextText: {
    color: "#ffffff",
  },
  navPlaceholder: {
    width: 80,
  },
});
