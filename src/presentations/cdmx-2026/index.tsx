import { CodeSnippet } from "@/components/CodeSnippet";
import SlideImage from "@/components/SlideImage";
import { TitleSlide } from "@/components/TitleSlide";
import { TitledSlide } from "@/components/TitledSlide";
import type { Presentation } from "../types";

const presentation: Presentation = {
  title: "CDMX 2026",
  slides: [
    () => <TitleSlide title="CDMX 2026" subtitle="Coming soon" />,
    () => (
      <SlideImage
        source={require("./assets/social-graphic-2.png")}
        height={500}
      />
    ),
    () => (
      <>
        <SlideImage
          source={require("./assets/wsl.gif")}
          height={400}
        />
        <TitleSlide title="expo.fyi/wsl" />
      </>
    ),
    () => (
      <SlideImage
        source={require("./assets/social-graphic.png")}
        height={500}
      />
    ),
    () => (
      <>
        {/* TODO: replace placeholder with phone screenshot */}
        <SlideImage
          source={{ uri: "https://placehold.co/390x844/png?text=Phone" }}
          height={500}
        />
        <CodeSnippet
          code={`$ npx create-expo-app\n$ claude --dangerously-skip-permissions`}
        />
      </>
    ),
    () => (
      <>
        <TitleSlide title="docs.expo.dev/agents" />
        {/* TODO: replace placeholder with image */}
        <SlideImage
          source={{ uri: "https://placehold.co/1200x675/png?text=Image" }}
          height={400}
        />
        <CodeSnippet
          code={`$ claude plugin install expo@claude-plugins-official`}
        />
      </>
    ),
    // TODO: replace placeholder with phone screenshot
    () => (
      <SlideImage
        source={{ uri: "https://placehold.co/390x844/png?text=Phone" }}
        height={500}
      />
    ),
    () => (
      <>
        {/* TODO: replace placeholder with image */}
        <SlideImage
          source={{ uri: "https://placehold.co/1200x675/png?text=Image" }}
          height={400}
        />
        <CodeSnippet code={`$ npx @expo/agent-cli status`} />
      </>
    ),
    () => (
      <TitledSlide title="Expo MCP">
        {/* TODO: replace placeholder with image */}
        <SlideImage
          source={{ uri: "https://placehold.co/1200x675/png?text=Image" }}
          height={500}
        />
      </TitledSlide>
    ),
    () => (
      <TitledSlide title="Android looking good">
        {/* TODO: replace placeholder with image */}
        <SlideImage
          source={{ uri: "https://placehold.co/1200x675/png?text=Image" }}
          height={500}
        />
      </TitledSlide>
    ),
    () => (
      <TitledSlide title="Expo Simulator">
        <CodeSnippet
          code={`$ EXPO_UNSTABLE_TUNNEL_V2=1 npx expo start --tunnel
$ eas simulator:start --platform ios \\
    --build-id <dev-build-id> \\
    --open-url "myapp://expo-development-client/?url=https://<tunnel-host>"`}
        />
      </TitledSlide>
    ),
  ],
};

export default presentation;
