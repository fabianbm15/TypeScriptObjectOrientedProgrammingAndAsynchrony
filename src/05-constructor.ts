export class MyDate {
  constructor(
    public year: number = 1993,
    public month: number = 7,
    private day: number = 9
  ) {}

  printFormat(): string {
    const day = this.addPadding(this.day);
    const month = this.addPadding(this.month);

    return `${day}/${month}/${this.year}`;
  }

  private addPadding(value: number) {
    if (value < 10) {
      return `0${value}`;
    }
    return `${value}`;
  }
  add(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') {
      this.day += amount;
    }
    if (type === 'months') {
      this.month += amount;
    }
    if (type === 'years') {
      this.year += amount;
    }
  }

  getDay() {
    return this.day;
  }
  getMonth() {
    return this.month;
  }
  getYear() {
    return this.year;
  }
}

const myDate = new MyDate(1993, 7, 9);
console.log('Fecha', myDate.printFormat());
console.log('Día', myDate.getDay());
console.log('Mes', myDate.getMonth());
console.log('Año', myDate.getYear());

const myDate2 = new MyDate();
console.log('Fecha2 ()', myDate2.printFormat());

const myDate3 = new MyDate(2022);
console.log('Fecha3 (2022)', myDate3.printFormat());

const myDate4 = new MyDate(2022, 3);
console.log('Fecha4 (2022, 3)', myDate4.printFormat());
