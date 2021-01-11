function solve(array) {
    let excursionInfo = {};
    array.sort()

    array.forEach(countryLine => {
        let [country, town, money] = countryLine.split(' > ');
        let townInfo = []
        let info = {};
        money = Number(money);
        info[town] = money;

        if (!excursionInfo.hasOwnProperty(country)) {
            townInfo.push(info)
            excursionInfo[country] = townInfo;

        } else {
            let checkForTown = excursionInfo[country];
            let check = false;

            for (const iterator of checkForTown) {
                if (iterator.hasOwnProperty(town)) {
                    check = true;
                    let current = iterator[town];

                    if (money < current) {
                        iterator[town] = money;
                        break;
                    }
                }
            }

            if (check === false) {
                excursionInfo[country].push(info);
            }
        }
    });

    for (const country in excursionInfo) {
        let money = excursionInfo[country];
        money.sort((money1, money2) => {
            return Object.values(money1) - Object.values(money2);
        })

        let townMoney = '';
        money.forEach(ele => {
            let town = Object.keys(ele);
            let money = Object.values(ele);
            townMoney += `${town} -> ${money} `
        })
        townMoney.trim();
        console.log(`${country} -> ${townMoney}`);
    };
};