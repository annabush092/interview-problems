//given an integer argument, print out every integer from 1 to that argument
// replace every number divisible by 3 with "fizz"
// replace every number divisible by 5 with "buzz"
// replace every number divisible by both with "fizzbuzz"

package algos_in_java;
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
    for(int i=1; i<=n; i++) {
      if(i%3 == 0 && i%5 == 0){
        System.out.println("fizzbuzz");
      } else if(i%3 == 0) {
        System.out.println("fizz");
      } else if (i%5 == 0) {
        System.out.println("buzz");
      } else {
        System.out.println(i);
      }
    }
    return;
  }
}
