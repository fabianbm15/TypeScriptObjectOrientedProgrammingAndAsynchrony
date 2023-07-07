import { Animal, Dog } from './09-protected';

// const animal = new Animal('Elite'); // Al agregar abstract a la clase, no se puede crear directamente desde la clase padre
// animal.greeting();

const cheis = new Dog('cheis', 'nico');
cheis.greeting();
cheis.woof(2);
