/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  selectSortingHat,
  selectSortingHatIsLoading,
  setSortingHatAsync,
} from "./sortingHatSlices";

import styles from "./sortingHatStyles";

import LoadingContainer from "components/LoadingContainer";
import { fontHarryP } from "styles/common";
import { withTheme } from "styles/themes";

function SortingHat() {
  const dispatch = useDispatch();
  const sortingHat = useSelector(selectSortingHat);
  const isLoading = useSelector(selectSortingHatIsLoading);

  useEffect(() => {
    if (!sortingHat) {
      dispatch(setSortingHatAsync());
    }
  }, [dispatch, sortingHat]);

  const handleClick = () => dispatch(setSortingHatAsync());

  return (
    <div>
      <div css={styles.row}>
        <LoadingContainer
          css={css`
            min-height: 90px;
          `}
          isLoading={isLoading}
        >
          <span css={[styles.value, fontHarryP]}>{sortingHat}</span>
        </LoadingContainer>
      </div>
      <div css={styles.row}>
        <button css={withTheme([styles.button])} onClick={handleClick}>
          Randomize
        </button>
      </div>
    </div>
  );
}

export default SortingHat;
