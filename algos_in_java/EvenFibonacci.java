// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
//
// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
//
// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

//BONUS refactor: You can refactor this solution to take up less memory- you don't need to store the fibonacci sequence in order to solve this problem. Instead, you can simply have 2 int variables that you continue to update as you go through the sequence.

package algos_in_java;
import java.util.*;

public class EvenFibonacci {
  public static void main(String[] args) {

    //Generate a fibonacci sequence in general: (good for practice)
    // ArrayList<Integer> fibonacciArr = new ArrayList<Integer>();
    // fibonacciArr.addAll(fibonacciGenerator(4000000));
    // System.out.println(fibonacciArr);

    //Solve problem, using fibonacciGenerator as a template
    int fibSum = sumEvenFibs(4000000);
    System.out.println("Sum of all even numbers: " + fibSum);

  }

  private static ArrayList<Integer> fibonacciGenerator(int max) {
    //initialize a dynamically sized array of integers, beginning with [1, 2]
    ArrayList<Integer> fibArr = new ArrayList<Integer>();
    fibArr.add(1);
    fibArr.add(2);

    // generate a fibonacci sequence starting with [1, 2], and not exceeding max.
    int next = fibArr.get(fibArr.size()-1) + fibArr.get(fibArr.size()-2);
    while(next < max) {
      fibArr.add(next);
      next = fibArr.get(fibArr.size()-1) + fibArr.get(fibArr.size()-2);
    }

    //return the fibonacci sequence
    return fibArr;
  }

  private static int sumEvenFibs(int max) {
    //initialize a dynamically sized array of integers, beginning with [1, 2]
    ArrayList<Integer> fibArr = new ArrayList<Integer>();
    fibArr.add(1);
    fibArr.add(2);

    // Initialize a sum, and every time next is even, add it to sum.
    // (2 because we already have added 2 to the initial sequence.)
    int sum = 2;
    // generate a fibonacci sequence starting with [1, 2], and not exceeding max.
    int next = fibArr.get(fibArr.size()-1) + fibArr.get(fibArr.size()-2);
    while(next < max) {
      if(next%2 == 0) {
        System.out.println("Adding " + next);
        sum += next;
      }
      fibArr.add(next);
      next = fibArr.get(fibArr.size()-1) + fibArr.get(fibArr.size()-2);
    }

    return sum;
  }
}