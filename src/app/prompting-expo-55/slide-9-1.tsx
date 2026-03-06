import { SlideContainer } from "@/components/SlideContainer";
import SlideImage from "@/components/SlideImage";
import { SlideLink } from "@/components/SlideLink";
import { TitleSlide } from "@/components/TitleSlide";

export default function Slide9_1() {
  return (
    <SlideContainer
      backRoute="/prompting-expo-55/slide-9"
      nextRoute="/prompting-expo-55/slide-10"
    >
      <TitleSlide title="No idea? Ask Claude!" />
      <SlideLink
        url="https://developer.apple.com/design/human-interface-guidelines/toolbars/"
        title="Apple's HIG on Toolbars"
      />
      <SlideImage
        source={require("@/assets/prompting-expo-55/ui-toolbar-prompt-1.png")}
        height={350}
      />
      <SlideImage
        source={require("@/assets/prompting-expo-55/ui-toolbar-prompt-2.png")}
        height={350}
      />
    </SlideContainer>
  );
}
