import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { Epic, ofType } from "redux-observable";
import { defer, of } from "rxjs";
import { catchError, map, switchMapTo, throttleTime } from "rxjs/operators";

import { Dependencies, RootState } from "app/store";

import { House } from "services/potterapi";

interface HouseState {
  houses: House[];
  error: Error | null;
}

const initialState: HouseState = {
  houses: [],
  error: null,
};

export const houseSlice = createSlice({
  name: "house",
  initialState,
  reducers: {
    fetchHousesFulfilled: (state, action: PayloadAction<House[]>) => {
      state.houses = action.payload;
      state.error = null;
    },
    fetchHousesRejected: (state, action: PayloadAction<Error>) => {
      state.houses = [];
      state.error = action.payload;
    },
    fetchHouses: () => {},
  },
});

export const {
  fetchHousesFulfilled,
  fetchHouses,
  fetchHousesRejected,
} = houseSlice.actions;

export const fetchHousesEpic: Epic = (
  action$,
  state$,
  { potterapi }: Dependencies
) =>
  action$.pipe(
    ofType(fetchHouses.type),
    throttleTime(1000),
    switchMapTo(
      defer(() => potterapi.getHouses()).pipe(
        map((value) => fetchHousesFulfilled(value)),
        catchError((error) => of(fetchHousesRejected(error)))
      )
    )
  );

export const selectHouses = (state: RootState) => state.house.houses;

export const selectHousesError = (state: RootState) => state.house.error;

export default houseSlice.reducer;
