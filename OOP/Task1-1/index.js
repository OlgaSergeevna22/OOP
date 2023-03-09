class Logo {
    constructor(url) {
        this.top = 0;
        this.left = 0;
        this.width = 200;
        this.imgUrl = url;
        this.html = null;
    }

    init() {
        // метод должен создать тег img
        const img = document.createElement('img');
        img.src = this.imgUrl;
        const body = document.querySelector('body');
        body.appendChild(img)
        document.body.style.background = 'black';
        img.style.position = 'fixed';
        this.html = img;
        this.render();
    }

    render() {
        this.html.style.top = `${this.top}px`
        this.html.style.left = `${this.left}px`
        this.html.style.width = `${this.width}px`
    }

    moveUp() {
        this.top -= 20;
        this.render();
    }
    moveDown() {
        this.top += 20;
        this.render();
    }
    moveLeft() {
        this.left -= 20;
        this.render();
    }
    moveRight() {
        this.left += 20;
        this.render();
    }
}

class Circle {
    constructor(size, color) {
        this.width = size;
        this.height = size;
        this.color = color;
    }
    render() {
        const div = document.createElement('div');
        const body = document.querySelector('body');
        body.appendChild(div)
        div.style.width = `${this.width}px`;
        div.style.height = `${this.height}px`;
        div.style.borderRadius = `${50}px`;
        div.style.background = this.color
        console.log(div);

    }
}
const imgUrl = 'https://bit.ly/2tcDito';
const mfLogotip = new Logo(imgUrl);
console.log(mfLogotip);
// запускаем наше микро-приложение
mfLogotip.init();


const circle = new Circle(100, 'yellow')
circle.render()


mfLogotip.moveRight();
mfLogotip.moveRight();
mfLogotip.moveRight();
mfLogotip.moveRight();
mfLogotip.moveDown();
mfLogotip.moveDown();
mfLogotip.moveDown();
mfLogotip.moveDown();