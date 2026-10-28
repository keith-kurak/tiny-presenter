import { StyleSheet, Text, View } from "react-native";

import { useSlideScale } from "@/hooks/useSlideScale";

interface MessageThreadProps {
  children: React.ReactNode;
}

// Stacks TextBubbles like a chat conversation
export function MessageThread({ children }: MessageThreadProps) {
  const scale = useSlideScale();

  return (
    <View
      style={[
        styles.thread,
        { width: 480 * scale.text, gap: 6 * scale.text },
      ]}
    >
      {children}
    </View>
  );
}

interface TextBubbleProps {
  message: string;
  url?: string;
  // "sent" bubbles are blue on the right, "received" are gray on the left
  from?: "sent" | "received";
}

export function TextBubble({ message, url, from = "sent" }: TextBubbleProps) {
  const scale = useSlideScale();
  const sent = from === "sent";

  return (
    <View
      style={[
        styles.bubble,
        sent ? styles.sent : styles.received,
        {
          paddingVertical: 10 * scale.text,
          paddingHorizontal: 16 * scale.text,
          borderRadius: 20 * scale.text,
          gap: 4 * scale.text,
        },
      ]}
    >
      <Text
        style={[
          styles.message,
          { fontSize: 16 * scale.text, lineHeight: 22 * scale.text },
        ]}
      >
        {message}
      </Text>
      {url && (
        <Text
          style={[
            styles.url,
            sent ? styles.sentUrl : styles.receivedUrl,
            { fontSize: 12 * scale.text, lineHeight: 18 * scale.text },
          ]}
        >
          {url}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  thread: {
    alignSelf: "center",
    maxWidth: "100%",
  },
  bubble: {
    maxWidth: "80%",
  },
  sent: {
    alignSelf: "flex-end",
    backgroundColor: "#3b4fd8",
    borderBottomRightRadius: 4,
  },
  received: {
    alignSelf: "flex-start",
    backgroundColor: "#2a2d36",
    borderBottomLeftRadius: 4,
  },
  message: {
    color: "#ffffff",
  },
  url: {
    fontFamily: "monospace",
    textDecorationLine: "underline",
  },
  sentUrl: {
    color: "#c7d2fe",
  },
  receivedUrl: {
    color: "#93a3fb",
  },
});
