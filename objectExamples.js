var fiat = {
    make: "fiat",
    model: "500",
    year: "1999",
    convertible: false,
    mileage: "88000"
}

fiat.mileage = 10000; /* changes the property value */

fiat.needsWashing = true; /* adds a new property name to the object */

var dog = {
    name: "Fido",
    weight: "20.2",
    age: "4",
    breed: "mixed",
    activity: "bark"
};

dog.dogYears = 35;
console.log(dog)

var dog;
if (dog.weight > 20) {
    bark = "WOOF WOOF";
} else {
    bark = "woof woof";
}
var speak = dog.name + " says " + bark + " when he wants to " + dog.activity;
console.log(speak);


