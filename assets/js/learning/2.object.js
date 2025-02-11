class Dog { 
constructor (
 // properties
 name = "no dog name",
 color ="",
 eyeColor ="",
 height =0,
 length =0,
 weight =0,

) {
    this.name = name;
    this.color = color;
    this.eyeColor = eyeColor;
    this.height = height;
}
   

    // method --> prilaku
    sit() {
        console.log (`${this.name} Is Sitting`);
    }

    layDown () {
        console.Dog ("dog is laying down")
    }

}
let bobby = new Dog("bobby", "white", "black", "30");
console.log(bobby.name)
console.log(bobby.height);

bobby.sit()
