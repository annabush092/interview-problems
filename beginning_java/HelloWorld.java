// To run:
// javac beginning_java/HelloWorld.java   // to compile
// java beginning_java.HelloWorld    // to run

package beginning_java;

public class HelloWorld {

  public static void main(String[] args) {
    // Prints "Hello, World" to the terminal window.
    int x = 2;
    System.out.println("Hi " + Integer.toString(passArgs(x, "String yay")));
    System.out.println("x = " + x);
    if (args.length <= 0) {
      System.out.println("nope");
    } else {
      System.out.println(args[0]);
    }
  }

  private static int passArgs(int n, String m) {
    n = 5;
    System.out.println(m);
    return n;
  }
}
