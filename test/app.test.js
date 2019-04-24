import {
  Bowerman, Swordsman, Magician, Undead, Zombie, Daemon,
} from '../src/js/app';

test('test Bowerman powerMode attack', () => {
  const bowerman = new Bowerman();
  bowerman.powerMode = true;
  expect(bowerman.attack).toBe(50);
});

test('test Swordsman 2 powerMode', () => {
  const swordsman = new Swordsman();
  swordsman.powerMode = true;
  function powerMode2() {
    swordsman.powerMode = true;
  }
  expect(powerMode2).toThrowError('нельзя включить режим powerMode больше одного раза');
});

test('test Magician powerMode 3 attack', () => {
  const magician = new Magician();
  magician.powerMode = true;
  magician.attack;
  magician.attack;
  magician.attack;
  expect(magician.attack).toBe(10);
});

test('test Undead powerMode defence', () => {
  const undead = new Undead();
  undead.powerMode = true;
  expect(undead.defence).toBe(50);
});

test('test Zombie powerMode health', () => {
  const zombie = new Zombie();
  zombie.powerMode = true;
  expect(zombie.health).toBe(200);
});

test('test Daemon powerMode 3 attack health', () => {
  const daemon = new Daemon();
  daemon.powerMode = true;
  daemon.attack;
  daemon.attack;
  daemon.attack;
  expect(daemon.health).toBe(100);
});
