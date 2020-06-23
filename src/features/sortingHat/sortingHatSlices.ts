import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { AppThunk, RootState } from "../../app/store";

import { setTheme } from "features/theme/themeSlices";
import { getSortingHat } from "services/potterapi";

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
  },
});

export const { setSortingHat, setIsLoading } = sortingHatSlice.actions;

export const setSortingHatAsync = (): AppThunk => (dispatch) => {
  dispatch(setIsLoading(true));
  getSortingHat().then((value) => {
    dispatch(setSortingHat(value));
    dispatch(setIsLoading(false));
    dispatch(setTheme(value));
  });
};

export const selectSortingHat = (state: RootState) => state.sortingHat.value;
export const selectSortingHatIsLoading = (state: RootState) =>
  state.sortingHat.isLoading;

export default sortingHatSlice.reducer;
