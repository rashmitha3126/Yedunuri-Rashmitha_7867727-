import java.util.Scanner;

public class FactorialCalculator {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // Prompt user for input
        System.out.print("Enter a non-negative integer: ");
        int num = sc.nextInt();

        long factorial = 1;

        // Check if number is negative
        if (num < 0) {
            System.out.println("Factorial is not defined for negative numbers.");
        } else {
            // Calculate factorial using for loop
            for (int i = 1; i <= num; i++) {
                factorial = factorial * i;
            }

            // Display result
            System.out.println("Factorial of " + num + " is: " + factorial);
        }

        sc.close();
    }
}