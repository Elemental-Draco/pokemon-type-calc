import 'choices.js/public/assets/styles/choices.min.css';
import {PokemonTypes} from "./types";
import type { PokemonType } from './types';
import { calculateEffectiveness } from "./calculator";

// get the select inputs and effectiveness paragraph from the page
const attackInput = document.getElementById("atk-input") as HTMLSelectElement;
const defenseInputOne = document.getElementById("def-input-1") as HTMLSelectElement;
const defenseInputTwo = document.getElementById("def-input-2") as HTMLSelectElement;
const effectivenessHolder = document.getElementById("effectiveness-result") as HTMLParagraphElement;
const selects = document.querySelectorAll("select");

// update effectiveness upon page loading
window.addEventListener('load', () => {
    updateResults();
})

// each select will update the result after changing
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

    const damageResult: string = calculateEffectiveness(attackInput.value, defender1, defender2)

    // reset classlist and set correct text
    effectivenessHolder.classList = "";
    effectivenessHolder.offsetWidth; 
    effectivenessHolder.innerText = damageResult;

    //apply correct animation color
    if(damageResult === "It's Super Effective!") {
        effectivenessHolder.classList.add("animated-text", "animated-super");
    }
    else if(damageResult === "It's Not Very Effective...") {
    effectivenessHolder.classList.add("animated-text", "animated-not-very");
    }
    else if(damageResult === "It Has No Effect...") {
        effectivenessHolder.classList.add("animated-text", "animated-immune");
    }
    else {
        effectivenessHolder.classList.add("animated-text", "animated-neutral");
    }
}
