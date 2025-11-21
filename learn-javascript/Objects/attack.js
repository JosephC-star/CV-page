const playerJoe = {
  name: "Joe",
  health: 200,
  strength: 200,
  intelligence: 90,
  inventory: ["sword", "shield", "potion"],
  attack: function (target) {
    const damage = Math.floor(Math.random() * this.strength);
    target.health -= damage;
  },
};

const playerClyde = {
  name: "Clyde",
  health: 150,
  strength: 70,
  intelligence: 60,
  inventory: [],
};

playerJoe.attack(playerClyde);

console.log(`${playerClyde.name} now has ${playerClyde.health} HP left.`);
