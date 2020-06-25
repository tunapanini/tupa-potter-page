import { SerializedStyles } from "@emotion/core";

import { HouseName } from "./../services/potterapi";

interface ThemeColor {
  primary: string[];
  secondary: string[];
  accent: string[];
  accentDark: string[];
  textWhite: string[];
  textBlack: string[];
  textPrimary: string[];
  background: string[];
}

export interface Theme {
  colors: ThemeColor;
}

const defaultTheme: Theme = {
  colors: {
    primary: ["#555555"],
    secondary: ["#333333"],
    accent: ["#000050"],
    accentDark: ["#121212"],
    textWhite: ["#ffffff"],
    textBlack: ["#000000"],
    textPrimary: ["#ffffff"],
    background: ["#fafafa"],
  },
};

const gryffindor: Theme = {
  colors: {
    ...defaultTheme.colors,
    primary: ["#740001"],
    secondary: ["#ae0001"],
    accent: ["#eeba30"],
    accentDark: ["#d3a625"],
  },
};

const ravenclaw: Theme = {
  colors: {
    ...defaultTheme.colors,
    primary: ["#0e1a40"],
    secondary: ["#222f5b"],
    accent: ["#5d5d5d"],
    accentDark: ["#946b2d"],
  },
};

const hufflepuff: Theme = {
  colors: {
    ...defaultTheme.colors,
    primary: ["#ecb939"],
    secondary: ["#f0c75e"],
    accent: ["#726255"],
    accentDark: ["#372e29"],
  },
};

const slytherin: Theme = {
  colors: {
    ...defaultTheme.colors,
    primary: ["#284d16"],
    secondary: ["#1d3c0e"],
    accent: ["#42473f"],
    accentDark: ["#232721"],
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

export const getThemeByHouse = (house: HouseName) =>
  ({
    Ravenclaw: ravenclaw,
    Slytherin: slytherin,
    Hufflepuff: hufflepuff,
    Gryffindor: gryffindor,
  }[house]);

export default {
  default: defaultTheme,
  gryffindor,
  ravenclaw,
  hufflepuff,
  slytherin,
};
