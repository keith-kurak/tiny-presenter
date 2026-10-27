import type { ComponentType } from "react";

export interface Presentation {
  title: string;
  slides: ComponentType[];
}
