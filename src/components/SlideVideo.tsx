import { useVideoPlayer, VideoView } from "expo-video";

type Props = {
  source: string;
  height?: number;
  loop?: boolean;
  autoplay?: boolean;
};

export default function SlideVideo({
  source,
  height = 200,
  loop = true,
  autoplay = true,
}: Props) {
  const player = useVideoPlayer(source, (p) => {
    p.loop = loop;
    if (autoplay) p.play();
  });

  return (
    <VideoView
      player={player}
      style={{ width: "100%", height }}
      contentFit="contain"
      nativeControls={true}
    />
  );
}
