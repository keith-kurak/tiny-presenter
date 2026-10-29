import { useFocusEffect } from "expo-router";
import { useVideoPlayer, VideoView } from "expo-video";
import { useCallback } from "react";
import { StyleSheet, View } from "react-native";

import { useSlideScale } from "@/hooks/useSlideScale";
import { useSlideTheme } from "@/hooks/useSlideTheme";

type Props = {
  source: string;
  height?: number;
  loop?: boolean;
  autoplay?: boolean;
  // Draws a rounded outline around the video, like a phone frame. Needs the
  // video's width / height so the outline hugs the video.
  frame?: { aspectRatio: number };
};

export default function SlideVideo({
  source,
  height = 200,
  loop = true,
  autoplay = true,
  frame,
}: Props) {
  const scale = useSlideScale();
  const theme = useSlideTheme();
  const player = useVideoPlayer(source, (p) => {
    p.loop = loop;
  });

  // Slides stay mounted in the stack, so play from the start each time the
  // slide is navigated to, and pause when leaving it
  useFocusEffect(
    useCallback(() => {
      if (!autoplay) return;
      player.currentTime = 0;
      player.play();
      return () => player.pause();
    }, [player, autoplay]),
  );

  if (!frame) {
    return (
      <VideoView
        player={player}
        style={{ width: "100%", height: height * scale.media, flexShrink: 1 }}
        contentFit="contain"
        nativeControls={true}
      />
    );
  }

  return (
    <View
      style={[
        styles.frame,
        { borderColor: theme.outline },
        {
          height: height * scale.media,
          aspectRatio: frame.aspectRatio,
          borderRadius: 24 * scale.media,
        },
      ]}
    >
      <VideoView
        player={player}
        style={styles.fill}
        // The border takes space inside the frame, so "contain" would leave
        // thin bars at the top and bottom
        contentFit="cover"
        nativeControls={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  frame: {
    alignSelf: "center",
    flexShrink: 1,
    minHeight: 0,
    borderWidth: 3,
    overflow: "hidden",
    backgroundColor: "#000000",
  },
  fill: {
    width: "100%",
    height: "100%",
  },
});
