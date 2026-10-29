import { Image, ImageProps } from "expo-image";
import { useFocusEffect, useRouter } from "expo-router";
import { useCallback, useState } from "react";
import { Platform, Pressable, StyleSheet, Text, View } from "react-native";

import { useSlideScale } from "@/hooks/useSlideScale";
import { useSlideTheme } from "@/hooks/useSlideTheme";

interface SlideContainerProps {
  children: React.ReactNode;
  presentation: string;
  logo?: ImageProps["source"];
  nextSlide?: number;
  backSlide?: number;
}

export function SlideContainer({
  children,
  presentation,
  logo,
  nextSlide,
  backSlide,
}: SlideContainerProps) {
  const router = useRouter();
  const scale = useSlideScale();
  const theme = useSlideTheme();

  // Hover only exists on web, so native always shows the buttons
  const [navHovered, setNavHovered] = useState(false);
  const showNav = Platform.OS !== "web" || navHovered;

  const goTo = useCallback(
    (slide: number) =>
      router.push({
        pathname: "/[presentation]/[slide]",
        params: { presentation, slide: String(slide) },
      }),
    [router, presentation],
  );

  // Left and right arrow keys move between slides on web. Earlier slides stay
  // mounted in the stack, so only the focused slide listens.
  useFocusEffect(
    useCallback(() => {
      if (Platform.OS !== "web") return;

      const onKeyDown = (event: KeyboardEvent) => {
        if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) {
          return;
        }
        if (event.key === "ArrowLeft" && backSlide) {
          goTo(backSlide);
        } else if (event.key === "ArrowRight" && nextSlide) {
          goTo(nextSlide);
        }
      };

      window.addEventListener("keydown", onKeyDown);
      return () => window.removeEventListener("keydown", onKeyDown);
    }, [goTo, backSlide, nextSlide]),
  );

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      {logo && (
        // Fixed box with the image pinned left, so logos of any shape line up.
        // Doesn't scale with the slide, so it stays clear of the content.
        <Image
          source={logo}
          style={styles.logo}
          contentFit="contain"
          contentPosition="left"
          pointerEvents="none"
        />
      )}
      <View style={[styles.content, { gap: 16 * scale.text }]}>
        {children}
      </View>
      {/* Stays in the layout when hidden, so there is always an area to hover */}
      <Pressable
        style={[styles.nav, !showNav && styles.navHidden]}
        onHoverIn={() => setNavHovered(true)}
        onHoverOut={() => setNavHovered(false)}
      >
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
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    position: "absolute",
    top: 12,
    left: 12,
    width: 96,
    height: 24,
    zIndex: 1,
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
    // Fast clicks on the buttons shouldn't select their text on web
    userSelect: "none",
  },
  navHidden: {
    opacity: 0,
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
