import { CodeSnippet } from "@/components/CodeSnippet";
import { SlideContainer } from "@/components/SlideContainer";
import { SlideLink } from "@/components/SlideLink";
import { TitleSlide } from "@/components/TitleSlide";

export default function Slide2() {
  return (
    <SlideContainer
      backRoute="/prompting-expo-55"
      nextRoute="/prompting-expo-55/slide-3"
    >
      <TitleSlide title="1. Upgrade to SDK 55" />
      <CodeSnippet
        code={`/plugin marketplace add expo/skills\n\n/plugin install upgrading-expo`}
      />
      <SlideLink
        url="https://github.com/expo/skills/blob/main/plugins/upgrading-expo/skills/upgrading-expo/SKILL.md"
        title="View the plugin's SKILL file"
      />
    </SlideContainer>
  );
}
