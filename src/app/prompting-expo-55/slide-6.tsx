import { SlideContainer } from "@/components/SlideContainer";
import SlideImage from "@/components/SlideImage";
import { TitleSlide } from "@/components/TitleSlide";

export default function Slide6() {
  return (
    <SlideContainer
      backRoute="/prompting-expo-55/slide-5"
      nextRoute="/prompting-expo-55/slide-7"
    >
      <TitleSlide title="Hmmm..." />
      <SlideImage
        source={require("@/assets/prompting-expo-55/expo-ui-ios-pass1.png")}
        height={300}
      />
      <SlideImage
        source={require("@/assets/prompting-expo-55/expo-ui-android-pass1.png")}
        height={300}
      />
    </SlideContainer>
  );
}
