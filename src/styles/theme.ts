import { Interpolation, InterpolationWithTheme } from "@emotion/core";

export interface Theme {}

export type ThemeStyles = {
  [key: string]: InterpolationWithTheme<Theme> | Interpolation;
};

const theme: Theme = {};

export default theme;
