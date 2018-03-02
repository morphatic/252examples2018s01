# test_arithmetic.py

# import code to be tested
from sum import sum

# Write a smoke test
def test_smoke():
  assert True == True

# test the sum(a,b) function
def test_sum():
  assert sum(3,4) == 7
  assert sum(5.5,12) == 17.5
  assert sum(-3,35) == 32
  assert sum(1234,5678) == 6912