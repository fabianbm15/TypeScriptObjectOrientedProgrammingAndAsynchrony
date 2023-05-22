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

  set month(newValue: number) {
    if (newValue >= 1 && newValue <= 12) {
      this._month = newValue;
    } else {
      throw new Error('Month out of range.');
    }
  }
}

const myDate = new MyDate(1993, 7, 9);
console.log('Fecha', myDate.printFormat());
myDate.month = 4;
console.log('Mes 4:', myDate.month);

const myDate2 = new MyDate(2000, 7, 10);
myDate.month = 30;
console.log('Mes 30 (Esto no debe aparecer):', myDate2.month);
