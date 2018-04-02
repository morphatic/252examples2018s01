# test_fizzbuzz.py

# import code to be tested
from fizzbuzz import FizzBuzz

# Write a smoke test
def test_smoke():
  assert True == True

# create an instance of the FizzBuzz class
fb = FizzBuzz()

def test_fizz():
  assert fb.fizz(3) == "Fizz"
  assert fb.fizz(33) == "Fizz"
  assert fb.fizz(30339) == "Fizz"
  assert fb.fizz(1) == 1
  assert fb.fizz(5) == 5
  assert fb.fizz(37) == 37

def test_buzz():
  assert fb.buzz(5) == "Buzz"
  assert fb.buzz(55) == "Buzz"
  assert fb.buzz(505505) == "Buzz"
  assert fb.buzz(1) == 1
  assert fb.buzz(3) == 3
  assert fb.buzz(37) == 37
