/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
  selectCount,
} from "./counterSlice";
import styles from "./counterStyles";

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");

  return (
    <div>
      <div css={styles.row}>
        <button
          aria-label="Increment value"
          css={styles.button}
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <span css={styles.value}>{count}</span>
        <button
          aria-label="Decrement value"
          css={styles.button}
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
      <div css={styles.row}>
        <input
          aria-label="Set increment amount"
          css={styles.textbox}
          onChange={(e) => setIncrementAmount(e.target.value)}
          value={incrementAmount}
        />
        <button
          css={styles.button}
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        >
          Add Amount
        </button>
        <button
          css={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
        >
          Add Async
        </button>
      </div>
    </div>
  );
}
