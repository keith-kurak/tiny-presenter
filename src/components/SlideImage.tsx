import { Image, ImageContentFit, ImageProps } from "expo-image";

import { useSlideScale } from "@/hooks/useSlideScale";

type Props = {
  source: ImageProps["source"];
  height?: number;
  contentFit?: ImageContentFit;
};

export default function SlideImage({ source, height = 160, contentFit = "contain" }: Props) {
  const scale = useSlideScale();

  return (
    <Image
      source={source}
      // Shrinks below its height when the slide is taller than the window
      style={{ width: "100%", height: height * scale.media, flexShrink: 1 }}
      contentFit={contentFit}
    />
  );
}
