import { GitBranchSync } from "@/components/GitBranchSync";
import { SlideContainer } from "@/components/SlideContainer";
import SlideImage from "@/components/SlideImage";
import { TitleSlide } from "@/components/TitleSlide";
import React from "react";

export default function Slide12() {
  return (
    <SlideContainer
      backRoute="/prompting-expo-55/slide-11"
      nextRoute="/prompting-expo-55/slide-13"
    >
      <TitleSlide title="8. Display these two screens as a SplitView on iPad" />
      <SlideImage
        source={require("@/assets/prompting-expo-55/ios-toolbar.png")}
        height={400}
      />
      <GitBranchSync
        branch="07-split-view"
        filePath="/Users/keith/Github/demos/health-logger-sdk55"
      />
    </SlideContainer>
  );
}
