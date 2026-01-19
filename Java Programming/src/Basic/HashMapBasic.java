package Basic;

import java.util.HashMap;
import java.util.TreeMap;

public class HashMapBasic {
    // take roll no and name of 5 student and show the roll no in sorted manner using Treemap

    public static void main(String[] args) {
        TreeMap<Integer, String> students = new TreeMap<>();
        students.put(3, "Avijit");
        students.put(1, "Akash");
        students.put(5, "Arpan");
        students.put(2, "Ankur");
        students.put(4, "Aditya");
        System.out.println("Students in sorted order of roll numbers:");
        for (Integer rollNo : students.keySet()) {
            System.out.println("Roll No: " + rollNo + ", Name: " + students.get(rollNo));
        }
    }
}
