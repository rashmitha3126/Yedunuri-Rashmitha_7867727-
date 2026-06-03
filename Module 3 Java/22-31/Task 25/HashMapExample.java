import java.util.HashMap;
import java.util.Scanner;

public class HashMapExample {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        // Create HashMap
        HashMap<Integer, String> students = new HashMap<>();

        // Ask how many entries to add
        System.out.print("How many students do you want to add? ");
        int n = sc.nextInt();
        sc.nextLine(); // Consume newline

        // Add entries to HashMap
        for (int i = 1; i <= n; i++) {
            System.out.print("Enter Student ID: ");
            int id = sc.nextInt();
            sc.nextLine(); // Consume newline

            System.out.print("Enter Student Name: ");
            String name = sc.nextLine();

            students.put(id, name);
        }

        // Retrieve a name using ID
        System.out.print("\nEnter Student ID to search: ");
        int searchId = sc.nextInt();

        if (students.containsKey(searchId)) {
            System.out.println("Student Name: " + students.get(searchId));
        } else {
            System.out.println("Student ID not found.");
        }

        sc.close();
    }
}