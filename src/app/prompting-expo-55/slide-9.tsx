import { GitBranchSync } from "@/components/GitBranchSync";
import { SlideContainer } from "@/components/SlideContainer";
import SlideImage from "@/components/SlideImage";
import { TitleSlide } from "@/components/TitleSlide";

export default function Slide9() {
  return (
    <SlideContainer
      backRoute="/prompting-expo-55/slide-8"
      nextRoute="/prompting-expo-55/slide-9-1"
    >
      <TitleSlide
        title="5. Add a Native UI Toolbar"
        subtitle="Build menus and actions for stack screens"
      />
      <SlideImage
        source={require("@/assets/prompting-expo-55/ios-toolbar.png")}
        height={400}
      />
      <GitBranchSync
        branch="04-apple-stack-toolbar"
        filePath="/Users/keith/Github/demos/health-logger-sdk55"
      />
    </SlideContainer>
  );
}
