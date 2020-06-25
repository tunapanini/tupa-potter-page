import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { Epic, ofType } from "redux-observable";
import { from, of } from "rxjs";
import { mergeMap, switchMapTo } from "rxjs/operators";

import { Dependencies, RootState } from "app/store";

import { House } from "services/potterapi";

interface HouseState {
  houses: House[];
}

const initialState: HouseState = {
  houses: [],
};

export const houseSlice = createSlice({
  name: "house",
  initialState,
  reducers: {
    setHouses: (state, action: PayloadAction<House[]>) => {
      state.houses = action.payload;
    },
    setHousesAsync: () => {},
  },
});

export const { setHouses, setHousesAsync } = houseSlice.actions;

export const setHousesEpic: Epic = (
  action$,
  state$,
  { potterapi }: Dependencies
) =>
  action$.pipe(
    ofType(setHousesAsync.type),
    switchMapTo(
      from(potterapi.getHouses()).pipe(
        mergeMap((value) => of(setHouses(value)))
      )
    )
  );

export const selectHouses = (state: RootState) => state.house.houses;

export default houseSlice.reducer;
