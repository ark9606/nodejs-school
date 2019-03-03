// Задание 3:
// Cоздать классы Monster и Gladiator, оба наследуются от базового класса Warior

(function () {

  class Warior {
    static get ATTACK_TYPE () {
      return {
        light: 'Light',
        medium: 'Medium',
        heavy: 'Heavy',
      }
    };

    constructor(name, attackType, hp = 100) {
      this.name = name;
      this.attackType = attackType || this.constructor.ATTACK_TYPE.medium;
      this._hp = hp;
    }

    get hp() { return this._hp }
    set hp(val) { this._hp = val; }

    old_attack() {

      let min = 0, max = 0;
      const { ATTACK_TYPE } = this.constructor;

      switch(this.attackType) {
        case ATTACK_TYPE.light: 
          min = 0;
          max = 4;
          break;

        case ATTACK_TYPE.medium: 
          min = 4;
          max = 7;
          break;

        case ATTACK_TYPE.heavy: 
          min = 7;
          max = 10;
          break;
        
      }
      const damage = min + Math.floor(Math.random() * (max + 1 - min));
      // console.log(`${this.name} attack ${damage}`);

      return damage;
    }

    attack(opponent, averageDamage) {

      let min = 0, max = 0;
      const { ATTACK_TYPE } = this.constructor;

      switch(this.attackType) {
        case ATTACK_TYPE.light: 
          min = averageDamage * 0.5;
          max = averageDamage * 1.5;
          break;

        case ATTACK_TYPE.medium: 
          min = averageDamage * 0.75;
          max = averageDamage * 1.25;
          break;

        case ATTACK_TYPE.heavy: 
          min = averageDamage * 0.95;
          max = averageDamage * 1.05;
          break;        
      }
      min = parseInt(min);
      max = parseInt(max);

      const givenDamage = min + Math.floor(Math.random() * (max + 1 - min));

      opponent.hp -= givenDamage;
      console.log(`${this.name} attack ${givenDamage}`);

      return givenDamage;
    }
  }


  class Gladiator extends Warior {
    constructor(...props) {
      super(...props);
      this._attackMethods = [this._stoneAttack, this._chopAttack, this._thrustAttack];
    }

    // атака камнем
    _stoneAttack() {
      const averageDamage = 8;
      return averageDamage;
    }

    // рубящий удар
    _chopAttack() {
      const averageDamage = 5;
      return averageDamage;
    }

    // колющий удар
    _thrustAttack() {
      const averageDamage = 2;
      return averageDamage;
    }

    attack(opponent) {
      const rnd = Math.floor(Math.random() * 3);
      const dmg = this._attackMethods[rnd]();
      super.attack(opponent, dmg);
    }
  }

  class Monster extends Warior {
    constructor(...props) {
      super(...props);
      this._attackMethods = [this._jumpAttack, this._biteAttack, this._clawsAttack];
    }

    // удар в прыжке
    _jumpAttack() {
      const averageDamage = 7;
      return averageDamage;
    }

    // укус
    _biteAttack() {
      const averageDamage = 5;
      return averageDamage;
    }

    // удар когтями
    _clawsAttack() {
      const averageDamage = 3;
      return averageDamage;
    }

    attack(opponent) {
      const rnd = Math.floor(Math.random() * 3);
      const dmg = this._attackMethods[rnd]();
      super.attack(opponent, dmg);
    }
  }

  class Game {
    constructor(opponent1, opponent2) {
      this.opponent1 = opponent1;
      this.opponent2 = opponent2;
      this.winner = null;
    }

    _coinFlip() {
      let attacker = null, receiver = null;

      // кто первым атакует
      if(Math.random() > 0.5) {
        attacker = this.opponent1;
        receiver = this.opponent2;
      }
      else {
        attacker = this.opponent2;
        receiver = this.opponent1;
      }
      return { attacker, receiver };
    }

    start() {

      // кто первым наносит удар
      let { attacker, receiver } = this._coinFlip();

      let temp = null;

      while(attacker.hp > 0) {
        attacker.attack(receiver);

        temp = attacker;
        attacker = receiver;
        receiver = temp;
      }

      this.winner = receiver.name;
    }
  }


  const monster = new Monster('Пушистик', Monster.ATTACK_TYPE.heavy, 10);
  const gladiator = new Gladiator('Geralt', Gladiator.ATTACK_TYPE.medium, 10);
  const game = new Game(monster, gladiator);

  game.start();
  console.log(game.winner);  
  
})();