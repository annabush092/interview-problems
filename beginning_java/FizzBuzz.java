//given an integer argument, print out every integer from 1 to that argument
// replace every number divisible by 3 with "fizz"
// replace every number divisible by 5 with "buzz"
// replace every number divisible by both with "fizzbuzz"

package beginning_java;
import java.util.Scanner;

public class FizzBuzz {
  public static void main(String[] args) {
    System.out.println("Enter an integer: ");
    Scanner s = new Scanner(System.in);
    int input = s.nextInt();
    fizzbuzz(input);
    return;
  }

  private static void fizzbuzz(int n) {
    System.out.println("your integer is: " + n);
    return;
  }
}
