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
    new CardData("Harvest Bounty", "Collects resources from a tile.", {}, "image_harvest_bounty.png"),
    new CardData("Fortify Defenses", "Constructs a wall on a tile.", { wood: 2 }, "image_fortify_defenses.png"),
    new CardData("Archer's Garrison", "Constructs an archery range. Requires King", { wood: 3, gold: 1 }, "image_archers_garrison.png"),
    new CardData("Cavalry Charge", "Constructs a cavalry unit. Requires King", { food: 3, gold: 2 }, "image_cavalry_charge.png"),
    new CardData("Horseman's Arrival", "Spawns a horseman on the board. Requires Cavalry", { gold: 3 }, "image_horsemans_arrival.png"),
    new CardData("Archer's Aim", "Spawns an archer on the board. Requires Archery", { gold: 2 }, "image_archers_aim.png"),
    new CardData("Sacred Grounds", "Constructs a temple. Requires King", { wood: 2, gold: 3 }, "image_sacred_grounds.png"),
    new CardData("Mystic's Presence", "Spawns a wizard on the board. Requires Temple", { gold: 4 }, "image_mystics_presence.png"),
    new CardData("Tactical Relocation", "Moves a military unit by three tiles.", { food: 1 }, "image_tactical_relocation.png"),
    new CardData("Strategic Advance", "Moves a military unit by four tiles.", { food: 2 }, "image_strategic_advance.png"),
    new CardData("Warrior's Strike", "Initiates an attack with a unit.", {}, "image_warriors_strike.png"),
    new CardData("Fertile Lands", "Creates a farm to produce food.", { wood: 1 }, "image_fertile_lands.png")
  ];