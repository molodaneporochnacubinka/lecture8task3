// TODO: write code here

console.log('app.js bundled');

class Character {
  constructor(attack, defence) {
    this._attack = attack;
    this._defence = defence;
    this.level = 0;
    this._health = 100;
    this.powerMode = false;
    this._powerModeNum = 0;
  }

  levelUp() {
    this.level += 1;
    this.attack = 1.2 * this.attack;
    this.defence = 1.2 * this.defence;
    if (this.health !== 0) {
      this.health = 100;
    } else {
      throw new Error('нельзя повысить левел умершего');
    }
  }

  get powerMode() {
    return this._powerMode;
  }

  set powerMode(timeStamp) {
    if (timeStamp) {
      if (this._powerModeNum < 1) {
        this._powerMode = true;
        this._powerModeNum += 1;
      } else {
        this._powerMode = false;
        throw new Error('нельзя включить режим powerMode больше одного раза');
      }
    } else {
      this._powerMode = false;
    }
  }

  get attack() {
    if (this.powerMode) {
      return 2 * this._attack;
    }
    return this._attack;
  }

  get defence() {
    if (this.powerMode) {
      return 2 * this._defence;
    }
    return this._defence;
  }

  get health() {
    if (this.powerMode) {
      return 2 * this._health;
    }
    return this._health;
  }
}

class Bowerman extends Character {
  constructor() {
    super(25, 25);
  }
}

class Swordsman extends Character {
  constructor() {
    super(40, 10);
  }
}

class Magician extends Character {
  constructor() {
    super(10, 40);
  }
}

class Undead extends Character {
  constructor() {
    super(25, 25);
  }
}

class Zombie extends Character {
  constructor() {
    super(40, 10);
  }
}

class Daemon extends Character {
  constructor() {
    super(10, 40);
  }
}

const bowerman = new Bowerman();
bowerman.powerMode = true;
console.log(bowerman.attack);
bowerman.powerMode = true;

const swordsman = new Swordsman();
console.log(swordsman);

const magician = new Magician();
console.log(magician);

const undead = new Undead();
console.log(undead);

const zombie = new Zombie();
console.log(zombie);

const daemon = new Daemon();
console.log(daemon);
