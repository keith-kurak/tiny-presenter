import { GitBranchSync } from "@/components/GitBranchSync";
import { SlideContainer } from "@/components/SlideContainer";
import SlideImage from "@/components/SlideImage";
import { TitleSlide } from "@/components/TitleSlide";
import React from "react";

export default function Slide13() {
  return (
    <SlideContainer
      backRoute="/prompting-expo-55/slide-12"
      nextRoute="/prompting-expo-55/slide-14"
    >
      <TitleSlide title="9. Automate such-and-such with a workflow" />
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
