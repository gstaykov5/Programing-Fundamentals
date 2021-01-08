function solve(currentStock, deliveryStock) {
    let totalQuantity = {};


    class Store {
        constructor(product, quantity) {
            this.product = product;
            this.quantity = quantity;
        }
    }

    while (deliveryStock.length > 0) {
        let product = deliveryStock.shift();
        let quantity = Number(deliveryStock.shift());

        if (currentStock.includes(product)) {
            let index = currentStock.indexOf(product);
            let addedQuantity = Number(currentStock.slice(index + 1, index + 2));
            addedQuantity += quantity;
            currentStock.splice(index + 1, 1, addedQuantity);
        } else {
            currentStock.push(product, quantity)
        }
    }

    while (currentStock.length > 0) {
        let product = currentStock.shift();
        let quantity = Number(currentStock.shift());
        let obj = new Store(product, quantity);
        console.log(`${obj.product} -> ${obj.quantity}`);

    }
}