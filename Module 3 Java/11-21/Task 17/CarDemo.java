class Car {

    // Attributes
    String make;
    String model;
    int year;

    // Method to display car details
    void displayDetails() {
        System.out.println("Make: " + make);
        System.out.println("Model: " + model);
        System.out.println("Year: " + year);
        System.out.println();
    }
}

public class CarDemo {

    public static void main(String[] args) {

        // Create first Car object
        Car car1 = new Car();
        car1.make = "Toyota";
        car1.model = "Camry";
        car1.year = 2022;

        // Create second Car object
        Car car2 = new Car();
        car2.make = "Honda";
        car2.model = "Civic";
        car2.year = 2023;

        // Call method to display details
        car1.displayDetails();
        car2.displayDetails();
    }
}