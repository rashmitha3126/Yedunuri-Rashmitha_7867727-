import java.util.Scanner;

public class ArraySumAverage {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        // Prompt user for number of elements
        System.out.print("Enter the number of elements: ");
        int n = sc.nextInt();

        int[] numbers = new int[n];
        int sum = 0;

        // Read array elements
        System.out.println("Enter " + n + " elements:");

        for (int i = 0; i < n; i++) {
            numbers[i] = sc.nextInt();
            sum += numbers[i];
        }

        // Calculate average
        double average = (double) sum / n;

        // Display results
        System.out.println("Sum = " + sum);
        System.out.println("Average = " + average);

        sc.close();
    }
}