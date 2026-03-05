import { ScrollView, StyleSheet, Text, View } from "react-native";

interface CodeSnippetProps {
  code: string;
  language?: string;
  filename?: string;
}

export function CodeSnippet({ code, language, filename }: CodeSnippetProps) {
  return (
    <View style={styles.container}>
      {(language || filename) && (
        <View style={styles.header}>
          {filename && <Text style={styles.filename}>{filename}</Text>}
          {language && <Text style={styles.language}>{language}</Text>}
        </View>
      )}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scroll}>
        <Text style={styles.code} selectable>
          {code.trim()}
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0d0f14",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#2a2d36",
    overflow: "hidden",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#2a2d36",
    backgroundColor: "#13151a",
  },
  filename: {
    fontSize: 12,
    color: "#9ca3af",
    fontFamily: "monospace",
  },
  language: {
    fontSize: 11,
    color: "#6b7280",
    fontFamily: "monospace",
    marginLeft: "auto",
  },
  scroll: {
    padding: 14,
  },
  code: {
    fontSize: 12,
    lineHeight: 20,
    color: "#e2e8f0",
    fontFamily: "monospace",
  },
});
