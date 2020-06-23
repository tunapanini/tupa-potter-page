import { SerializedStyles } from "@emotion/core";

interface ThemeColor {
  primary: string[];
  secondary: string[];
  accent: string[];
  accentDark: string[];
  textPrimary: string[];
  background: string[];
}

export interface Theme {
  colors: ThemeColor;
}

const theme: Theme = {
  colors: {
    primary: ["#000050"],
    secondary: ["#753300"],
    accent: ["#000000"],
    accentDark: ["#000000"],
    textPrimary: ["#ffffff"],
    background: ["#121212"],
  },
};

export const griffindor: Theme = {
  colors: {
    primary: ["#740001"],
    secondary: ["#ae0001"],
    accent: ["#eeba30"],
    accentDark: ["#d3a625"],
    textPrimary: ["#000000"],
    background: ["#121212"],
  },
};

// Fixed in emotion 11 (https://github.com/emotion-js/emotion/issues/1606)
// css={withTheme([(theme) => {}, {}])} => css={[(theme) => {}, {}]}
export const withTheme = (
  args: Array<SerializedStyles | ((theme: Theme) => SerializedStyles)>
) => {
  return (theme: Theme) => [
    ...args.map((arg) => {
      if (typeof arg === "function") {
        return arg(theme);
      }
      return arg;
    }),
  ];
};

export default theme;
