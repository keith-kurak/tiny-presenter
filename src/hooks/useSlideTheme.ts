import { createContext, useContext } from "react";

export interface SlideTheme {
  // Fill behind every slide
  background: string;
  // Border around code snippets and framed videos
  outline: string;
}

export const DEFAULT_SLIDE_THEME: SlideTheme = {
  background: "#13151a",
  outline: "#2a2d36",
};

export const SlideThemeContext = createContext(DEFAULT_SLIDE_THEME);

export function useSlideTheme() {
  return useContext(SlideThemeContext);
}
