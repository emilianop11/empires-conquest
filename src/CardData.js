// Card Data Class
export class CardData {
    constructor(name, description, cost, image) {
      this.name = name;
      this.description = description;
      this.cost = cost;
      this.image = image;
    }
  }

  export const cards = [
    new CardData("King's Advance", "Moves any unit by one tile.", {}, "image_kings_advance.png"),
    new CardData("King's Leap", "Moves any unit by two tiles.", { food: 1 }, "image_kings_leap.png"),
    new CardData("Royal Summoning", "Spawns the king on the board.", {}, "image_royal_summoning.png"),
    new CardData("Laborer's Call", "Spawns a worker on the board.", {}, "image_laborers_call.png"),
    new CardData("Fortify Defenses", "Constructs a wall on a tile.", { wood: 2 }, "image_fortify_defenses.png"),
    new CardData("Archer's Garrison", "Constructs an archery range. Requires King", { wood: 2, gold: 1, food: 2 }, "image_archers_garrison.png"),
    new CardData("Cavalry Charge", "Constructs a cavalry unit. Requires King", { food: 3, gold: 2, wood: 1 }, "image_cavalry_charge.png"),
    new CardData("Horseman's Arrival", "Spawns a horseman on the board. Requires Cavalry", { food: 2 }, "image_horsemans_arrival.png"),
    new CardData("Archer's Aim", "Spawns an archer on the board. Requires Archery", { food: 1, wood: 1 }, "image_archers_aim.png"),
    new CardData("Tactical Relocation", "Moves a military unit by three tiles.", { food: 1 }, "image_tactical_relocation.png"),
    new CardData("Strategic Advance", "Moves a military unit by four tiles.", { food: 2 }, "image_strategic_advance.png"),
    new CardData("Pawn's Creation", "Spawns a pawn on the board.", {}, "image_pawns_creation.png"),
  ];