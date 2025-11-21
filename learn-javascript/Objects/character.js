class PersonItem {
  constructor(
    name,
    type,
    health,
    strength,
    intelligence,
    magic,
    inventory = [],
    defense = 0,
    maxHealth = null
  ) {
    this.name = name;
    this.type = type;
    this.health = health;
    this.maxHealth = maxHealth ?? health;
    this.strength = strength;
    this.intelligence = intelligence;
    this.magic = magic;
    this.inventory = inventory;
    this.defense = defense;
    this.availableAttacks = this.typeAttacks(this.type);
  }
  isAlive() {
    return this.health > 0;
  }

  primaryStat() {
    if (this.type === "warrior") return this.strength + this.intelligence;
    if (this.type === "battle mage") return (this.magic + this.intelligence) / 2;
    if (this.type === "scoundrel") return this.strength;
    if (this.type === "archer") return (this.strength + this.magic) / 2;
    return this.strength;
  }
  typeAttacks(charType) {
    switch (charType) {
      case "warrior":
        return ["Sword Slash", "Shield Bash", "Great Strike", "Cleave", "Pummel"];
      case "battle mage":
        return ["Arcane Blast", "FireBall", "Ice Wind", "Thunderbolt"];
      case "scoundrel":
        return ["Rock Throw", "Sand Throw", "BackStab", "Dagger-Throw"];
      case "archer":
        return ["Arrow Shot", "Fire Arrow", "Poison Arrow", "Arcane Arrow"];
      default:
        return ["Basic Attack"];
    }
  }
  // Randomly rolls an attack.
  rollRandomAttack() {
    const attackList = this.availableAttacks;
    //generate a random index based on the array length.
    const randomIndex = Math.floor(Math.random() * attackList.length);
    //return the randomly selected attack or index.
    return attackList[randomIndex];
  }
  computeDamage(attackName) {
    const stat = this.primaryStat();
    const base = Math.floor(Math.random() * Math.max(1, stat)) + 1;
    const attackMods = {
      "Basic Attack": 1.0,
      "Sword Slash": 1.1,
      "Great Strike": 1.25,
      "Shield Bash": 0.9,
      "Arcane Blast": 1.2,
      FireBall: 1.3,
      BackStab: 1.35,
      "Arrow Shot": 1.0,
      "Fire Arrow": 1.15,
      "Poison Arrow": 1.2,
      "Arcane Arrow": 1.25,
      "Ice Wind": 1.15,
      Thunderbolt: 1.3,
      "Rock Throw": 0.9,
      "Sand Throw": 0.8,
      "Dagger-Throw": 1.05,
      Cleave: 1.2,
      Pummel: 1.15,
    };
    const mult = attackMods[attackName] ?? 1.0;

    let damage = Math.floor(base * mult);
    damage = Math.max(1, damage);

    const modifierUsed = `x${mult.toFixed(2)} via ${attackName}`;
    let isCritical = false;

    const roll = Math.random();
    const critChance = 0.15;
    if (roll < critChance) {
      isCritical = true;
      damage = Math.floor(damage * 1.5);
      damage = Math.max(1, damage);
    }

    return {
      attackName, // what attack was used
      base, // number before crit/modifiers
      modifierUsed, // string like
      damage, // final integer damage
      isCritical,
    };
  }

  attack(target, chosenAttackName) {
    // 1) choose an attack

    if (target.health <= 0) {
      return {
        attacker: this.name,
        defender: target.name,
        attackName: "No Attack (Target KO'd)",
        base: 0,
        modifierUsed: "N/A",
        damage: 0,
        isCritical: false,
        defenderHpBefore: target.health,
        defenderHpAfter: target.health,
        isKO: true,
      };
    }
    const attackName = chosenAttackName || this.rollRandomAttack();
    // 2) compute damage details
    const result = this.computeDamage(attackName);
    const dmg = result.damage;

    // 3) apply damage to target safely
    const before = target.health;
    target.health = Math.max(0, target.health - dmg);
    const after = target.health;
    const isKO = after <= 0;
    if (target.health <= 0) {
    }

    // 4) return summary for logging/UI
    return {
      attacker: this.name,
      defender: target.name,
      attackName: result.attackName,
      base: result.base,
      modifierUsed: result.modifierUsed,
      damage: dmg,
      isCritical: result.isCritical,
      defenderHpBefore: before,
      defenderHpAfter: after,
      isKO,
    };
  }

  heal(amount) {
    const before = this.health;
    const after = Math.min(this.maxHealth, before + Math.max(0, amount));
    this.health = after;
    return {
      healed: after - before,
      before,
      after,
      maxHealth: this.maxHealth,
    };
  }

  useItem(itemName) {
    if (itemName !== "potion") {
      return { ok: false, reason: "unknown item", item: itemName };
    }

    // check if we have a potion
    const idx = this.inventory.indexOf("potion");
    if (idx === -1) {
      return { ok: false, reason: "no potion", item: "potion" };
    }

    // already full?
    if (this.health >= this.maxHealth) {
      return { ok: false, reason: "at max health", item: "potion" };
    }

    // consume one
    this.inventory.splice(idx, 1);

    // heal
    const HEAL_PER_POTION = 50; // tweak to taste
    const healResult = this.heal(HEAL_PER_POTION);

    return {
      ok: true,
      item: "potion",
      healAttempt: HEAL_PER_POTION,
      healed: healResult.healed,
      hpBefore: healResult.before,
      hpAfter: healResult.after,
      maxHealth: healResult.maxHealth,
      remainingPotions: this.inventory.filter((i) => i === "potion").length,
    };
  }
}

function battleLoop(a, b) {
  let attacker = a;
  let defender = b;
  let turn = 1;

  while (attacker.health > 0 && defender.health > 0) {
    if (attacker.health <= 60) {
      const healRes = attacker.useItem("potion");
      if (healRes.ok) {
        console.log(
          `${turn}. ${attacker.name} uses a potion and heals ${healRes.healed} Hp` +
            `(${healRes.hpBefore} -> ${healRes.hpAfter}/${healRes.maxHealth}).` +
            `Potions left: ${healRes.remainingPotions}`
        );
      }
    }

    const res = attacker.attack(defender);

    console.log(
      `${turn}. ${res.attacker} uses ${res.attackName} for ${res.damage}${
        res.isCritical ? " (CRIT!)" : ""
      }. ${res.defender} HP: ${res.defenderHpAfter}`
    );

    if (res.isKO) {
      console.log(`K.O.! ${res.attacker} defeats ${res.defender}!`);
      return attacker;
    }

    // swap
    [attacker, defender] = [defender, attacker];
    turn++;
  }
}

const playerTaofeek = new PersonItem("Taofeek", "battle mage", 200, 60, 150, 200, [
  "wizard staff",
  "potion",
  10,
]);
const playerJoe = new PersonItem(
  "Joe",
  "warrior",
  200,
  150,
  90,
  75,
  ["sword", "shield", "potion"],
  40,
  250
);

const playerJonathan = new PersonItem(
  "JonDon33",
  "archer",
  200,
  80,
  150,
  75,
  ["steel bow", "steel arrows", "potion"],
  35,
  200
);
const playerClyde = new PersonItem(
  "Clyde",
  "scoundrel",
  100,
  70,
  50,
  0,
  ["dagger", "bag of rocks", "bag of sand", "potion"],
  5
);

battleLoop(playerJonathan, playerClyde);

//console.log(playerJoe.getHiddenText());

// function myName() {
//   console.log(this.clearImmediate);
// }

// const sayMyName = () => {
//   console.log(this);
// };

// console.log(sayMyName());

// const playerJoe = {
//   name: "Joe",
//   health: 200,
//   strength: 90,
//   intelligence: 90,
//   inventory: ["sword", "shield", "potion"],
//   attack: function (target) {
//     const damage = Math.floor(Math.random() * this.strength);
//     target.health -= damage;
//   },
// };

// )
// const playerClyde = {
//   name: "Clyde",
//   health: 150,
//   strength: 70,
//   intelligence: 60,
//   inventory: [],
// };

//   let enemyHp = 100;

//   let hit = Math.floor(Math.random() * 150) + 1;
//   let totalDamage = hit - enemyHp;

//   while (enemyHp > 0) {
//     if (hit >= 100) {
//       console.log(`CRITICAL HIT!! K.O! WITH ${hit} DAMAGE!`);
//       break;
//     } else if (hit < enemyHp) {
//       enemyHp = enemyHp - hit;
//       console.log(`Hit! But no k.o! (HIT FOR!: ${hit} ENEMY HAS!: ${enemyHp} HP LEFT!)`);
//     }
//     hit = Math.floor(Math.random() * 150) + 1;
//   }

// attack: function (target) {
//     const damage = Math.floor(Math.random() * this.strength);
//     target.health -= damage;
//   }
