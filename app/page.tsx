import { PokemonGrid } from "@/components/pokemon-grid";
import { getPokemon, getPokemonList } from "@/lib/pokemonAPI";

export default async function Home() {
  const pokemonList = await getPokemonList();

  return <PokemonGrid pokemonList={pokemonList} />;
}
