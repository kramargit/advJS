class Burger {
    constructor(size, filing, additionally) {
        this.size = size;
        this.filing = filing;
        this.additionally = additionally;
    }

    calcCalories() {
        let count = 0;
        if (this.size === 'small') {
            count += 20;
        } else {
            count += 40;

        }

        for (let item of this.filing) {
            if (item === 'chees') {
                count += 20;
            } else if (item === 'salad') {
                count += 5;
            } else if (item === 'potato') {
                count += 10;
            }
        }

        for (let item of this.additionally) {
            if (item === 'mayonneis') {
                count += 5;
            }

        }

        return count;

    }

    calcCosts() {
        let count = 0;
        if (this.size === 'small') {
            count += 50;
        } else {
            count += 100;
        }

        for (let item of this.filing) {
            if (item === 'chees') {
                count += 10;
            } else if (item === 'salad') {
                count += 20;
            } else if (item === 'potato') {
                count += 15;
            }
        }

        for (let item of this.additionally) {
            if (item === 'seasoning') {
                count += 15;
            } else if (item === 'mayonneis') {
                count += 20;
            }

        }

        return count;
    }
}

class Order {
    constructor(size, filing, additionally) {
        this.size = size;
        this.filing = filing;
        this.additionally = additionally;
        this.data = [];
        this.createOrder();
        this.show();
    }

    createOrder() {
        let calcBurger = new Burger(this.size, this.filing, this.additionally);
        this.data.push(calcBurger.calcCosts());
        this.data.push(calcBurger.calcCalories());
    }

    show() {
        let costs = document.querySelector('.costs');
        let calories = document.querySelector('.calories');
        costs.innerText = 'Стоимость бургера: ';
        calories.innerText = 'Объем калорий: ';
        costs.insertAdjacentHTML('beforeend', this.data[0]);
        calories.insertAdjacentHTML('beforeend', this.data[1]);
        this.data = [];
    }
}

btnCalc = document.querySelector('.btn-calc');
btnCalc.addEventListener('click', function () {

    let size;
    let filing = [];
    let additionally = [];

    let radios = document.getElementsByName('size');
    for (let item of radios) {
        if (item.checked) {
            size = item.value;
        }
    }

    let checkedFiling = document.getElementsByName('opt1');
    for (let item of checkedFiling) {
        if (item.checked) {
            filing.push(item.value);
        }

    }

    let checkedAdditionally = document.getElementsByName('opt2');
    for (let item of checkedAdditionally) {
        if (item.checked) {
            additionally.push(item.value);
        }

    }

    let makeOrder = new Order(size, filing, additionally);
});