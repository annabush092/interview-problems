// Used in OOP to test understanding of OOP in java

package beginning_java;

public class Person {
  //variables
  private String name;
  private int age;

  //constructors
  public Person() {
    name = "Default Person";
    age = 0;
  }
  public Person(String n) {
    name = n;
    age = 0;
  }
  public Person(int a) {
    name = "Default Person";
    age = a;
  }
  public Person(String n, int a) {
    name = n;
    age = a;
  }

  //methods
  public String getName() {
    return name;
  }
  public int getAge() {
    return age;
  }

  private void addToAge() {
    age += 1;
  }
  public void itsMyBirthday() {
    addToAge();
    System.out.println("You are now " + age + " years old!");
  }
}
