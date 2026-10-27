import { Redirect, useLocalSearchParams } from "expo-router";

import { PRESENTATIONS } from "@/presentations";

export default function PresentationIndex() {
  const { presentation } = useLocalSearchParams<{ presentation: string }>();

  if (!PRESENTATIONS[presentation]) {
    return <Redirect href="/" />;
  }

  return (
    <Redirect
      href={{
        pathname: "/[presentation]/[slide]",
        params: { presentation, slide: "1" },
      }}
    />
  );
}
