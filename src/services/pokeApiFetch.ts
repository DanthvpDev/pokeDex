import type {
  GeneralPokemonList,
  PokemonInfoResponse,
} from "../types/pokeApi.types";

const rootUrl = import.meta.env.VITE_API_ROOT_URL;


function getAllPokemons(): Promise<GeneralPokemonList> {
  return fetch(rootUrl)
    .then((res) =>
      res.ok
        ? res.json()
        : Promise.reject(new Error("Failed to fetch data: " + res.status)),
    )
    .then((data) => data as GeneralPokemonList)
    .catch((error) => {
      console.error("Error fetching data:", error.message);
      throw error;
    });
}

function getPokemon(name: string): Promise<PokemonInfoResponse> {
  const normalizedName = name.toLowerCase().trim();
  if(normalizedName === '') return Promise.reject(new Error("Pokemon name cannot be empty"));
  return fetch(rootUrl + normalizedName)
    .then((res) =>
      res.ok
        ? res.json()
        : Promise.reject(new Error("Failed to fetch data: " + res.status)),
    )
    .then((data) => data as PokemonInfoResponse)
    .catch((error) => {
      console.error("Error fetching data:", error.message);
      throw error;
    });
}

export { getAllPokemons, getPokemon };
