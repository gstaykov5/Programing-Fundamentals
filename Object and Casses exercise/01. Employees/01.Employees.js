function solve(array) {
    let finalList = [];

    class Person {
        constructor(name) {
            this.name = name;
            this.length = name.length;
        }

        print() {
            return `Name: ${this.name} -- Personal Number: ${this.length}`
        }
    }

    array = array.map(currentName => new Person(currentName)).forEach(element => {
        console.log(element.print());
    });
}