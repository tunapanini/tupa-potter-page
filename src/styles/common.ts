import { css } from "@emotion/core";

import { rotating as rotatingKeyframes } from "./keyframes";
import { Theme } from "./themes";

export const button = (theme: Theme) => css`
  label: button;
  appearance: none;
  background: none;
  font-size: 32px;
  padding-left: 12px;
  padding-right: 12px;
  outline: none;
  border: 2px solid transparent;
  color: ${theme.colors.textWhite[0]};
  padding-bottom: 4px;
  cursor: pointer;
  background-color: ${theme.colors.primary[0]};
  border-radius: 2px;
  transition: all 0.15s;
  &:hover,
  &:focus {
    border: 2px solid ${theme.colors.secondary[0]};
  }
  &:active {
    background-color: ${theme.colors.accent};
  }
`;

export const row = css`
  label: row;
  display: flex;
  align-items: center;
  justify-content: center;
  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const value = css`
  label: value;
  font-size: 78px;
  padding-left: 16px;
  padding-right: 16px;
  margin-top: 2px;
  font-family: "Courier New", Courier, monospace;
`;

export const rotating = css`
  animation: ${rotatingKeyframes} 2s linear infinite;
`;

export const fontHarryP = css`
  font-family: HarryP;
`;
