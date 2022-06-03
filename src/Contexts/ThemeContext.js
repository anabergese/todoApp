import { createContext } from "react";

const ThemeContext = createContext(["theme-black", () => {}]);

export default ThemeContext;
