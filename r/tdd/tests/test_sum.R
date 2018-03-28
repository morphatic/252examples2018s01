# tests/test_sum.R

# import library to be tested
source("../sum.R")

context("Arithmetic library")
test_that("my_sum() adds 2 numbers", {
  expect_that(my_sum(3, 4), equals(7))
})