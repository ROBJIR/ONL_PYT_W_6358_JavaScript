console.log("start dev02.js ... ");

const colors1 = ["red","blue","yellow"]
const no1 = [21,41,5,81]
const fruits1 = ["orange","banana","pineapple"]


class Duck {
    constructor() {
        this.type = "ordinary duck";
    }
    ducktype() {
        console.log("Duck type is " + this.type);
    }    
    sound() {
        console.log("Quack Quack!");
    }
    swim() {
        console.log("I'm swimming...");
    }    
    print() {
        console.log("Looks like " + this.type);
    }
} 

class WildDuck extends Duck {
        constructor() {
        super();
        this.type = "wild duck";
    }
}

let donaldDuck = new Duck("D");

donaldDuck.ducktype();
donaldDuck.sound();
donaldDuck.swim();
donaldDuck.print();

console.log("===========================");

let daffyDuck = new WildDuck("W");

daffyDuck.ducktype();
daffyDuck.sound();
daffyDuck.swim();
daffyDuck.print();

console.log("... dev02.js complette");