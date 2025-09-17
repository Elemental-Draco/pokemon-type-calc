// import { Types} from "./types"
import type { Type } from "./types"

const damageMessages = {
    superEffective: "It's Super Effective!", 
    notVeryEffective: "It's Not Very Effective...",
    immune: "It Has No Effect...",
    neutral: "It Deals Nuetral Damage.",
}

// function to compare each type 
function compareDamage(attack:string, defender:Type): number {
    if (defender.immunity?.has(attack)) {
        return 0;
    }
    else if (defender.resistance.has(attack)) {
        return 0.5;
    }
    else if(defender.weakness.has(attack)) {
        return 2;
    }
    else {
        return 1;
    }
}

export function calculateEffectiveness(attacker:string, firstDef:Type, secondDef:Type) :string {
    let damage:number = 1;
    damage *= compareDamage(attacker, firstDef);
    damage *= compareDamage(attacker, secondDef);
    
    if (damage == 0) {
        return damageMessages.immune;
    }
    else if (damage < 1){
        return damageMessages.notVeryEffective;
    }
    else if(damage > 1) {
        return damageMessages.superEffective;
    }
    else {
        return damageMessages.neutral;
    }
}