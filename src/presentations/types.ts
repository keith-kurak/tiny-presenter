import type { ImageProps } from "expo-image";
import { createElement, type ComponentType } from "react";

import type { SlideTheme } from "@/hooks/useSlideTheme";

export type Slide = ComponentType & { disabled?: boolean };

export interface Presentation {
  title: string;
  slides: Slide[];
  // Shown in the top left corner of every slide
  logo?: ImageProps["source"];
  // Colors to use instead of the defaults
  theme?: Partial<SlideTheme>;
}

// Keeps a slide in the deck so later slide numbers don't change, but
// navigation skips over it
export function disabled(slide: ComponentType): Slide {
  return Object.assign(() => createElement(slide), { disabled: true });
}

// Returns the 1-based number of the first enabled slide found by stepping
// from `from` in `step` direction (1 = forward, -1 = back)
export function findEnabledSlide(
  deck: Presentation,
  from: number,
  step: 1 | -1,
): number | undefined {
  for (let n = from; n >= 1 && n <= deck.slides.length; n += step) {
    if (!deck.slides[n - 1].disabled) {
      return n;
    }
  }
  return undefined;
}
