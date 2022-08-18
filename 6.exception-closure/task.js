function parseCount(value) {
  let result = Number.parseInt(value);
  if (isNaN(result)) {
    throw new Error("Невалидное значение");
  }
  return result;
}

function validateCount(value) {
  try {
    return parseCount(value);
  } catch (error) {
    return error;
  }
}

class Triangle {
  constructor(firstSide, secondSide, thirdSide) {
    this.firstSide = firstSide;
    this.secondSide = secondSide;
    this.thirdSide = thirdSide;
    if (
      firstSide + secondSide < thirdSide ||
      firstSide + thirdSide < secondSide ||
      thirdSide + secondSide < firstSide
    ) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
  }
  getPerimeter() {
    return this.firstSide + this.secondSide + this.thirdSide;
  }
  getArea() {
    const p = this.getPerimeter() / 2;
    const area = Math.sqrt(
      p * (p - this.firstSide) * (p - this.secondSide) * (p - this.thirdSide)
    );
    return Number(area.toFixed(3));
  }
}

function getTriangle(firstSide, secondSide, thirdSide) {
  try {
    return new Triangle(firstSide, secondSide, thirdSide);
  } catch {
    return {
      getPerimeter: () => "Ошибка! Треугольник не существует",
      getArea: () => "Ошибка! Треугольник не существует",
    };
  }
}
