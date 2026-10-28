import { CodeSnippet } from "@/components/CodeSnippet";
import SlideImage from "@/components/SlideImage";
import { SlideLink } from "@/components/SlideLink";
import { MessageThread, TextBubble } from "@/components/TextBubble";
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
          code={`# make a development build for the simulator
$ eas build --platform ios --profile development-simulator

# start the dev server with a public tunnel
$ EXPO_UNSTABLE_TUNNEL_V2=1 npx expo start --tunnel

# boot a cloud simulator and open your dev build on the tunnel
$ eas simulator:start --platform ios \\
    --build-id <dev-build-id> \\
    --open-url "myapp://expo-development-client/?url=https://<tunnel-host>"

# or just use the simulators skill!`}
        />
      </TitledSlide>
    ),
    () => (
      <TitledSlide title="Sharing simulator sessions">
        <MessageThread>
          <TextBubble from="received" message="Is that feature done yet?" />
          <TextBubble
            message="Here you go!"
            url="https://expo.dev/accounts/acme/projects/my-app/simulator-sessions/create?buildId=BUILD_UUID"
          />
        </MessageThread>
        {/* TODO: replace placeholder with image */}
        <SlideImage
          source={{ uri: "https://placehold.co/1200x675/png?text=Image" }}
          height={400}
        />
      </TitledSlide>
    ),
    () => (
      <TitledSlide title="agent-device + Simulators">
        <CodeSnippet
          code={`# start a simulator with your build, driven by agent-device
$ eas simulator:start --platform ios \\
    --type agent-device \\
    --build-id <dev-build-id>`}
        />
        {/* TODO: point to a recorded simulator session */}
        <SlideLink
          title="Watch a simulator session"
          url="https://expo.dev"
          showArrow
        />
      </TitledSlide>
    ),
  ],
};

export default presentation;
