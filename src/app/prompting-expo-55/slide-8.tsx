import { GitBranchSync } from "@/components/GitBranchSync";
import { SlideContainer } from "@/components/SlideContainer";
import SlideVideo from "@/components/SlideVideo";
import { TitleSlide } from "@/components/TitleSlide";

export default function Slide7() {
  return (
    <SlideContainer
      backRoute="/prompting-expo-55/slide-7"
      nextRoute="/prompting-expo-55/slide-9-1"
    >
      <TitleSlide
        title="4. Use Apple Zoom when going from this to that screen"
        subtitle="Native platform shared element transitions!"
      />
      <SlideVideo
        source={require("@/assets/prompting-expo-55/apple-zoom-transition.mp4")}
        height={400}
      />
      <GitBranchSync
        branch="03-apple-zoom-transitions"
        filePath="/Users/keith/Github/demos/health-logger-sdk55"
      />
    </SlideContainer>
  );
}
