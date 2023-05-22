export class MyDate {
  constructor(
    public _year: number = 1993,
    public _month: number = 7,
    private _day: number = 9
  ) {}

  printFormat(): string {
    const day = this.addPadding(this._day);
    const month = this.addPadding(this._month);

    return `${day}/${month}/${this._year}`;
  }

  private addPadding(value: number) {
    if (value < 10) {
      return `0${value}`;
    }
    return `${value}`;
  }
  add(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') {
      this._day += amount;
    }
    if (type === 'months') {
      this._month += amount;
    }
    if (type === 'years') {
      this._year += amount;
    }
  }

  get day() {
    return this._day;
  }
  get month() {
    return this._month;
  }
  get year() {
    return this._year;
  }

  get isLeapYear(): boolean {
    // code
    if (this._year % 400 === 0) return true;
    if (this._year % 100 === 0) return false;
    return this._year % 4 === 0;
  }
}

const myDate = new MyDate(1993, 7, 9);
console.log('Fecha', myDate.printFormat());
console.log('Año biciesto (1993):', myDate.isLeapYear);

const myDate2 = new MyDate(2000, 7, 10);
console.log('Año biciesto (2000):', myDate2.isLeapYear);

const myDate3 = new MyDate(2001, 7, 10);
console.log('Año biciesto (2001):', myDate3.isLeapYear);

const myDate4 = new MyDate(2004, 7, 10);
console.log('Año biciesto (2004):', myDate4.isLeapYear);
