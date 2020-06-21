const apiUrl = "https://www.potterapi.com/v1";

export async function getSortingHat() {
  return fetch(`${apiUrl}/sortingHat`).then((response) => {
    return response.json();
  });
}
