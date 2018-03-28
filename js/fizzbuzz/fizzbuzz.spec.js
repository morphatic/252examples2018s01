// import the code to be tested
const fb = require('./fizzbuzz');

describe("A FizzBuzz program", () => {

  it("can count from 1 to [some arbitrary number]", () => {
    expect(fb.counter(5)).toEqual([1, 2, 3, 4, 5]);
    expect(fb.counter(10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it("will return 'Fizz' for multiples of 3", () => {
    expect(fb.fizz(3)).toBe('Fizz');
    expect(fb.fizz(33)).toBe('Fizz');
    expect(fb.fizz(303)).toBe('Fizz');

    expect(fb.fizz(2)).not.toBe('Fizz');
  });

  it("will return 'Buzz' for multiples of 5", () => {
    expect(fb.buzz(5)).toBe('Buzz');
    expect(fb.buzz(35)).toBe('Buzz');
    expect(fb.buzz(305)).toBe('Buzz');

    expect(fb.buzz(2)).not.toBe('Buzz');
  });

  it("will return 'FizzBuzz' for multiples of 15", () => {
    expect(fb.fibu(15)).toBe('FizzBuzz');
    expect(fb.fibu(30)).toBe('FizzBuzz');
    expect(fb.fibu(300)).toBe('FizzBuzz');

    expect(fb.fibu(3)).not.toBe('FizzBuzz');
    expect(fb.fibu(5)).not.toBe('FizzBuzz');
  });

  it("can play FizzBuzz", () => {
    expect(fb.play(5)).toEqual([1, 2, "Fizz", 4, "Buzz"]);
  });
});