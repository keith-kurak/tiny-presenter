import { BulletsSlide } from "@/components/BulletsSlide";
import { SlideContainer } from "@/components/SlideContainer";

export default function Slide2() {
  return (
    <SlideContainer
      backRoute="/prompting-expo-55"
      nextRoute="/prompting-expo-55/slide-3"
    >
      <BulletsSlide
        header="What's New in SDK 55"
        bullets={[
          "React Native 0.83 with new architecture on by default",
          "Expo Router 55 with improved typed routes",
          "expo-image 55 with faster loading and new props",
          "expo-symbols with SF Symbols support",
          "New expo-glass-effect component",
        ]}
      />
    </SlideContainer>
  );
}
