import { GitBranchSync } from "@/components/GitBranchSync";
import { SlideContainer } from "@/components/SlideContainer";
import SlideImage from "@/components/SlideImage";
import { SlideLink } from "@/components/SlideLink";
import { TitleSlide } from "@/components/TitleSlide";
import React from "react";

export default function Slide13() {
  return (
    <SlideContainer
      backRoute="/prompting-expo-55/slide-12"
      nextRoute="/prompting-expo-55/slide-14"
    >
      <TitleSlide title="9. Write a workflow" />
      <SlideImage
        source={require("@/assets/prompting-expo-55/workflow.png")}
        height={400}
      />
      <SlideLink
        title="Maestro E2E Workflow"
        url="https://expo.dev/accounts/expo-production/projects/health-logger-sdk55/workflows/019cbfb2-080a-78f5-835f-cb7dba7d98f8"
      />
      <GitBranchSync
        branch="08-add-a-workflow"
        filePath="/Users/keith/Github/demos/health-logger-sdk55"
      />
    </SlideContainer>
  );
}
