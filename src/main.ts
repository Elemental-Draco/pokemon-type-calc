import 'choices.js/public/assets/styles/choices.min.css';
// import Choices from 'choices.js';
import {PokemonTypes} from "./types";
import type { PokemonType } from './types';
import { calculateEffectiveness } from "./calculator";

// get the select inputs and effectiveness paragraph from the page
const attackInput = document.getElementById("atk-input") as HTMLSelectElement;
const defenseInputOne = document.getElementById("def-input-1") as HTMLSelectElement;
const defenseInputTwo = document.getElementById("def-input-2") as HTMLSelectElement;
const effectivenessHolder = document.getElementById("effectiveness-result") as HTMLParagraphElement;
const selects = document.querySelectorAll("select");

// console.log(calculateEffectiveness(attackInput.value, PokemonTypes.Normal))
window.addEventListener('load', () => {
    updateResults();
    
})

selects.forEach(select => {
    select.addEventListener('change', () => {
        updateResults();
    })
})

function updateResults ():void {
    const type1 = defenseInputOne.value;
    const type2 = defenseInputTwo.value;
    const defender1 = PokemonTypes[type1 as PokemonType]
    const defender2 = PokemonTypes[type2 as PokemonType]

    effectivenessHolder.innerText = calculateEffectiveness(attackInput.value, defender1, defender2)
}
