const counter = x => {
  let output = [];
  for (let i = 1; i <= x; i += 1) {
    output.push(i);
  }
  return output;
};

const fizz = (x) => {
  if ( x % 3 == 0 ) {
    return 'Fizz';
  } else {
    return x;
  }
};

const buzz = (x) => {
  if ( x % 5 == 0 ) {
    return 'Buzz';
  } else {
    return x;
  }
};

const fibu = (x) => {
  if ( x % 15 == 0 ) {
    return 'FizzBuzz';
  } else {
    return x;
  }
};

const play = x => {
  let output = [];
  let numbers = counter(x);
  for ( let i = 0; i < numbers.length; i += 1 ) {

  }
};

module.exports = {
  counter,
  fizz,
  buzz,
  fibu,
  play
};