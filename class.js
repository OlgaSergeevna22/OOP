// Задание 1
// 1) Описать функцию-конструктор Shop, которая создает объект магазина. У магазина есть два свойства -  название и адрес.
// С помощью этого конструктора создать два объекта - например, для магазинов Green и ProStore (можно любые).
// Добавить эти объекты в массив shops.
// В итоге должен получиться массив объектов типа:
// [{title: 'Green', address:  'ул. Петра Мстиславца 11, Минск'},{title: 'ProStore', address:  'пр-т Дзержинского, 126, Минск'}]
// 2) С помощью метода map получить массив, в котором будут содержаться только адреса магазинов. То есть:
// ['ул. Петра Мстиславца 11, Минск', 'пр-т Дзержинского, 126, Минск']

function Shop(title, address) {
    this.title = title;
    this.address = address;

    this.createGreen = function() {
        return shopGreen = {
            title: this.title,
            address: this.address
        }

    };
    this.createProStore = function() {
        return this.shopProStore = {
            title: this.title,
            address: this.address
        }
    }
}

let shop1 = new Shop('Green', 'ул. Петра Мстиславца 11, Минск');
console.log(shop1.createGreen());
let shop2 = new Shop('ProStore', 'пр-т Дзержинского, 126, Минск');
console.log(shop2.createProStore());

let shops = [];
shops.push(shop1.createGreen(), shop2.createProStore());
console.log(shops);
let arrAddress = shops.map(item => item.address)
console.log(arrAddress);