import { GitBranchSync } from "@/components/GitBranchSync";
import { SlideContainer } from "@/components/SlideContainer";
import { TitleSlide } from "@/components/TitleSlide";

export default function Slide1() {
  return (
    <SlideContainer nextRoute="/prompting-expo-55/slide-2">
      <TitleSlide
        title="Prompting Your Way Through Expo SDK 55"
        image={require("@/assets/prompting-expo-55/upgrade-expo-prompt.png")}
      />
      <GitBranchSync
        branch="main"
        filePath="/Users/keith/Github/demos/health-logger-sdk55"
      />
    </SlideContainer>
  );
}
