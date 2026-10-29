import { Redirect, useLocalSearchParams } from "expo-router";

import { SlideContainer } from "@/components/SlideContainer";
import {
  DEFAULT_SLIDE_THEME,
  SlideThemeContext,
} from "@/hooks/useSlideTheme";
import { findEnabledSlide, PRESENTATIONS } from "@/presentations";

export function generateStaticParams({
  params,
}: {
  params: { presentation: string };
}) {
  return PRESENTATIONS[params.presentation].slides.map((_, index) => ({
    slide: String(index + 1),
  }));
}

export default function SlideScreen() {
  const { presentation, slide } = useLocalSearchParams<{
    presentation: string;
    slide: string;
  }>();

  const deck = PRESENTATIONS[presentation];
  if (!deck) {
    return <Redirect href="/" />;
  }

  // Slide numbers in the URL are 1-based
  const number = Number(slide);
  const Slide = Number.isInteger(number) ? deck.slides[number - 1] : undefined;
  if (!Slide) {
    return (
      <Redirect
        href={{
          pathname: "/[presentation]/[slide]",
          params: { presentation, slide: "1" },
        }}
      />
    );
  }

  // A disabled slide forwards to the next enabled one (or the previous one
  // if it's at the end of the deck)
  if (Slide.disabled) {
    const target =
      findEnabledSlide(deck, number + 1, 1) ??
      findEnabledSlide(deck, number - 1, -1);
    if (!target) {
      return <Redirect href="/" />;
    }
    return (
      <Redirect
        href={{
          pathname: "/[presentation]/[slide]",
          params: { presentation, slide: String(target) },
        }}
      />
    );
  }

  return (
    <SlideThemeContext.Provider
      value={{ ...DEFAULT_SLIDE_THEME, ...deck.theme }}
    >
      <SlideContainer
        presentation={presentation}
        logo={deck.logo}
        backSlide={findEnabledSlide(deck, number - 1, -1)}
        nextSlide={findEnabledSlide(deck, number + 1, 1)}
      >
        <Slide />
      </SlideContainer>
    </SlideThemeContext.Provider>
  );
}
