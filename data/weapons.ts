export type Equipment = {
  name: string;
  pAttack: number;
  aAttack: number;
  focus: number;
};

export const velvetWeapons: Equipment[] = [
  { name: "Blood Blade", pAttack: 50, aAttack: 0, focus: 0 },
  { name: "Amber Blade", pAttack: 49, aAttack: 12, focus: 0 },
  { name: "Beast Fang", pAttack: 75, aAttack: 4, focus: 0 },
  { name: "Calcite Blade", pAttack: 69, aAttack: 0, focus: 18 },
  { name: "Shell Shredder", pAttack: 94, aAttack: 10, focus: 0 },
  { name: "Fluoric Blade", pAttack: 87, aAttack: 0, focus: 25 },
  { name: "Demon's Cleaver", pAttack: 98, aAttack: 0, focus: 32 },
  { name: "Amphibole Blade", pAttack: 137, aAttack: 0, focus: 0 },
];

export const allWeapons = [...velvetWeapons];
