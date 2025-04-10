import Circle from '../src/Circle.js';

test('Создание окружности', () => {
    let circle = new Circle(0, 0, 10);
    expect(circle.toString()).toBe('Circle(center: (0, 0), radius: 10)');
});

test('Добавление окружностей', () => {
    let circle1 = new Circle(0, 0, 10);
    let circle2 = new Circle(0, 0, 15);
    let newCircle = circle1.add(circle2);
    expect(newCircle.toString()).toBe('Circle(center: (0, 0), radius: 25)');
});

test('Сравнение окружностей', () => {
    let circle1 = new Circle(0, 0, 10);
    let circle2 = new Circle(0, 0, 10);
    expect(Circle.isEqual(circle1, circle2)).toBe(true);
});
