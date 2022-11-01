import { createContext } from "react";

const themes = "";

const ThemeContext = createContext<[string, (themes: string[]) => void]>([
  themes,
  () => {},
]);

export default ThemeContext;
