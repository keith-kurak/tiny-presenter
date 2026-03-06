import { SlideContainer } from "@/components/SlideContainer";
import SlideImage from "@/components/SlideImage";
import { TitleSlide } from "@/components/TitleSlide";
import React from "react";

export default function Slide15() {
  return (
    <SlideContainer backRoute="/prompting-expo-55/slide-14">
      <TitleSlide title="11. Sign up for the Expo Agent waitlist" />
      <SlideImage
        source={require("@/assets/prompting-expo-55/agent-waitlist.png")}
        height={400}
      />
      <TitleSlide title="" />
      <TitleSlide
        title="bit.ly/prompt-expo-toronto"
        subtitle="⬆️ tonight's demo"
      />
    </SlideContainer>
  );
}
