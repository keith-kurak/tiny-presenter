import { Image, ImageProps } from "expo-image";
import { StyleSheet, Text, View } from "react-native";

import { useSlideScale } from "@/hooks/useSlideScale";

interface BulletsSlideProps {
  header?: string;
  bullets?: string[];
  image?: ImageProps["source"];
}

export function BulletsSlide({ header, bullets, image }: BulletsSlideProps) {
  const scale = useSlideScale();
  const dotSize = 8 * scale.text;

  return (
    <View style={[styles.container, { gap: 20 * scale.text }]}>
      {header && (
        <Text
          style={[
            styles.header,
            { fontSize: 24 * scale.text, lineHeight: 32 * scale.text },
          ]}
        >
          {header}
        </Text>
      )}
      {bullets && bullets.length > 0 && (
        <View style={{ gap: 14 * scale.text }}>
          {bullets.map((bullet, index) => (
            <View
              key={index}
              style={[styles.bulletRow, { gap: 12 * scale.text }]}
            >
              <View
                style={[
                  styles.bulletDot,
                  {
                    width: dotSize,
                    height: dotSize,
                    borderRadius: dotSize / 2,
                    marginTop: 9 * scale.text,
                  },
                ]}
              />
              <Text
                style={[
                  styles.bulletText,
                  { fontSize: 16 * scale.text, lineHeight: 26 * scale.text },
                ]}
              >
                {bullet}
              </Text>
            </View>
          ))}
        </View>
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
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontWeight: "700",
    color: "#ffffff",
    letterSpacing: -0.3,
  },
  bulletRow: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  bulletDot: {
    backgroundColor: "#3b4fd8",
    flexShrink: 0,
  },
  bulletText: {
    flexShrink: 1,
    color: "#d1d5db",
  },
  image: {
    width: "100%",
    marginTop: 8,
  },
});
