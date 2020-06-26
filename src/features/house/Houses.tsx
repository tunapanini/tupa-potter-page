/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectHouses, setHousesAsync } from "./houseSlice";

import ResponsiveSquare from "components/ReponsiveSquare";
import { fontHarryP } from "styles/common";
import { Theme, withTheme } from "styles/themes";

const styles = {
  full: css`
    width: 100%;
    height: 100%;
  `,
  wrapper: css`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 16px;
  `,
  houseLink: (theme: Theme) => css`
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    background-color: ${theme.colors.primary[0]};
    color: ${theme.colors.textWhite};
    font-size: calc(100vw / 16);
    transform: 1s background-color;
    &:hover {
      background-color: ${theme.colors.secondary[0]};
    }
  `,
};

function Houses() {
  const houses = useSelector(selectHouses);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(setHousesAsync());
  });

  return (
    <div css={[styles.full, styles.wrapper]}>
      {houses.map((house) => (
        <ResponsiveSquare innerCss={[styles.full]} key={house._id} width="25%">
          <span css={withTheme([fontHarryP, styles.full, styles.houseLink])}>
            {house.name}
          </span>
        </ResponsiveSquare>
      ))}
    </div>
  );
}

export default Houses;
