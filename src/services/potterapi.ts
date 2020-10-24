import { Observable } from "rxjs";
import { ajax } from "rxjs/ajax";

export type HouseName = "Ravenclaw" | "Slytherin" | "Gryffindor" | "Hufflepuff";

export type House = {
  _id: string;
  colors: string[];
  founder: string;
  headOfHouse: string;
  houseGhost: string;
  mascot: string;
  members: string[]; // FIXME: string or {_id, name}
  name: HouseName;
  school: string;
  values: string[];
};

class Potterapi {
  #apiUrl: string;
  #apiKey: string;

  constructor() {
    this.#apiUrl = process.env.REACT_APP_POTTER_API_URL!;
    this.#apiKey = process.env.REACT_APP_POTTER_API_KEY!;
  }

  getSortingHat = (): Observable<HouseName> =>
    ajax.getJSON(`${this.#apiUrl}/sortingHat`);

  getHouses = (): Observable<House[]> => ajax.getJSON(`${this.#apiUrl}/houses`);
}

export default new Potterapi();
