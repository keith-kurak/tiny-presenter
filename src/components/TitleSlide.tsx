import { Image, ImageProps } from "expo-image";
import { StyleSheet, Text, View } from "react-native";

import { useSlideScale } from "@/hooks/useSlideScale";

interface TitleSlideProps {
  title: string;
  subtitle?: string;
  image?: ImageProps["source"];
}

export function TitleSlide({ title, subtitle, image }: TitleSlideProps) {
  const scale = useSlideScale();

  return (
    <View style={[styles.container, { gap: 16 * scale.text }]}>
      <Text
        style={[
          styles.title,
          { fontSize: 32 * scale.text, lineHeight: 40 * scale.text },
        ]}
      >
        {title}
      </Text>
      {subtitle && (
        <Text
          style={[
            styles.subtitle,
            { fontSize: 16 * scale.text, lineHeight: 24 * scale.text },
          ]}
        >
          {subtitle}
        </Text>
      )}
      {image && (
        <Image
          source={image}
          style={[styles.image, { height: 160 * scale.media }]}
          contentFit="contain"
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexShrink: 1,
    minHeight: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "80%",
    flexShrink: 1,
    marginBottom: 8,
  },
  title: {
    fontWeight: "700",
    color: "#ffffff",
    textAlign: "center",
    letterSpacing: -0.5,
  },
  subtitle: {
    color: "#9ca3af",
    textAlign: "center",
    marginTop: 4,
  },
});
