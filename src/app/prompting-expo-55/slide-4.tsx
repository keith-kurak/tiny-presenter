import { GitBranchSync } from "@/components/GitBranchSync";
import { SlideContainer } from "@/components/SlideContainer";
import { TitleSlide } from "@/components/TitleSlide";

export default function Slide4() {
  return (
    <SlideContainer
      backRoute="/prompting-expo-55/slide-3"
      nextRoute="/prompting-expo-55/slide-5"
    >
      <TitleSlide
        title="3. Reimplement a screen or two in Expo UI"
        image={require("@/assets/prompting-expo-55/expo-ui-prompt.png")}
      />
      <GitBranchSync
        branch="02.1-expo-ui"
        filePath="/Users/keith/Github/demos/health-logger-sdk55"
      />
    </SlideContainer>
  );
}
