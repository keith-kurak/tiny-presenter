import { BulletsSlide } from "@/components/BulletsSlide";
import { GitBranchSync } from "@/components/GitBranchSync";
import { SlideContainer } from "@/components/SlideContainer";
import SlideImage from "@/components/SlideImage";
import { TitleSlide } from "@/components/TitleSlide";

export default function Slide10() {
  return (
    <SlideContainer
      backRoute="/prompting-expo-55/slide-9-1"
      nextRoute="/prompting-expo-55/slide-11"
    >
      <TitleSlide title="6. Turn this screen into a form sheet" />
      <BulletsSlide bullets={["New footer API", "Liquid glass-ready"]} />
      <SlideImage
        source={require("@/assets/prompting-expo-55/form-sheet.png")}
        height={350}
      />
      <GitBranchSync
        branch="05-form-sheet"
        filePath="/Users/keith/Github/demos/health-logger-sdk55"
      />
    </SlideContainer>
  );
}
