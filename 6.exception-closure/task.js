function parseCount(numberOfProduct) {
    if (Number.isNaN(Number.parseFloat(numberOfProduct))) {
        throw new Error("Невалидное значение");
    }
    return Number.parseFloat(numberOfProduct);
}

function validateCount(numberOfProduct) {
    try {
        return parseCount(numberOfProduct);
    } catch (error) {
        return error;
      }
}

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;

        if (a > b+c || b > a+c || c > a+b) {
            console.log ("Error1");
            throw new Error("Треугольник с такими сторонами не существует");
            console.log ("Error");
        }
    }

    get perimeter() {
        return this.a+this.b+this.c;
    }

    
    get area() {
        let p = (this.a+this.b+this.c) / 2;
        console.log (p);
        let S = Math.sqrt(p * (p-this.a) * (p-this.b) * (p-this.c));
        console.log (S);
        return Number(S.toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c); 
    }
    catch(error) {
        return {
            get area() {
              return "Ошибка! Треугольник не существует";
            },
            get perimeter() {
              return "Ошибка! Треугольник не существует";
            }
        }
    }
}