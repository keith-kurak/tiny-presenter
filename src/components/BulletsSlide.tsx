import { Image } from "expo-image";
import { ImageSourcePropType, StyleSheet, Text, View } from "react-native";

interface BulletsSlideProps {
  header?: string;
  bullets?: string[];
  image?: ImageSourcePropType;
}

export function BulletsSlide({ header, bullets, image }: BulletsSlideProps) {
  return (
    <View style={styles.container}>
      {header && <Text style={styles.header}>{header}</Text>}
      {bullets && bullets.length > 0 && (
        <View style={styles.bulletList}>
          {bullets.map((bullet, index) => (
            <View key={index} style={styles.bulletRow}>
              <View style={styles.bulletDot} />
              <Text style={styles.bulletText}>{bullet}</Text>
            </View>
          ))}
        </View>
      )}
      {image && (
        <Image source={image} style={styles.image} contentFit="contain" />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "700",
    color: "#ffffff",
    lineHeight: 32,
    letterSpacing: -0.3,
  },
  bulletList: {
    gap: 14,
  },
  bulletRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 12,
  },
  bulletDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#3b4fd8",
    marginTop: 7,
    flexShrink: 0,
  },
  bulletText: {
    flex: 1,
    fontSize: 16,
    color: "#d1d5db",
    lineHeight: 26,
  },
  image: {
    width: "100%",
    height: 160,
    marginTop: 8,
  },
});
