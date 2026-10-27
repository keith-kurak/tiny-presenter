import { useWindowDimensions } from "react-native";

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

// Slides are designed at phone size (scale 1). On larger windows, such as a
// full-screen browser, text and media grow so the slide fills the screen.
export function useSlideScale() {
  const { width, height } = useWindowDimensions();

  return {
    // Bounded by height too, so short, wide windows don't overflow
    text: clamp(Math.min(width / 600, height / 450), 1, 2),
    media: clamp(height / 850, 1, 2),
  };
}
