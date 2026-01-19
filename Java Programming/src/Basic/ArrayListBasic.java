package Basic;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.PriorityQueue;

public class ArrayListBasic {
    public static void main(String[] args) {
        List<Integer> l1 = new ArrayList<>();
        l1.add(1);
        l1.add(2);
        l1.add(3);
        l1.remove(2);
        System.out.println(l1);
        System.out.println(l1.get(1));
        System.out.println(l1.contains(2));

        LinkedList<Integer> l2 = new LinkedList<>();
        l2.add(1);
        l2.add(2);
        l2.addFirst(3);
        l2.addLast(4);
        System.out.println("Display : " + l2);
        l2.pop();
        System.out.println("After pop: " + l2);

        PriorityQueue<Integer> l3 = new PriorityQueue<>();
        l3.offer(5);
        l3.offer(6);
        System.out.println("Priority Queue: " + l3);
        l3.poll();
    }
}
