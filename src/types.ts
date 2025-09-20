export interface Type {
    weakness: Set<string>;
    resistance: Set<string>;
    immunity?: Set<string>;
}

export const Types = [
  "Normal","Fire","Water","Grass","Electric","Rock","Ground","Ice","Steel",
  "Bug","Fairy","Ghost","Dark","Psychic","Fighting","Dragon","Flying","Poison",
] as const; 

export type PokemonType = typeof Types[number];

export const PokemonTypes: Record<PokemonType, Type> = {
  Normal: {
    weakness: new Set(["Fighting"]),
    resistance: new Set([]),
    immunity: new Set(["Ghost"]),
  },
  Fire: {
    weakness: new Set(["Water", "Ground", "Rock"]),
    resistance: new Set(["Fire", "Grass", "Ice", "Bug", "Steel", "Fairy"]),
  },
  Water: {
    weakness: new Set(["Electric", "Grass"]),
    resistance: new Set(["Fire", "Water", "Ice", "Steel"]),
  },
  Grass: {
    weakness: new Set(["Fire", "Ice", "Poison", "Flying", "Bug"]),
    resistance: new Set(["Water", "Electric", "Grass", "Ground"]),
  },
  Electric: {
    weakness: new Set(["Ground"]),
    resistance: new Set(["Electric", "Flying", "Steel"]),
  },
  Rock: {
    weakness: new Set(["Water", "Grass", "Fighting", "Ground", "Steel"]),
    resistance: new Set(["Normal", "Fire", "Poison", "Flying"]),
  },
  Ground: {
    weakness: new Set(["Water", "Grass", "Ice"]),
    resistance: new Set(["Poison", "Rock"]),
    immunity: new Set(["Electric"]),
  },
  Ice: {
    weakness: new Set(["Fire", "Fighting", "Rock", "Steel"]),
    resistance: new Set(["Ice"]),
  },
  Steel: {
    weakness: new Set(["Fire", "Fighting", "Ground"]),
    resistance: new Set([
      "Normal",
      "Grass",
      "Ice",
      "Flying",
      "Psychic",
      "Bug",
      "Rock",
      "Dragon",
      "Steel",
      "Fairy",
    ]),
    immunity: new Set(["Poison"]),
  },
  Bug: {
    weakness: new Set(["Fire", "Flying", "Rock"]),
    resistance: new Set(["Grass", "Fighting", "Ground"]),
  },
  Fairy: {
    weakness: new Set(["Poison", "Steel"]),
    resistance: new Set(["Fighting", "Bug", "Dark"]),
    immunity: new Set(["Dragon"]),
  },
  Ghost: {
    weakness: new Set(["Ghost", "Dark"]),
    resistance: new Set(["Poison", "Bug"]),
    immunity: new Set(["Normal", "Fighting"]),
  },
  Dark: {
    weakness: new Set(["Fighting", "Bug", "Fairy"]),
    resistance: new Set(["Ghost", "Dark"]),
    immunity: new Set(["Psychic"]),
  },
  Psychic: {
    weakness: new Set(["Bug", "Ghost", "Dark"]),
    resistance: new Set(["Fighting", "Psychic"]),
  },
  Fighting: {
    weakness: new Set(["Flying", "Psychic", "Fairy"]),
    resistance: new Set(["Bug", "Rock", "Dark"]),
  },
  Dragon: {
    weakness: new Set(["Ice", "Dragon", "Fairy"]),
    resistance: new Set(["Fire", "Water", "Grass", "Electric"]),
  },
  Flying: {
    weakness: new Set(["Electric", "Ice", "Rock"]),
    resistance: new Set(["Grass", "Fighting", "Bug"]),
    immunity: new Set(["Ground"]),
  },
  Poison: {
    weakness: new Set(["Ground", "Psychic"]),
    resistance: new Set(["Grass", "Fighting", "Poison", "Bug", "Fairy"]),
  },
};
