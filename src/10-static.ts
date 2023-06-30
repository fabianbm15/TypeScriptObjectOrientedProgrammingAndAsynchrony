console.log('Math.PI', Math.PI);
console.log('Math.max', Math.max(1, 2, 2, 8, 1, 0));

// class MyMath {
//   PI = 3.14;
// }

// const math = new MyMath();
// console.log(math.PI);
// Static

class MyMath {
  static readonly PI = 3.14;

  static max(...numbers: number[]) {
    console.log('numbers', numbers);
    return numbers.reduce((max, item) => (max >= item ? max : item), 0);
  }
}

console.log('MyMath.PI', MyMath.PI);
// MyMath.PI = 121; // Se coloca readonly para que no pueda ser modificado
// console.log('MyMath.PI Cambiado', MyMath.PI);
const numbers = [120, 1, 3, 135, 2, 0, 3000]; // Solucionar para valores negativos
console.log('MyMath.max', MyMath.max(...numbers));
