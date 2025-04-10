class Circle {
    #x;
    #y;
    #radius;

    constructor(x, y, radius) {
        this.setX(x);
        this.setY(y);
        this.setRadius(radius);
    }

    setX(value) {
        this.#x = this.#validateNumber(value, "Координата X");
    }

    setY(value) {
        this.#y = this.#validateNumber(value, "Координата Y");
    }

    setRadius(value) {
        const radius = this.#validateNumber(value, "Радиус");
        if (radius <= 0) {
            throw new Error("Радиус должен быть положительным числом.");
        }
        this.#radius = radius;
    }

    #validateNumber(value, fieldName) {
        const num = Number(value);
        if (isNaN(num)) {
            throw new Error(`${fieldName} должно быть числом.`);
        }
        return num;
    }

    add(other) {
        if (!(other instanceof Circle)) {
            throw new Error("Операция возможна только с объектами класса Circle.");
        }
        const newRadius = this.#radius + other.#radius;
        return new Circle(this.#x, this.#y, newRadius);
    }

    subtract(value) {
        const newRadius = this.#radius - this.#validateNumber(value, "Значение для вычитания");
        if (newRadius <= 0) {
            throw new Error("Радиус после вычитания должен быть положительным.");
        }
        return new Circle(this.#x, this.#y, newRadius);
    }

    multiply(factor) {
        const newRadius = this.#radius * this.#validateNumber(factor, "Фактор умножения");
        return new Circle(this.#x, this.#y, newRadius);
    }

    set(other) {
        if (!(other instanceof Circle)) {
            throw new Error("Можно присваивать только объект класса Circle.");
        }
        this.setX(other.#x);
        this.setY(other.#y);
        this.setRadius(other.#radius);
    }

    static isEqual(circle1, circle2) {
        if (!(circle1 instanceof Circle) || !(circle2 instanceof Circle)) {
            throw new Error("Можно сравнивать только объекты класса Circle.");
        }
        return (
            circle1.#x === circle2.#x &&
            circle1.#y === circle2.#y &&
            circle1.#radius === circle2.#radius
        );
    }

    toString() {
        return `Circle(center: (${this.#x}, ${this.#y}), radius: ${this.#radius})`;
    }
}

export default Circle;
