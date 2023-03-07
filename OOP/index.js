// // ЗАДАНИЕ 1
// // Создать конструктор, который возвращает любой объект из жизни с одним свойством и одним методом.

// class Life {
//     constructor(tea) {
//         this.tea = tea;
//     }
//     go() {
//         console.log(`Утром я пила чай ${this.tea}`);
//     }

// }

// const moning = new Life('Grinfield');
// console.log(moning);

// ЗАДАНИЕ 2
// Создайте функцию-конструктор Calculator, которая при вызове запрашивает два числа при помощи prompt и сохраняет их значение в свойствах объекта, а также возвращает объект с двумя методами:
// sum() возвращает сумму введённых чисел.
// mul() возвращает произведение введённых чисел.

function Calculator() {

    this.request = function() {
        this.num1 = +prompt('Первое число');
        this.num2 = +prompt('Второе число');
    };

    this.sum = function() {
        return this.num1 + this.num2;
    };

    this.mul = function() {
        return this.num1 * this.num2;
    };
}

let calc = new Calculator();
calc.request();

console.log('Сумма равна: ' + calc.sum());
console.log('Произведение равно: ' + calc.mul());