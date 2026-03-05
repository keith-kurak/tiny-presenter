import { BulletsSlide } from "@/components/BulletsSlide";
import { SlideContainer } from "@/components/SlideContainer";

export default function Slide3() {
  return (
    <SlideContainer
      backRoute="/prompting-expo-55/slide-2"
      nextRoute="/prompting-expo-55/slide-4"
    >
      <BulletsSlide
        header="Prompting for Migrations"
        bullets={[
          'Share your package.json: "Upgrade this to SDK 55"',
          "Paste error output directly into the prompt",
          "Ask for the diff, not a full rewrite",
          'Use "explain this change" to understand breaking changes',
        ]}
      />
    </SlideContainer>
  );
}
