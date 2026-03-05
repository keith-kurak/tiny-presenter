import { Image } from "expo-image";
import { ImageSourcePropType, StyleSheet, Text, View } from "react-native";

interface TitleSlideProps {
  title: string;
  subtitle?: string;
  image?: ImageSourcePropType;
}

export function TitleSlide({ title, subtitle, image }: TitleSlideProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
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
    gap: 16,
  },
  image: {
    width: "80%",
    height: 160,
    marginBottom: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: "800",
    color: "#ffffff",
    textAlign: "center",
    lineHeight: 40,
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 16,
    color: "#9ca3af",
    textAlign: "center",
    lineHeight: 24,
    marginTop: 4,
  },
});
