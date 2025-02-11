class Animal {
    brain = true;
    legs = 0;
    name = "unknow name";

    sleep() {
        console.log(`${this.name} is sleeping`)
        console.log(`${this.name} has ${this.legs} legs`);
    }
}
class Human extends Animal {
    name = "amel";     //  menimpa properti yang ada di animal.
    legs = "2"
}

class Pet extends Animal {
    legs = "4"
    fleas = "1"
}

class Cat extends Pet {
    fleas= "0";
}

class Dog extends Pet {
    fleas = "8"
}

const amel = new Human ();
amel.sleep();

const kitty = new Cat ();
console.log(kitty.fleas);

const breno =new Dog();
console.log(breno.fleas);