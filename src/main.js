import Circle from './Circle.js';

try {
    let circle1 = new Circle(0, 0, 10);
    let circle2 = new Circle(5, 5, 15);

    console.log(circle1.toString());
    console.log(circle2.toString());

    let newCircle = circle1.add(circle2);
    console.log(newCircle.toString());

    let smallerCircle = circle1.subtract(5);
    console.log(smallerCircle.toString());

    let scaledCircle = circle1.multiply(2);
    console.log(scaledCircle.toString());

    console.log(Circle.isEqual(circle1, circle2));
    console.log(Circle.isEqual(circle1, circle1));

    let cloneCircle = new Circle(0, 0, 10);
    cloneCircle.set(circle1);
    console.log(cloneCircle.toString());
} catch (error) {
    console.error(error.message);
}
