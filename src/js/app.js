// TODO: write code here

console.log('app.js bundled');

export class Character {
  constructor(type) {
    this.type = type;
    this.level = 0;
    this._health = 100;
    this.powerMode = false;
    this._powerModeNum = 0;
    this._attackCounter = 0;
  }

  levelUp() {
    if (this.health !== 0) {
      this.level += 1;
      this.attack *= 1.2;
      this.defence *= 1.2;
      this.health = 100;
    } else {
      throw new Error('нельзя повысить левел умершего');
    }
  }

  get powerMode() {
    return this._powerMode;
  }

  set powerMode(flag) {
    if (flag) {
      if (this._powerModeNum < 1) {
        this._powerMode = true;
        this._powerModeNum += 1;
        this._attackCounter = 3;
      } else {
        this._powerMode = false;
        throw new Error('нельзя включить режим powerMode больше одного раза');
      }
    } else {
      this._powerMode = false;
    }
  }

  get attack() {
    if (this.powerMode && this._attackCounter > 0) {
      this._attackCounter -= 1;
      return 2 * this._attack;
    }
    return this._attack;
  }

  get defence() {
    if (this.powerMode && this._attackCounter > 0) {
      return 2 * this._defence;
    }
    return this._defence;
  }

  get health() {
    if (this.powerMode && this._attackCounter > 0) {
      return 2 * this._health;
    }
    return this._health;
  }
}

export class Bowerman extends Character {
  constructor() {
    super('Bowerman');
    this._attack = 25;
    this._defence = 25;
  }
}

export class Swordsman extends Character {
  constructor() {
    super('Swordsman');
    this._attack = 40;
    this._defence = 10;
  }
}

export class Magician extends Character {
  constructor() {
    super('Magician');
    this._attack = 10;
    this._defence = 40;
  }
}

export class Undead extends Character {
  constructor() {
    super('Undead');
    this._attack = 25;
    this._defence = 25;
  }
}

export class Zombie extends Character {
  constructor() {
    super('Undead');
    this._attack = 40;
    this._defence = 10;
  }
}

export class Daemon extends Character {
  constructor() {
    super('Daemon');
    this._attack = 10;
    this._defence = 40;
  }
}
