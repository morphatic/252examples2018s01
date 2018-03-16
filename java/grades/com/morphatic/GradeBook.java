package com.morphatic;

// import 3rd party libraries/classes
import org.apache.commons.csv.CSVParser;
import java.io.File;

public class GradeBook {

  File gradesFile;

  public GradeBook(String file) {
    gradesFile = new File(file);
  }


}