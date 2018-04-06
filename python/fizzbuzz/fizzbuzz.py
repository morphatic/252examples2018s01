# fizzbuzz.py

class FizzBuzz:

  # fizz  = lambda self, x: "Fizz"     if type(x) is int and x %  3 == 0 else x
  fizz  = lambda self, x: "Fizz"     if x %  3 == 0 else x
  buzz  = lambda self, x: "Buzz"     if x %  5 == 0 else x
  fibu  = lambda self, x: "FizzBuzz" if x % 15 == 0 else x
  count = lambda self, x: list(range(1, x + 1))

  def play(self, x):
    numbers = self.count(x)
    return list(map(lambda x: self.fizz(self.buzz(self.fibu(x))), numbers))
