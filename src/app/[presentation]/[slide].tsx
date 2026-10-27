import { Redirect, useLocalSearchParams } from "expo-router";

import { SlideContainer } from "@/components/SlideContainer";
import { PRESENTATIONS } from "@/presentations";

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

  return (
    <SlideContainer
      presentation={presentation}
      backSlide={number > 1 ? number - 1 : undefined}
      nextSlide={number < deck.slides.length ? number + 1 : undefined}
    >
      <Slide />
    </SlideContainer>
  );
}
