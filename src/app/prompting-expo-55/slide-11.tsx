import { BulletsSlide } from "@/components/BulletsSlide";
import { GitBranchSync } from "@/components/GitBranchSync";
import { SlideContainer } from "@/components/SlideContainer";
import SlideImage from "@/components/SlideImage";
import { TitleSlide } from "@/components/TitleSlide";
import React from "react";

export default function Slide11() {
  return (
    <SlideContainer
      backRoute="/prompting-expo-55/slide-10"
      nextRoute="/prompting-expo-55/slide-12"
    >
      <TitleSlide title="7. Use platform colors in place of custom colors" />
      <BulletsSlide
        bullets={[
          "Style your app like the rest of Android with Material You dynamic colors",
          "Drop-in replacement for constants that also auto-reload when changed",
        ]}
      />
      <SlideImage
        source={require("@/assets/prompting-expo-55/ios-toolbar.png")}
        height={400}
      />
      <GitBranchSync
        branch="06-platform-colors"
        filePath="/Users/keith/Github/demos/health-logger-sdk55"
      />
    </SlideContainer>
  );
}
