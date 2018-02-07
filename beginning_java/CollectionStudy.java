package beginning_java;
import java.util.*;

public class CollectionStudy {
  public static void main(String[] args) {
    //Basic interface for arrays: creating, populating, and printing
    int[] arr = new int[5];
    arr[0] = 1;
    arr[1] = 2;
    System.out.println("Regular array first element: " + arr[0]);
    // I believe the next line returns a pointer. It certainly does not show the array contents.
    System.out.println("Regular array pointer to arr beginning: " + arr);

    //Basic interface for ArrayLists: creating, populating, and printing
    ArrayList<Integer> al = new ArrayList<Integer>(5);
    al.add(1);
    al.add(2);
    System.out.println("ArrayList first element: " + al.get(0));
    System.out.println("ArrayList all elements: " + al);

    //Basic interface for HashSets: creating, populating, and printing
    // Note, because it is unordered, we cannot use index numbers or .get. We can just read it though.
    HashSet<Integer> hs = new HashSet<Integer>(5);
    hs.add(3);
    hs.add(2);
    hs.add(1);
    hs.add(2);
    hs.add(4);
    // Regardless of order we add the elements, they come out sorted.
    // Note the duplicate is not stored at all.
    System.out.println("HashSet elements: " + hs);

    //Basic interface for TreeSets: creating, populating, and printing
    // We cannot set an initial size for a TreeSet.
    TreeSet<Integer> ts = new TreeSet<Integer>();
    ts.add(3);
    ts.add(2);
    ts.add(1);
    ts.add(2);
    ts.add(4);
    // Regardless of order we add the elements, they come out sorted.
    // Note the duplicate is not stored at all.
    System.out.println("TreeSet elements: " + ts);

    //Basic interface for LinkedHashSets: creating, populating, and printing
    LinkedHashSet<Integer> lhs = new LinkedHashSet<Integer>();
    lhs.add(3);
    lhs.add(2);
    lhs.add(1);
    lhs.add(2);
    lhs.add(4);
    // Regardless of order we add the elements, they come out sorted.
    // Note the duplicate is not stored at all.
    System.out.println("LinkedHashSet elements: " + ts);


  }
}
