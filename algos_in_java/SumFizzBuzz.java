// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//
// Find the sum of all the multiples of 3 or 5 below 1000.

package algos_in_java;

public class SumFizzBuzz {
  public static void main(String[] args) {
    int sum = 0;
    for(int i=3; i<1000; i++) {
      if(i%3 == 0 || i%5 == 0){
        sum += i;
      }
    }
    System.out.println("Sum of all numbers divisible by 3 and 5, from 0 - 1000:");
    System.out.println(sum);
  }
}
