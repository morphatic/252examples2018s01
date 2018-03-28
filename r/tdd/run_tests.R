# run_tests.R

# import testing library
library(testthat)
library(crayon)

# run files named ./tests/test*.R
test_dir("./tests", reporter = "progress")