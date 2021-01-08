function solve(array) {
    let levels = [];
    let newArray = []

    for (const line of array) {
        let heroInfo = line.split(' / ');
        let level = Number(heroInfo[1]);
        levels.push(level);
    }

    levels = levels.sort((a, b) => a - b);

    class Hero {
        constructor(heroName, level, items) {
            this.Name = heroName;
            this.level = level;
            this.items = items;
        }

        call() {
            return `Hero: ${this.Name}\nlevel => ${this.level}\nitems => ${this.items}`
        }

    }

    for (let i = 0; i < levels.length; i++) {
        const compare = levels[i];

        for (let k = 0; k < array.length; k++) {
            let element = array[k].split(' / ');
            let heroName = element[0]
            let level = element[1];
            let items = element[2].split(', ').sort().join(', ')

            if (level == compare) {
                newArray.push(new Hero(heroName, level, items));
            }
        }
    }

    newArray.forEach(element => {
        console.log(element.call());
    });

}