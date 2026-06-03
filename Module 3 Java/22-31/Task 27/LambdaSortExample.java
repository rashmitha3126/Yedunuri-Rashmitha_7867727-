import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class LambdaSortExample {

    public static void main(String[] args) {

        // Create a List of strings
        List<String> names = new ArrayList<>();

        names.add("Rahul");
        names.add("Anjali");
        names.add("Priya");
        names.add("Kiran");
        names.add("Vikram");

        System.out.println("Before Sorting:");
        System.out.println(names);

        // Sort using lambda expression
        Collections.sort(names, (a, b) -> a.compareTo(b));

        System.out.println("\nAfter Sorting:");
        System.out.println(names);
    }
}