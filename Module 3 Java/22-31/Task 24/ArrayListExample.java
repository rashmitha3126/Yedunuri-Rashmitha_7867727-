import java.util.ArrayList;
import java.util.Scanner;

public class ArrayListExample {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        ArrayList<String> studentNames = new ArrayList<>();

        // Ask how many names to add
        System.out.print("How many student names do you want to enter? ");
        int n = sc.nextInt();
        sc.nextLine(); // Consume newline

        // Add names to ArrayList
        for (int i = 1; i <= n; i++) {
            System.out.print("Enter student name " + i + ": ");
            String name = sc.nextLine();
            studentNames.add(name);
        }

        // Display all names
        System.out.println("\nStudent Names:");
        for (String name : studentNames) {
            System.out.println(name);
        }

        sc.close();
    }
}