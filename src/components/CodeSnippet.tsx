import { ScrollView, StyleSheet, Text, View } from "react-native";

import { useSlideScale } from "@/hooks/useSlideScale";
import { useSlideTheme } from "@/hooks/useSlideTheme";

interface CodeSnippetProps {
  code: string;
  language?: string;
  filename?: string;
}

// Lines starting with # (shell) or // (JS) are shaded as comments
function isComment(line: string) {
  return /^\s*(#|\/\/)/.test(line);
}

// Shades ${{ ... }} expressions, like in EAS / GitHub workflow files
function renderYamlValue(value: string) {
  return value
    .split(/(\$\{\{.*?\}\})/)
    .map((part, i) =>
      part.startsWith("${{") ? (
        <Text key={i} style={styles.yamlExpression}>
          {part}
        </Text>
      ) : (
        part
      ),
    );
}

// Colors the key in "key: value" lines (after any indent or "- ")
function renderYamlLine(line: string) {
  const match = line.match(/^(\s*(?:- )?)([^\s#][^:]*?)(:)(\s.*)?$/);
  if (!match) {
    return renderYamlValue(line);
  }
  const [, prefix, key, colon, rest = ""] = match;
  // A " #" after the value starts a trailing comment
  const commentStart = rest.search(/\s#/);
  const value = commentStart >= 0 ? rest.slice(0, commentStart) : rest;
  const comment = commentStart >= 0 ? rest.slice(commentStart) : "";
  return (
    <>
      {prefix}
      <Text style={styles.yamlKey}>{key}</Text>
      {colon}
      {renderYamlValue(value)}
      {comment && <Text style={styles.comment}>{comment}</Text>}
    </>
  );
}

const SWIFT_KEYWORDS =
  "public|private|internal|final|class|struct|enum|protocol|extension|func|var|let|return|try|await|async|throws|if|else|guard|self|static|import";
const SWIFT_TOKEN = new RegExp(
  `(@\\w+|\\b(?:${SWIFT_KEYWORDS})\\b|\\b[A-Z]\\w*\\b)`,
);

// Colors @attributes, keywords, and capitalized type names
function renderSwiftLine(line: string) {
  return line.split(SWIFT_TOKEN).map((part, i) => {
    if (i % 2 === 0) return part;
    const style = part.startsWith("@")
      ? styles.swiftAttribute
      : /^[A-Z]/.test(part)
        ? styles.swiftType
        : styles.swiftKeyword;
    return (
      <Text key={i} style={style}>
        {part}
      </Text>
    );
  });
}

function renderLine(line: string, language?: string) {
  if (isComment(line)) {
    return <Text style={styles.comment}>{line}</Text>;
  }
  if (language === "yaml") {
    return renderYamlLine(line);
  }
  if (language === "swift") {
    return renderSwiftLine(line);
  }
  return line;
}

export function CodeSnippet({ code, language, filename }: CodeSnippetProps) {
  const scale = useSlideScale();
  const theme = useSlideTheme();

  return (
    <View style={[styles.container, { borderColor: theme.outline }]}>
      {(language || filename) && (
        <View style={[styles.header, { borderBottomColor: theme.outline }]}>
          {filename && <Text style={styles.filename}>{filename}</Text>}
          {language && <Text style={styles.language}>{language}</Text>}
        </View>
      )}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{
          paddingVertical: 14 * scale.text,
          paddingHorizontal: 24 * scale.text,
        }}
      >
        <Text
          style={[
            styles.code,
            { fontSize: 12 * scale.text, lineHeight: 20 * scale.text },
          ]}
          selectable
        >
          {code
            .trim()
            .split("\n")
            .map((line, i) => (
              <Text key={i}>
                {i > 0 && "\n"}
                {renderLine(line, language)}
              </Text>
            ))}
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
    overflow: "hidden",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderBottomWidth: 1,
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
  code: {
    color: "#e2e8f0",
    fontFamily: "monospace",
  },
  comment: {
    color: "#6b7280",
    fontStyle: "italic",
  },
  yamlKey: {
    color: "#93a3fb",
  },
  yamlExpression: {
    color: "#fcd34d",
  },
  swiftAttribute: {
    color: "#fcd34d",
  },
  swiftKeyword: {
    color: "#f472b6",
  },
  swiftType: {
    color: "#93a3fb",
  },
});
