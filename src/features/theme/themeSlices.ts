import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { RootState } from "../../app/store";

import { HouseName } from "services/potterapi";
import themes, { Theme, getThemeByHouse } from "styles/themes";

interface ThemeState {
  value: Theme;
}

const initialState: ThemeState = {
  value: themes.default,
};

export const themeSlice = createSlice({
  name: "currentTheme",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<HouseName>) => {
      state.value = getThemeByHouse(action.payload);
    },
  },
});

export const { setTheme } = themeSlice.actions;

export const selectTheme = (state: RootState) => state.theme.value;

export default themeSlice.reducer;
