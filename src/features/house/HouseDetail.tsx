import React from "react";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import { selectHouses } from "./houseSlice";

function HouseDetail() {
  const history = useHistory();
  const { houseId } = useParams();
  const houses = useSelector(selectHouses);
  const house = houses.filter((house) => house._id === houseId)[0];
  return (
    <div>
      <button onClick={() => history.goBack()}>Go Back</button>
      <h1>{house.name}</h1>
      <section>
        <h2>Head of House</h2>
        <p>{house.headOfHouse}</p>
      </section>
      <section>
        <h2>House Ghost</h2>
        <p>{house.houseGhost}</p>
      </section>
      <section>
        <h2>Mascot</h2>
        <p>{house.mascot}</p>
      </section>
      <section>
        <h2>Values</h2>
        <ul>
          {house.values.map((value, index) => (
            <li key={index}>{value}</li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Colors</h2>
        <ul>
          {house.colors.map((color, index) => (
            <li key={index}>{color}</li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Members</h2>
        <ul>
          {house.members.map((member, index) => (
            <li key={index}>{member}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default HouseDetail;
