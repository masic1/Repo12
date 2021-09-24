// Only change code below this line
var myPetsArray = 
[
    { animalType: "Dog", animalName: "Pujdo" },
    { animalType: "Cat", animalName: "Maca" },
    { animalType: "Bird", animalName: "Tweety" }
]

function myPetsFunction(pets) {
    return pets.animalName;
}
// Only change code above this line

console.log(myPetsFunction(myPetsArray[1])); // Change this lien
module.exports = myPetsFunction;
module.exports.myPets = myPetsArray;