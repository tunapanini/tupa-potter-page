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

function SortingHat() {
  const dispatch = useDispatch();
  const sortingHat = useSelector(selectSortingHat);
  const isLoading = useSelector(selectSortingHatIsLoading);

  useEffect(() => {
    if (!sortingHat) {
      dispatch(setSortingHatAsync());
    }
  }, [dispatch, sortingHat]);

  return (
    <div>
      <div css={styles.row}>
        <LoadingContainer
          css={css`
            min-height: 90px;
          `}
          isLoading={isLoading}
        >
          <span css={styles.value}>{sortingHat}</span>
        </LoadingContainer>
      </div>
      <div css={styles.row}>
        <button
          css={styles.button}
          onClick={() => dispatch(setSortingHatAsync())}
        >
          Randomize
        </button>
      </div>
    </div>
  );
}

export default SortingHat;
