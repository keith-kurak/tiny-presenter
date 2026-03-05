import { Image, ImageContentFit } from "expo-image";
import { ImageSourcePropType } from "react-native";

type Props = {
  source: ImageSourcePropType;
  height?: number;
  contentFit?: ImageContentFit;
};

export default function SlideImage({ source, height = 160, contentFit = "contain" }: Props) {
  return (
    <Image
      source={source}
      style={{ width: "100%", height }}
      contentFit={contentFit}
    />
  );
}
