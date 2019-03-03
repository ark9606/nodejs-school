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

    attack() {

      const damage = Math.floor(Math.random() * 11)
      console.log(`${this.name} attack ${damage}`);

      return damage;
    }
  }


  class Gladiator extends Warior {
    constructor(name, attackType, hp) {
      super(name, attackType, hp);
    }
  }

  class Monster extends Warior {
    constructor(...props) {
      super(...props);
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
      let { attacker, receiver } = this._coinFlip();

      let temp = null;

      while(receiver.hp > 0) {
        receiver.hp -= attacker.attack();

        temp = attacker;
        attacker = receiver;
        receiver = temp;
      }

      this.winner = attacker.name;
    }
  }



  const monster = new Monster('Vasilisk', Monster.ATTACK_TYPE.heavy);

  const gladiator = new Gladiator('Geralt', Gladiator.ATTACK_TYPE.heavy);

  const game = new Game(monster, gladiator);

  game.start();
  console.log(game.winner);
  

  // new Warior('Петя').attack();

  // console.log(gladiator, monster);
  
  
})();