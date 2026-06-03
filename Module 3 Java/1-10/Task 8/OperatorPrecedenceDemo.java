public class OperatorPrecedenceDemo {
    public static void main(String[] args) {

        int result1 = 10 + 5 * 2;
        int result2 = (10 + 5) * 2;
        int result3 = 20 - 10 / 2;
        int result4 = 8 + 4 * 3 - 2;

        System.out.println("10 + 5 * 2 = " + result1);
        System.out.println("(10 + 5) * 2 = " + result2);
        System.out.println("20 - 10 / 2 = " + result3);
        System.out.println("8 + 4 * 3 - 2 = " + result4);
    }
}