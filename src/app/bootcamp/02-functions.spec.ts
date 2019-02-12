import { compose } from './compose';
import { formatName } from './utils';
describe('functions', () => {
  describe('function literals', () => {
    it('has a few kinds', () => {

      // Named function
      function add(a: number, b: number): number {
        return a + b;
      }

      // Annonymous Function
      // IIFE - old school.  don;t need these.
      (function() {
        console.log('In the IIFE');
        const name = 'Pete!';
      })();

      // An anonymous function with a variable referring to it.
      const multiply = (function(a: number, b: number) { return a * b; });

      expect(multiply(3, 5)).toBe(15);

      const divide = (a: number, b: number) => a / b;
      expect(divide(10, 5)).toBe(2);

      // function add(a: number, b: number): number {
      //   return a + b;
      // }
    });
  });
});

describe('higher ordder functions', () => {
  it('an example', () => {
    expect(formatName('Han', 'Solo')).toBe('Solo, Han');

    const makeUpper = (s: string) => s.toUpperCase();

    expect(
      formatName('Han', 'Solo', makeUpper)).toBe('SOLO, HAN');

    const makeFlashy = (s: string) => `***${s}***`;

    expect(formatName('Han', 'Solo', makeFlashy)).toBe('***Solo, Han***');

    const doBoth = compose(makeUpper, makeFlashy);

    expect(formatName('Han', 'Solo', doBoth)).toBe('***SOLO, HAN***');

  });
});

describe('practical', () => {

  interface Payments {
    date: string;
    amount: number;
    customer: string;
  }

  const payments: Payments[] = [
    { date: '1/1/2018', amount: 300, customer: 'Bob' },
    { date: '1/8/2018', amount: 615.23, customer: 'Bob' },
    { date: '1/19/2018', amount: 10082, customer: 'Sue' },
    { date: '2/2/2018', amount: 12, customer: 'Bob' },
  ];

  it('Your practice', () => {
    // Write some code here that gives me teh answer
    // the total of all the payments by just Bob.

    const answer: {total: number} = payments
    .filter((payment) => payment.customer === 'Bob')
    .reduce((a, b) => ({ total: a.total + b.amount}), {total: 0});

    expect(answer.total).toBe(927.23);
  });
});
