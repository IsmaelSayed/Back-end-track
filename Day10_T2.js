class Rectangle {
    constructor(wid, hi) {
    this._width = 0;
    this._height = 0;
    this.width = wid;
    this.height = hi;
    }

    get width () {
    return this._width;
    }

    set width(val) {
    if (!Number.isInteger(val)) {
        throw new Error("width is not an integer value");
    }
    if (val <= 0) {
        throw new Error("width is not a positive value");
    }
    this._width = val;
    }

    get height() {
    return this._height;
    }

    set height(val) {
    if (!Number.isInteger(val)) {
        throw new Error("height is not an integer value");
    }
    if (val <= 0) {
        throw new Error("height is not a positive value");
    }
    this._height = val;
    }

    area() {
      return `The area of the Shape = ${this.width * this.height}`;
    }

    perimeter() {
      return `The perimeter of the Shape = ${(this.width + this.height) *2}`;
    }

    draw(symbol) {
    let row = "";
    for (let i = 0; i < this.width; i++) {
        row += symbol;
    }
    for (let i = 0; i < this.height; i++) {
        console.log(row);
    }
    }
}


let rec = new Rectangle(2, 3);
    console.log(rec.area());  
    console.log(rec.perimeter()); 
// rec.draw("0");
// rec.draw("@");
rec.draw("#");



class Square extends Rectangle {
    constructor(side) {
    super(side, side);
    }
}

var squere = new Square(3);
    console.log(squere.area());  
    console.log(squere.perimeter());  
    // squere.draw("0");
    squere.draw("@");
    // squere.draw("#");
    