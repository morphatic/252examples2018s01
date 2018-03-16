package com.morphatic;

import com.morphatic.GradeBook;

public class Grades {
  public static void main(String[] args) {
    GradeBook gb = new GradeBook(args[0]);
    System.out.println(args[0]);
  }
}