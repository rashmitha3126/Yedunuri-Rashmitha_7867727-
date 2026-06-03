import java.util.Scanner;

public class StringReversal {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        // Prompt user for a string
        System.out.print("Enter a string: ");
        String str = sc.nextLine();

        // Reverse the string using StringBuilder
        String reversed = new StringBuilder(str).reverse().toString();

        // Display the reversed string
        System.out.println("Reversed String: " + reversed);

        sc.close();
    }
}