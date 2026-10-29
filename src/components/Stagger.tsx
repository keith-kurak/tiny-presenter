import { useFocusEffect } from "expo-router";
import {
  Children,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { Animated, Platform, StyleSheet } from "react-native";

const FADE_MS = 400;
const useNativeDriver = Platform.OS !== "web";

interface StaggerProps {
  children: React.ReactNode;
  // How long each child shows before the next one replaces it, in ms. Pass an
  // array to give each child its own time. The last child stays on screen.
  interval: number | number[];
}

// Shows its children one at a time: each fades out and the next fades in
export function Stagger({ children, interval }: StaggerProps) {
  const items = Children.toArray(children);
  const [index, setIndex] = useState(0);
  const [focused, setFocused] = useState(false);
  const opacity = useRef(new Animated.Value(1)).current;

  // Slides stay mounted in the stack, so start over from the first child each
  // time the slide is navigated to
  useFocusEffect(
    useCallback(() => {
      setIndex(0);
      opacity.setValue(1);
      setFocused(true);
      return () => setFocused(false);
    }, [opacity]),
  );

  useEffect(() => {
    if (!focused) return;

    if (index > 0) {
      Animated.timing(opacity, {
        toValue: 1,
        duration: FADE_MS,
        useNativeDriver,
      }).start();
    }

    let timer: ReturnType<typeof setTimeout> | undefined;
    if (index < items.length - 1) {
      const delay = Array.isArray(interval) ? interval[index] : interval;
      timer = setTimeout(() => {
        Animated.timing(opacity, {
          toValue: 0,
          duration: FADE_MS,
          useNativeDriver,
        }).start(({ finished }) => {
          if (finished) setIndex((i) => i + 1);
        });
      }, delay);
    }

    return () => {
      clearTimeout(timer);
      opacity.stopAnimation();
    };
  }, [focused, index, interval, items.length, opacity]);

  return (
    <Animated.View style={[styles.container, { opacity }]}>
      {items[index]}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    flexShrink: 1,
    minHeight: 0,
    justifyContent: "center",
  },
});
