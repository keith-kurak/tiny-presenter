import { BulletsSlide } from "@/components/BulletsSlide";
import { CodeSnippet } from "@/components/CodeSnippet";
import { GitBranchSync } from "@/components/GitBranchSync";
import SlideImage from "@/components/SlideImage";
import { SlideLink } from "@/components/SlideLink";
import SlideVideo from "@/components/SlideVideo";
import { TitleSlide } from "@/components/TitleSlide";
import type { Presentation } from "../types";

const DEMO_PATH = "/Users/keith/Github/demos/health-logger-sdk55";

const presentation: Presentation = {
  title: "Prompting Your Way Through Expo SDK 55",
  slides: [
    () => (
      <>
        <TitleSlide
          title="Prompting Your Way Through Expo SDK 55"
          image={require("@/assets/prompting-expo-55/upgrade-expo-prompt.png")}
        />
        <GitBranchSync branch="main" filePath={DEMO_PATH} />
      </>
    ),
    () => (
      <>
        <TitleSlide title="1. Upgrade to SDK 55" />
        <CodeSnippet
          code={`/plugin marketplace add expo/skills\n\n/plugin install upgrading-expo`}
        />
        <SlideLink
          url="https://github.com/expo/skills/blob/main/plugins/upgrading-expo/skills/upgrading-expo/SKILL.md"
          title="View the plugin's SKILL file"
        />
      </>
    ),
    () => (
      <>
        <TitleSlide
          title="2. Add native tabs"
          image={require("@/assets/prompting-expo-55/native-tabs.png")}
        />
        <BulletsSlide
          bullets={[
            "Hide tabs",
            "Better keyboard handling",
            "Better safe area handling",
            "Listeners",
          ]}
        />
        <GitBranchSync branch="01-native-tabs" filePath={DEMO_PATH} />
      </>
    ),
    () => (
      <>
        <TitleSlide
          title="3. Reimplement a screen or two in Expo UI"
          image={require("@/assets/prompting-expo-55/expo-ui-prompt.png")}
        />
        <GitBranchSync branch="02.1-expo-ui" filePath={DEMO_PATH} />
      </>
    ),
    () => (
      <>
        <TitleSlide
          title="Better Together"
          subtitle="'Take screenshots to check your design...'"
        />
        <CodeSnippet code={`/plugin install expo-app-design`} />
        <CodeSnippet code={`npx expo install expo-mcp --dev`} />
      </>
    ),
    () => (
      <>
        <TitleSlide title="Hmmm..." />
        <SlideImage
          source={require("@/assets/prompting-expo-55/expo-ui-ios-pass1.png")}
          height={300}
        />
        <SlideImage
          source={require("@/assets/prompting-expo-55/expo-ui-android-pass1.png")}
          height={300}
        />
      </>
    ),
    () => (
      <>
        <TitleSlide
          title="Don't be afraid to just ask..."
          subtitle="'uhh, what if you used ListItems inside of a LazyView?'"
        />
        <SlideLink
          url="https://github.com/expo/skills/pull/29"
          title="Jetpack Compose skills improvements"
        />
      </>
    ),
    () => (
      <>
        <TitleSlide
          title="4. Use Apple Zoom when going from this to that screen"
          subtitle="Native platform shared element transitions!"
        />
        <SlideVideo
          source={require("@/assets/prompting-expo-55/apple-zoom-transition.mp4")}
          height={400}
        />
        <GitBranchSync branch="03-apple-zoom-transitions" filePath={DEMO_PATH} />
      </>
    ),
    () => (
      <>
        <TitleSlide
          title="5. Add a Native UI Toolbar"
          subtitle="Build menus and actions for stack screens"
        />
        <SlideImage
          source={require("@/assets/prompting-expo-55/ios-toolbar.png")}
          height={400}
        />
        <GitBranchSync branch="04-apple-stack-toolbar" filePath={DEMO_PATH} />
      </>
    ),
    () => (
      <>
        <TitleSlide title="No idea? Ask Claude!" />
        <SlideLink
          url="https://developer.apple.com/design/human-interface-guidelines/toolbars/"
          title="Apple's HIG on Toolbars"
        />
        <SlideImage
          source={require("@/assets/prompting-expo-55/ui-toolbar-prompt-1.png")}
          height={350}
        />
        <SlideImage
          source={require("@/assets/prompting-expo-55/ui-toolbar-prompt-2.png")}
          height={350}
        />
      </>
    ),
    () => (
      <>
        <TitleSlide title="6. Turn this screen into a form sheet" />
        <BulletsSlide bullets={["New footer API", "Liquid glass-ready"]} />
        <SlideImage
          source={require("@/assets/prompting-expo-55/form-sheet.png")}
          height={350}
        />
        <GitBranchSync branch="05-form-sheet" filePath={DEMO_PATH} />
      </>
    ),
    () => (
      <>
        <TitleSlide title="7. Use platform colors in place of custom colors" />
        <BulletsSlide
          bullets={[
            "Style your app like the rest of Android with Material You dynamic colors",
            "Drop-in replacement for constants that also auto-reload when changed",
          ]}
        />
        <SlideImage
          source={require("@/assets/prompting-expo-55/material-dynamic-colors.png")}
          height={400}
        />
        <GitBranchSync
          branch="06-material-dynamic-colors"
          filePath={DEMO_PATH}
        />
      </>
    ),
    () => (
      <>
        <TitleSlide title="8. Display these two screens as a SplitView on iPad" />
        <SlideImage
          source={require("@/assets/prompting-expo-55/ios-split-view.png")}
          height={400}
        />
        <GitBranchSync branch="07-split-view" filePath={DEMO_PATH} />
      </>
    ),
    () => (
      <>
        <TitleSlide title="9. Write a workflow" />
        <SlideImage
          source={require("@/assets/prompting-expo-55/workflow.png")}
          height={400}
        />
        <SlideLink
          title="Maestro E2E Workflow"
          url="https://expo.dev/accounts/expo-production/projects/health-logger-sdk55/workflows/019cbfb2-080a-78f5-835f-cb7dba7d98f8"
        />
        <GitBranchSync branch="08-add-a-workflow" filePath={DEMO_PATH} />
      </>
    ),
    () => <TitleSlide title="10. Make this presentation?" />,
    () => (
      <>
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
      </>
    ),
  ],
};

export default presentation;
