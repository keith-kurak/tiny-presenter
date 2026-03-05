import { BulletsSlide } from "@/components/BulletsSlide";
import { SlideContainer } from "@/components/SlideContainer";

export default function Slide4() {
  return (
    <SlideContainer
      backRoute="/prompting-expo-55/slide-3"
      nextRoute="/prompting-expo-55/slide-5"
    >
      <BulletsSlide
        header="Prompting for New APIs"
        bullets={[
          "Give context: platform, SDK version, file structure",
          'Ask for typed, idiomatic Expo Router code',
          "Request examples using real SDK 55 component names",
          "Follow up: \"What props changed from SDK 52?\"",
        ]}
      />
    </SlideContainer>
  );
}
