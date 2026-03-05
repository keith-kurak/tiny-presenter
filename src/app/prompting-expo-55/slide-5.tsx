import { SlideContainer } from "@/components/SlideContainer";
import { TitleSlide } from "@/components/TitleSlide";

export default function Slide5() {
  return (
    <SlideContainer backRoute="/prompting-expo-55/slide-4">
      <TitleSlide
        title="Ship Faster"
        subtitle="Let the AI handle the boilerplate. You handle the product."
      />
    </SlideContainer>
  );
}
