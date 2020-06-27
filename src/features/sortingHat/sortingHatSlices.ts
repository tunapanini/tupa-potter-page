import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { Epic, ofType } from "redux-observable";
import { concat, defer, of } from "rxjs";
import { mergeMap, switchMapTo } from "rxjs/operators";

import { Dependencies, RootState } from "app/store";

import { setTheme } from "features/theme/themeSlices";

interface SortingHatState {
  value: string;
  isLoading: boolean;
}

const initialState: SortingHatState = {
  value: "",
  isLoading: false,
};

export const sortingHatSlice = createSlice({
  name: "sortingHat",
  initialState,
  reducers: {
    setSortingHat: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setSortingHatAsync: () => {},
  },
});

export const {
  setSortingHat,
  setIsLoading,
  setSortingHatAsync,
} = sortingHatSlice.actions;

export const setSortingHatEpic: Epic = (
  action$,
  state$,
  { potterapi }: Dependencies
) =>
  action$.pipe(
    ofType(setSortingHatAsync.type),
    switchMapTo(
      concat(
        of(setIsLoading(true)),
        defer(() => potterapi.getSortingHat()).pipe(
          mergeMap((value) =>
            of(setSortingHat(value), setIsLoading(false), setTheme(value))
          )
        )
      )
    )
  );

export const selectSortingHat = (state: RootState) => state.sortingHat.value;
export const selectSortingHatIsLoading = (state: RootState) =>
  state.sortingHat.isLoading;

export default sortingHatSlice.reducer;
