import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class StreamAPIExample {

    public static void main(String[] args) {

        // Create a List of integers
        List<Integer> numbers = Arrays.asList(
                1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

        System.out.println("Original List:");
        System.out.println(numbers);

        // Filter even numbers using Stream API
        List<Integer> evenNumbers = numbers.stream()
                                           .filter(n -> n % 2 == 0)
                                           .collect(Collectors.toList());

        System.out.println("\nEven Numbers:");
        System.out.println(evenNumbers);
    }
}