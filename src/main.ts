import { PokemonTypes } from "./types";
import { calculateEffectiveness } from "./calculator";


console.log(calculateEffectiveness("Psychic", PokemonTypes.Dark, PokemonTypes.Dragon))