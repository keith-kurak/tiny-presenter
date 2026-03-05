import { CodeSnippet } from "@/components/CodeSnippet";
import { SlideContainer } from "@/components/SlideContainer";
import { TitleSlide } from "@/components/TitleSlide";

export default function Slide5() {
  return (
    <SlideContainer
      backRoute="/prompting-expo-55/slide-4"
      nextRoute="/prompting-expo-55/slide-6"
    >
      <TitleSlide
        title="Better Together"
        subtitle="'Take screenshots to check your design...'"
      />
      <CodeSnippet code={`/plugin install expo-app-design`} />
      <CodeSnippet code={`npx expo install expo-mcp --dev`} />
    </SlideContainer>
  );
}
