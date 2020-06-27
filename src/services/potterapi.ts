export type HouseName = "Ravenclaw" | "Slytherin" | "Gryffindor" | "Hufflepuff";

export type House = {
  _id: string;
  colors: string[];
  founder: string;
  headOfHouse: string;
  houseGhost: string;
  mascot: string;
  members: string[];
  name: HouseName;
  school: string;
  values: string[];
};

class Potterapi {
  #apiUrl = "https://www.potterapi.com/v1";
  #apiKey: string;

  constructor() {
    this.#apiKey = process.env.REACT_APP_POTTER_API_KEY!;
  }

  async getSortingHat(): Promise<HouseName> {
    const response = await fetch(`${this.#apiUrl}/sortingHat`);
    if (response.ok) {
      return response.json();
    } else {
      throw new Error();
    }
  }

  async getHouses(): Promise<House[]> {
    const response = await fetch(`${this.#apiUrl}/houses?key=${this.#apiKey}`);
    if (response.ok) {
      return response.json();
    } else if (response.status >= 400 && response.status < 500) {
      throw new Error("Bad Request");
    } else {
      throw new Error();
    }
  }
}

export default new Potterapi();
