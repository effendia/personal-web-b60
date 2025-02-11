class Animal {
     speak() {
        console.log("please define either 'duck' or 'cat' to speak")
     }
}

class Duck extends Animal {
    speak() {
        console.log("Duck");
    }
}
    
class Cat extends Animal {
    speak (){
        console.log("Miaww");
    }
}

const donald = new Duck ();
donald.speak();

const tom = new Cat ();
tom.speak();