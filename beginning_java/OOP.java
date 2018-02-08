// Uses Person.java to test OOP understanding

package beginning_java;

public class OOP {
  public static void main(String[] args) {

    // test default constructor and variable getters.
    // cannot access personInstance.name or .age directly because they are private.
    Person defaultPerson = new Person();
    System.out.println("Default name: " + defaultPerson.getName());
    System.out.println("Default age: " + defaultPerson.getAge());

    // test overloaded constructor, private/public methods for updating age.
    Person anna = new Person("Anna", 26);
    System.out.println("My name: " + anna.getName());
    System.out.println("My age: " + anna.getAge());
    // cannot use .addToAge() because it is private.
    anna.itsMyBirthday();
    System.out.println("My updated age: " + anna.getAge());

    return;
  }
}
