export class MyDate {
  year: number;
  month: number;
  day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  printFormat(): string {
    return `${this.day}/${this.month}/${this.year}`;
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
}

const myDate = new MyDate(1993, 7, 9);
console.log('myDate.printFormat()', myDate.printFormat());
myDate.add(3, 'days');
console.log('myDate + 3 days', myDate.printFormat());
myDate.add(1, 'months');
console.log('myDate + 1 month', myDate.printFormat());
console.log('day', myDate.day);
console.log('month', myDate.month);
console.log('year', myDate.year);