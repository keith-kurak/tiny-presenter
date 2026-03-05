import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

const PRESENTATIONS = [
  {
    title: "Prompting Your Way Through Expo SDK 55",
    route: "/prompting-expo-55",
    slideCount: 5,
  },
];

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>tiny presenter</Text>
      <View style={styles.list}>
        {PRESENTATIONS.map((p) => (
          <Pressable
            key={p.route}
            style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
            onPress={() => router.push(p.route as any)}
          >
            <Text style={styles.cardTitle}>{p.title}</Text>
            <Text style={styles.cardMeta}>{p.slideCount} slides</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#13151a",
    padding: 24,
    paddingTop: 60,
  },
  heading: {
    fontSize: 18,
    fontWeight: "700",
    color: "#6b7280",
    letterSpacing: 2,
    textTransform: "uppercase",
    marginBottom: 32,
  },
  list: {
    gap: 12,
  },
  card: {
    backgroundColor: "#1e2130",
    borderRadius: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: "#2a2d36",
  },
  cardPressed: {
    opacity: 0.7,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#ffffff",
    lineHeight: 22,
    marginBottom: 6,
  },
  cardMeta: {
    fontSize: 13,
    color: "#6b7280",
  },
});
