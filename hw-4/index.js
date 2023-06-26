//№1
// Вивести на сторінку в один рядок через кому числа від 10 до 20.

let numbersArr = [];

for (let i = 10; i <= 20; i++) {
    numbersArr.push(i);
}

let numbersString = numbersArr.join(', ');

console.log(numbersString);

//№2
// Вивести квадрати чисел від 10 до 20.

for (let i = 10; i <= 20; i++) {
    let squareNumbers = i * i;
    console.log(squareNumbers);
}

//№3
// Вивести таблицю множення на 7

for (let i = 1; i <= 10; i++) {
    let result = i * 7;
    console.log(`7 * ${i} = ${result}`);
}

//№4
// Знайти суму всіх цілих чисел від 1 до 15

let start = 1;
let end = 15;
let sum = 0;

for (let i = start; i <= end; i++) {
    sum += i;
}

console.log(`Сума всіх цілих чисел від ${start} до ${end} дорівнює ${sum}`);

//№5
// Знайти добуток усіх цілих чисел від 15 до 35.

let mult = 1;

for (let i = 15; i <= 35; i++) {
    mult *= i;
}
console.log(mult);

//№6
// Знайти середнє арифметичне всіх цілих чисел від 1 до 500.

let sum = 0;
const amount = 500;

for (let i = 1; i <= amount; i++) {
    sum += i;
}

const average = sum / amount;
console.log(average);


//№7
// Вивести суму лише парних чисел в діапазоні від 30 до 80.

let start = 30;
let end = 80;
let sum = 0;

for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
        sum += i;
    }
}

console.log(sum);

//№8
// Вивести всі числа в діапазоні від 100 до 200 кратні 3

let start = 100;
let end = 200;

for (let i = start; i <= end; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}

//№9
// Дано натуральне число. Знайти та вивести на сторінку всі його дільники. 

const n = 7;

for ( let i = 0; i <= n; i++) {
    if (n % i === 0) {
        console.log(i);
    }
}

//№10
// Визначити кількість його парних дільників.

let evenNum = 0;
const j = 12;

for (let i = 0; i <= j; i++) {
    if ( j % i === 0 && i % 2 === 0) {
        evenNum += 1;
    }
}
console.log(evenNum);

//№11
// Знайти суму його парних дільників.

let sum = 0;
const n = 10;

for (let i = 0; i <= n; i++) {
    if (n % i === 0 && i % 2 === 0) {
        sum += 1;
    }
}
console.log(sum);

//№12
// Надрукувати повну таблицю множення від 1 до 10.

for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log(' ');
}