import java.util.List;
import java.util.stream.Collectors;

// Define a record
record Person(String name, int age) {}

public class RecordExample {

    public static void main(String[] args) {

        // Create record instances
        Person p1 = new Person("Rahul", 20);
        Person p2 = new Person("Priya", 17);
        Person p3 = new Person("Anjali", 22);
        Person p4 = new Person("Kiran", 16);

        // Print individual records
        System.out.println("Person Records:");
        System.out.println(p1);
        System.out.println(p2);
        System.out.println(p3);
        System.out.println(p4);

        // Store records in a List
        List<Person> people = List.of(p1, p2, p3, p4);

        // Filter people aged 18 or older
        List<Person> adults = people.stream()
                                    .filter(person -> person.age() >= 18)
                                    .collect(Collectors.toList());

        // Display filtered records
        System.out.println("\nPeople aged 18 or older:");
        adults.forEach(System.out::println);
    }
}