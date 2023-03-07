// // Задание 1
// // 1) Описать функцию-конструктор Shop, которая создает объект магазина. У магазина есть два свойства -  название и адрес.
// // С помощью этого конструктора создать два объекта - например, для магазинов Green и ProStore (можно любые).
// // Добавить эти объекты в массив shops.
// // В итоге должен получиться массив объектов типа:
// // [{title: 'Green', address:  'ул. Петра Мстиславца 11, Минск'},{title: 'ProStore', address:  'пр-т Дзержинского, 126, Минск'}]
// // 2) С помощью метода map получить массив, в котором будут содержаться только адреса магазинов. То есть:
// // ['ул. Петра Мстиславца 11, Минск', 'пр-т Дзержинского, 126, Минск']


// function Shop(title, address) {
//     this.title = title;
//     this.address = address;

// }

// let green = new Shop('Green', 'ул. Петра Мстиславца 11, Минск');
// console.log(green);

// let proStore = new Shop('ProStore', 'пр-т Дзержинского, 126, Минск');
// console.log(proStore);

// let shops = [];
// shops.push(green, proStore);
// console.log(shops);
// let arrAddress = shops.map(item => item.address)
// console.log(arrAddress);


// // С методами в конструкторе

function Shop(title, address) {
    this.title = title;
    this.address = address;
}
Shop.prototype.createShop = function() {
    return {
        title: this.title,
        address: this.address
    }
};

let green = new Shop('Green', 'ул. Петра Мстиславца 11, Минск');
let proStore = new Shop('ProStore', 'пр-т Дзержинского, 126, Минск');
console.log(proStore);
console.log(green);
let shops = [];
shops.push(green.createShop(), proStore.createShop());
console.log(shops);
let arrAddress = shops.map(item => item.address)
console.log(arrAddress);


// class Shop {
//     constructor(title, address) {
//         this.title = title;
//         this.address = address;
//     }
// }

// const green = new Shop('Green', 'ул. Петра Мстиславца 11, Минск');
// const proStore = new Shop('ProStore', 'пр-т Дзержинского, 126, Минск');
// console.log(Shop.prototype);
// console.log(proStore);