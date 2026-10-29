import { CodeSnippet } from "@/components/CodeSnippet";
import SlideImage from "@/components/SlideImage";
import { SlideLink } from "@/components/SlideLink";
import SlideVideo from "@/components/SlideVideo";
import { Stagger } from "@/components/Stagger";
import { MessageThread, TextBubble } from "@/components/TextBubble";
import { TitleSlide } from "@/components/TitleSlide";
import { TitledSlide } from "@/components/TitledSlide";
import { disabled, type Presentation } from "../types";

const presentation: Presentation = {
  title: "CDMX 2026",
  logo: require("./assets/logo.png"),
  // From the conference theme: artwork deep violet + calaca lilac
  theme: {
    background: "#552a6b",
    outline: "#c7add9",
  },
  slides: [
    () => <TitleSlide title="CDMX 2026" subtitle="Coming soon" />,
    () => (
      <SlideImage
        source={require("./assets/social-graphic-2.png")}
        height={500}
      />
    ),
    disabled(() => (
      <>
        <SlideImage
          source={require("./assets/wsl.gif")}
          height={400}
        />
        <TitleSlide title="expo.fyi/wsl" />
      </>
    )),
    () => (
      <SlideImage
        source={require("./assets/social-graphic.png")}
        height={500}
      />
    ),
    () => (
      <TitledSlide title="Agent + Expo Go">
        <SlideVideo
          source={require("./assets/phone-demo.mp4")}
          height={500}
          frame={{ aspectRatio: 1080 / 2424 }}
        />
        <CodeSnippet
          code={`$ npx create-expo-app\n$ claude --dangerously-skip-permissions`}
        />
      </TitledSlide>
    ),
    () => (
      <>
        <TitleSlide title="docs.expo.dev/agents" />
        <SlideImage
          source={require("./assets/expo-skills.gif")}
          height={400}
        />
        <CodeSnippet
          code={`$ claude plugin install expo@claude-plugins-official`}
        />
      </>
    ),
    () => (
      <TitledSlide title="Android + Expo UI">
        <SlideVideo
          source={require("./assets/android-expo-ui.mp4")}
          height={500}
          frame={{ aspectRatio: 1080 / 2424 }}
        />
      </TitledSlide>
    ),
    () => (
      <TitledSlide title="@expo/agent-cli">
        <SlideVideo source={require("./assets/agent-cli.mp4")} height={400} />
        <CodeSnippet code={`$ npx @expo/agent-cli status`} />
      </TitledSlide>
    ),
    () => (
      <TitledSlide title="Expo MCP">
        <Stagger interval={7000}>
          <SlideVideo source={require("./assets/expo-mcp.mp4")} height={500} />
          <SlideVideo source={require("./assets/build-crash.mp4")} height={500} />
          <SlideImage
            source={require("./assets/build-crash-diagnosis.png")}
            height={500}
          />
        </Stagger>
      </TitledSlide>
    ),
    () => (
      <TitledSlide title="Development build testing">
        <SlideVideo
          source={require("./assets/android-looking-good.mp4")}
          height={500}
          frame={{ aspectRatio: 1080 / 2424 }}
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
        <Stagger interval={5000}>
          <MessageThread>
            <TextBubble from="received" message="Is that feature done yet?" />
            <TextBubble
              message="Here you go!"
              url="https://expo.dev/accounts/acme/projects/my-app/simulator-sessions/create?buildId=BUILD_UUID"
            />
          </MessageThread>
          <SlideVideo
            source={require("./assets/ios-simulator-preview.mp4")}
            height={500}
          />
        </Stagger>
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
        <SlideLink
          title="Watch a simulator session"
          url="https://expo.dev/accounts/keithco/projects/pancake-theory/simulator-sessions/01a1889c-c0e6-7617-bfd6-5d301ac6f595"
          showArrow
        />
      </TitledSlide>
    ),
    () => (
      <TitledSlide title="Orchestrators + simulators">
        <SlideImage
          source={require("./assets/orchestrators-simulators.png")}
          height={500}
        />
      </TitledSlide>
    ),
    () => (
      <TitledSlide title="Agentic Workflows: Validation">
        <SlideVideo
          source={require("./assets/agent-verify-workflow.mp4")}
          height={400}
        />
        <SlideLink
          title="Agent test evidence"
          url="https://pancaketheory--pr-82-verify.expo.app/"
          showArrow
        />
      </TitledSlide>
    ),
    () => (
      <TitledSlide title="Agentic Workflows: Triage + Fix">
        <SlideImage
          source={require("./assets/agentic-workflow.png")}
          height={500}
        />
      </TitledSlide>
    ),
    () => (
      <TitledSlide title="TestFlight workflow trigger">
        <Stagger interval={6000}>
          <CodeSnippet
            language="yaml"
            code={`name: TestFlight feedback intake

on:
  app_store_connect:
    beta_feedback:
      types:
        - screenshot

jobs:
  intake:
    name: 1. File issue and dispatch expo-bot
    environment: production
    env:
      FEEDBACK_KIND: screenshot
      ASC_FEEDBACK_ID: \${{ app_store_connect.beta_feedback.id }}
      GH_REPO: keith-kurak/brooks-expo
      BASE_BRANCH: main`}
          />
          <SlideImage
            source={require("./assets/triage-no-issue.gif")}
            height={500}
          />
        </Stagger>
      </TitledSlide>
    ),
    () => (
      <TitledSlide title="Agent sessions">
        <CodeSnippet
          language="yaml"
          code={`jobs:
  fix_lint:
    type: agent
    params:
      agent_kind: claude-code
      prompt: Fix the lint errors on main and open a pull request with the fix.
      max_duration_seconds: 1800
      github_access: write   # none | read | write, default: read
      limits:
        builds: 2`}
        />
      </TitledSlide>
    ),
    () => (
      <TitledSlide title="Expo Modules API">
        <CodeSnippet
          language="swift"
          code={`@ExpoModule
public final class MyModule {
  @JS
  func add(a: Double, b: Double) -> Double {
    return a + b
  }

  @JS
  func fetchValue(key: String) async throws -> String {
    return try await store.read(key)
  }

  @JS
  var ready: Bool {
    return isReady
  }
}`}
        />
      </TitledSlide>
    ),
    () => (
      <SlideImage
        source={require("./assets/beach-agents.png")}
        height={500}
      />
    ),
    () => (
      <>
        <TitleSlide title="¡Muchas gracias!" />
        {/* Made from the link below with toqr (installed with @expo/cli) */}
        <SlideImage
          source={require("./assets/resources-qr.svg")}
          height={260}
        />
        <SlideLink
          title="Slide resources"
          url="https://github.com/keith-kurak/cdmx-2026-demo-app"
          showArrow
        />
      </>
    ),
  ],
};

export default presentation;
