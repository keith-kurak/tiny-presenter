import { Stack } from "expo-router";

import { PRESENTATIONS } from "@/presentations";

export function generateStaticParams() {
  return Object.keys(PRESENTATIONS).map((presentation) => ({ presentation }));
}

export default function PresentationLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }} />
  );
}
