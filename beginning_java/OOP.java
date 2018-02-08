// Uses Person.java to test OOP understanding

package beginning_java;

public class OOP {
  public static void main(String[] args) {
    Person defaultPerson = new Person();
    System.out.println("Default name: " + defaultPerson.getName());
    System.out.println("Default age: " + defaultPerson.getAge());

    Person anna = new Person("Anna", 26);
    System.out.println("My name: " + anna.getName());
    System.out.println("My age: " + anna.getAge());
    anna.itsMyBirthday();
    System.out.println("My updated age: " + anna.getAge());

    return;
  }
}
