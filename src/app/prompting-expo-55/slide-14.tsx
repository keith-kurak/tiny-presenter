import { SlideContainer } from "@/components/SlideContainer";
import { TitleSlide } from "@/components/TitleSlide";
import React from "react";

export default function Slide14() {
  return (
    <SlideContainer
      backRoute="/prompting-expo-55/slide-13"
      nextRoute="/prompting-expo-55/slide-15"
    >
      <TitleSlide title="10. Make this presentation?" />
    </SlideContainer>
  );
}
