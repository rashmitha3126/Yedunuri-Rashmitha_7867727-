import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;

public class FileWritingDemo {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        // Prompt user for input
        System.out.print("Enter a string: ");
        String text = sc.nextLine();

        try {
            // Create and write to file
            FileWriter writer = new FileWriter("output.txt");
            writer.write(text);
            writer.close();

            System.out.println("Data has been written to output.txt");

        } catch (IOException e) {
            System.out.println("An error occurred while writing to the file.");
            e.printStackTrace();
        }

        sc.close();
    }
}