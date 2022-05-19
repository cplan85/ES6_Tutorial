class Player {

    constructor (name, country) {
        this.name = name;
        this.country = country;

    }
    
    bornWhere() {
        console.log(`${this.name} was born in ${this.country}`);
    }

}

const player = new Player("Messi", "Argentina");

player.bornWhere()


class TennisPlayer extends Player{
    constructor(name, country, age) {
        //in a constructor function of a child class must call constructor of parent class
        super(name, country);
        this.age = age;
    }
    
    ageAndPlays() {
        console.log(`${this.name} is ${this.age} and knows how to play Tennis`);
    }

}

const tennisPlayer = new TennisPlayer("Messi", "Argentina", "34");

tennisPlayer.ageAndPlays();