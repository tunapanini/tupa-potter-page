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
    const response = fetch(`${this.#apiUrl}/sortingHat`);
    return (await response).json();
  }

  async getHouses(): Promise<House[]> {
    const response = fetch(`${this.#apiUrl}/houses?key=${this.#apiKey}`);
    return (await response).json();
  }
}

export default new Potterapi();
