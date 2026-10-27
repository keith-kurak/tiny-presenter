import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { useSlideScale } from "@/hooks/useSlideScale";

interface SlideContainerProps {
  children: React.ReactNode;
  presentation: string;
  nextSlide?: number;
  backSlide?: number;
}

export function SlideContainer({
  children,
  presentation,
  nextSlide,
  backSlide,
}: SlideContainerProps) {
  const router = useRouter();
  const scale = useSlideScale();

  const goTo = (slide: number) =>
    router.push({
      pathname: "/[presentation]/[slide]",
      params: { presentation, slide: String(slide) },
    });

  return (
    <View style={styles.container}>
      <View style={[styles.content, { gap: 16 * scale.text }]}>
        {children}
      </View>
      <View style={styles.nav}>
        {backSlide ? (
          <Pressable
            style={({ pressed }) => [
              styles.navBtn,
              pressed && styles.navBtnPressed,
            ]}
            onPress={() => goTo(backSlide)}
          >
            <Text style={styles.navBtnText}>← Back</Text>
          </Pressable>
        ) : (
          <View style={styles.navPlaceholder} />
        )}
        {nextSlide ? (
          <Pressable
            style={({ pressed }) => [
              styles.navBtn,
              styles.navBtnNext,
              pressed && styles.navBtnPressed,
            ]}
            onPress={() => goTo(nextSlide)}
          >
            <Text style={[styles.navBtnText, styles.navBtnNextText]}>
              Next →
            </Text>
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
    width: "100%",
    maxWidth: 1200,
    alignSelf: "center",
    padding: 24,
    justifyContent: "center",
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
