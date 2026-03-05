import Constants from "expo-constants";
import { useEffect, useState } from "react";
import { ActivityIndicator, Pressable, StyleSheet, Text, View } from "react-native";

interface GitBranchSyncProps {
  filePath: string;
  branch: string;
}

type Status = "idle" | "loading" | "success" | "error";

function getApiBaseUrl(): string {
  // On web, relative URLs work. On native, we need the dev server host.
  if (typeof window !== "undefined" && typeof document !== "undefined") {
    return "";
  }
  const hostUri = Constants.expoConfig?.hostUri;
  if (hostUri) return `http://${hostUri}`;
  return "http://localhost:8081";
}

export function GitBranchSync({ filePath, branch }: GitBranchSyncProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  // Reset to idle after success/error
  useEffect(() => {
    if (status === "success" || status === "error") {
      const timer = setTimeout(() => setStatus("idle"), 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  async function handleSync() {
    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch(`${getApiBaseUrl()}/api/git-checkout`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ filePath, branch }),
      });
      const data = await res.json();
      if (!res.ok) {
        setStatus("error");
        setMessage(data.error ?? "Unknown error");
      } else {
        setStatus("success");
        setMessage(data.output || `On branch ${branch}`);
      }
    } catch (e) {
      setStatus("error");
      setMessage((e as Error).message);
    }
  }

  const buttonStyle = [
    styles.button,
    status === "success" && styles.buttonSuccess,
    status === "error" && styles.buttonError,
    status === "loading" && styles.buttonLoading,
  ];

  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [...buttonStyle, pressed && styles.buttonPressed]}
        onPress={handleSync}
        disabled={status === "loading"}
      >
        {status === "loading" ? (
          <ActivityIndicator size="small" color="#ffffff" />
        ) : (
          <Text style={styles.buttonText}>
            {status === "success"
              ? "✓ Switched"
              : status === "error"
              ? "✗ Failed"
              : `git checkout ${branch}`}
          </Text>
        )}
      </Pressable>
      {message ? (
        <Text
          style={[
            styles.message,
            status === "error" && styles.messageError,
          ]}
          numberOfLines={2}
        >
          {message}
        </Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 6,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1e2130",
    borderWidth: 1,
    borderColor: "#2a2d36",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
    minWidth: 160,
  },
  buttonLoading: {
    opacity: 0.6,
  },
  buttonSuccess: {
    backgroundColor: "#14532d",
    borderColor: "#16a34a",
  },
  buttonError: {
    backgroundColor: "#450a0a",
    borderColor: "#dc2626",
  },
  buttonPressed: {
    opacity: 0.7,
  },
  buttonText: {
    color: "#d1d5db",
    fontSize: 13,
    fontWeight: "600",
    fontFamily: "monospace",
  },
  message: {
    fontSize: 11,
    color: "#6b7280",
    fontFamily: "monospace",
  },
  messageError: {
    color: "#f87171",
  },

});
