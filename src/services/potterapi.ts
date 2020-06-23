const apiUrl = "https://www.potterapi.com/v1";

export type House = "Ravenclaw" | "Slytherin" | "Gryffindor" | "Hufflepuff";

export async function getSortingHat(): Promise<House> {
  return fetch(`${apiUrl}/sortingHat`).then((response) => {
    return response.json();
  });
}
