package Basic;

public class StringRev {
    public static void main(String[] args) {
        String str = "Hello";
        String rev = "";

        for (int i = str.length() - 1; i >= 0; i--) {
            rev += str.charAt(i);
        }

        System.out.println("Original String: " + str);
        System.out.println("Reversed String: " + rev);

        StringBuilder sb = new StringBuilder(str);
        String reversedStr = sb.reverse().toString();
        System.out.println("Reversed String using StringBuilder: " + reversedStr);
    }
}
