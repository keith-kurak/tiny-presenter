import { BulletsSlide } from "@/components/BulletsSlide";
import { GitBranchSync } from "@/components/GitBranchSync";
import { SlideContainer } from "@/components/SlideContainer";
import { TitleSlide } from "@/components/TitleSlide";

export default function Slide3() {
  return (
    <SlideContainer
      backRoute="/prompting-expo-55/slide-2"
      nextRoute="/prompting-expo-55/slide-4"
    >
      <TitleSlide
        title="2. Add native tabs"
        image={require("@/assets/prompting-expo-55/native-tabs.png")}
      />
      <BulletsSlide
        bullets={["Hide tabs", "Better keyboard handling", "Listeners"]}
      />
      <GitBranchSync
        branch="01-native-tabs"
        filePath="/Users/keith/Github/demos/health-logger-sdk55"
      />
    </SlideContainer>
  );
}
