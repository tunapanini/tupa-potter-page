import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectHouses, setHousesAsync } from "./houseSlice";

function Houses() {
  const houses = useSelector(selectHouses);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(setHousesAsync());
  });

  return (
    <div>
      <ul>
        {houses.map((house) => (
          <li key={house._id}>{house.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Houses;
