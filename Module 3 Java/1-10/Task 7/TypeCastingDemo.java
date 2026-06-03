public class TypeCastingDemo {
    public static void main(String[] args) {

        // Double to Int (Narrowing)
        double decimalNumber = 25.75;
        int intValue = (int) decimalNumber;

        System.out.println("Original Double Value: " + decimalNumber);
        System.out.println("After Casting to Int: " + intValue);

        // Int to Double (Widening)
        int number = 50;
        double doubleValue = (double) number;

        System.out.println("Original Int Value: " + number);
        System.out.println("After Casting to Double: " + doubleValue);
    }
}