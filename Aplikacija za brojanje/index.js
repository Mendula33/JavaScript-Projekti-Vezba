let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
    count = count + 1;
    countEl.innerText = count;
    border();
}

function decrement() {
    count = count - 1;
    if (count < 0) {
        count = 0;
    }
    countEl.innerText = count;
    border();
}

function decline() {
    count = 0;
    countEl.innerText = count;
    border();
}

function border() {
    if (count > 0) {
        countEl.classList.add("has-border");
    } else {
        countEl.classList.remove("has-border");
    }
}

let count1 = document.getElementById("count1");
let count2 = document.getElementById("count2");
let brojac1 = 0; // Promenljiva za prvi broj
let brojac2 = 0; // Promenljiva za drugi broj

function increment1() {
    brojac1 = brojac1 + 1;
    count1.innerText = brojac1;
    updateSum();
}

function decrement1() {
    brojac1 = brojac1 - 1;
    if (brojac1 < 0) {
        brojac1 = 0;
    }
    count1.innerText = brojac1;
    updateSum();
}

function decline1() {
    brojac1 = 0;
    count1.innerText = brojac1;
    updateSum();
}

function increment2() {
    brojac2 = brojac2 + 1;
    count2.innerText = brojac2;
    updateSum();
}

function decrement2() {
    brojac2 = brojac2 - 1;
    if (brojac2 < 0) {
        brojac2 = 0;
    }
    count2.innerText = brojac2;
    updateSum();
}

function decline2() {
    brojac2 = 0;
    count2.innerText = brojac2;
    updateSum();
}

function updateSum() {
    let a = brojac1;
    let b = brojac2;
    let sum = suma(a, b);
    let sumElement = document.getElementById("sum");
    sumElement.innerText = sum;
}

function suma(a, b) {
    return a + b;
}
