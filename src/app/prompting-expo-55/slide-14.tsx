import { GitBranchSync } from "@/components/GitBranchSync";
import { SlideContainer } from "@/components/SlideContainer";
import SlideImage from "@/components/SlideImage";
import { TitleSlide } from "@/components/TitleSlide";
import React from "react";

export default function Slide14() {
  return (
    <SlideContainer
      backRoute="/prompting-expo-55/slide-13"
      nextRoute="/prompting-expo-55/slide-15"
    >
      <TitleSlide title="10. Make this presentation?" />
      <SlideImage
        source={require("@/assets/prompting-expo-55/ios-toolbar.png")}
        height={400}
      />
      <GitBranchSync
        branch="08-automate-workflow"
        filePath="/Users/keith/Github/demos/health-logger-sdk55"
      />
    </SlideContainer>
  );
}
