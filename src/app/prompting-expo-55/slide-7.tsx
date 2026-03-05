import { SlideContainer } from "@/components/SlideContainer";
import { TitleSlide } from "@/components/TitleSlide";

export default function Slide7() {
  return (
    <SlideContainer
      backRoute="/prompting-expo-55/slide-6"
      nextRoute="/prompting-expo-55/slide-8"
    >
      <TitleSlide
        title="Don't be afraid to just ask..."
        subtitle="'uhh, what if you used ListItems inside of a LazyView?'"
      />
    </SlideContainer>
  );
}
