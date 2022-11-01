import { createContext } from "react";

type ParseThemes = string[];
type SetThemes = (themes: string[]) => void;
const localColors = localStorage.getItem("theme-color");
const themes = JSON.parse(
  localColors || '["#ffc7cd", "#fff0f1"]'
) as ParseThemes;
const setThemes = (() => {}) as SetThemes;

const ThemeContext = createContext<[ParseThemes, SetThemes]>([
  themes,
  setThemes,
]);

export default ThemeContext;
