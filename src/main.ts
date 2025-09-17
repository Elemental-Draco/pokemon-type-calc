import 'choices.js/public/assets/styles/choices.min.css';
import Choices from 'choices.js';
import { PokemonTypes, Types } from "./types";
import { calculateEffectiveness } from "./calculator";



console.log(calculateEffectiveness("Fire", PokemonTypes.Bug))