import cdmx2026 from "./cdmx-2026";
import promptingExpo55 from "./prompting-expo-55";
import type { Presentation } from "./types";

export type { Presentation } from "./types";
export { findEnabledSlide } from "./types";

// Keys are the URL slugs: /[presentation]/[slide]
export const PRESENTATIONS: Record<string, Presentation> = {
  "prompting-expo-55": promptingExpo55,
  "cdmx-2026": cdmx2026,
};
