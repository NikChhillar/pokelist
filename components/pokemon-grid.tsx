"use client";

import { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { PokemonCard } from "./pokemon-card";


interface PokemonGridProps {
  pokemonList: any;
}

export function PokemonGrid({ pokemonList }: PokemonGridProps) {
  const [search, setSearch] = useState("");

  // console.log(pokemonList);

  const searchFilter = (pokemonList: any) => {
    return pokemonList.filter((pokemon: any) =>
      pokemon.name.toLowerCase().includes(search.toLowerCase())
    );
  };

  const filteredPokemonList = searchFilter(pokemonList);

  return (
    <>
      <div>
        <h3 className="text-2xl py-6 text-center">Search For Your Pokemon!</h3>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="pokemonName">Pokemon Name</Label>
          <Input
            type="text"
            value={search}
            autoComplete="off"
            id="pokemonName"
            placeholder="Pikachu..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <h3 className="text-3xl pt-12 pb-6 text-center">Pokemons</h3>
      </div>
      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 lg:text-left">
        {filteredPokemonList.map((pokemon: any) => {
          return (
            <PokemonCard name={pokemon.name} key={pokemon.name + "Card"} />
          );
        })}
      </div>
    </>
  );
}
