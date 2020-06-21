import { css } from "@emotion/core";

import { button } from "styles/common";

const row = css`
  display: flex;
  align-items: center;
  justify-content: center;

  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

const value = css`
  font-size: 78px;
  padding-left: 16px;
  padding-right: 16px;
  margin-top: 2px;
  font-family: "Courier New", Courier, monospace;
`;

const textbox = css`
  font-size: 32px;
  padding: 2px;
  width: 64px;
  text-align: center;
  margin-right: 8px;
`;

const asyncButton = css`
  ${button};
  position: relative;
  margin-left: 8px;
  &:after {
    content: "";
    background-color: rgba(112, 76, 182, 0.15);
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    opacity: 0;
    transition: width 1s linear, opacity 0.5s ease 1s;
  }
  &:active:after {
    width: 0%;
    opacity: 1;
    transition: 0s;
  }
`;
export default {
  row,
  value,
  button,
  textbox,
  asyncButton,
};
