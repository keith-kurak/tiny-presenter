import { StyleSheet, View } from "react-native";

import { useSlideScale } from "@/hooks/useSlideScale";

import { TitleSlide } from "./TitleSlide";

interface TitledSlideProps {
  title: string;
  children: React.ReactNode;
}

// Keeps the title at the top of the slide and centers the rest of the content
// in the space below it
export function TitledSlide({ title, children }: TitledSlideProps) {
  const scale = useSlideScale();

  return (
    <View style={[styles.container, { gap: 16 * scale.text }]}>
      <TitleSlide title={title} />
      <View style={[styles.body, { gap: 16 * scale.text }]}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 0,
  },
  body: {
    flex: 1,
    minHeight: 0,
    justifyContent: "center",
  },
});
