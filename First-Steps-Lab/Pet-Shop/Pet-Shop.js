function solve(dog, animal) {
    dog = Number(dog);
    animal = Number(animal);

    let dogfood = 2.5;
    let animalfood = 4;

    let totalPrice = dog * dogfood + animal * animalfood;

    console.log(totalPrice);

}