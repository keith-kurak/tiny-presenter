import { TitleSlide } from "@/components/TitleSlide";
import type { Presentation } from "../types";

const presentation: Presentation = {
  title: "CDMX 2026",
  slides: [
    () => <TitleSlide title="CDMX 2026" subtitle="Coming soon" />,
  ],
};

export default presentation;
