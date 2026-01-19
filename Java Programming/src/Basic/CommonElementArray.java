package Basic;

import java.util.HashMap;
import java.util.HashSet;

public class CommonElementArray {
    public static void main(String[] args) {
//        int[] arr1 = {1, 2, 3, 4, 5};
//        int[] arr2 = {4, 5, 6, 7, 8};
//        System.out.print("Common elements: ");
//        for (int i = 0; i < arr1.length; i++) {
//            for (int j = 0; j < arr2.length; j++) {
//                if (arr1[i] == arr2[j]) {
//                    System.out.print(arr1[i] + ", ");
//                }
//            }
//        }

        // Using Hash Table first set the elements to remove reprated elements
//        int[] arr1 = {1, 2, 3, 4, 5, 2, 4};
//        int[] arr2 = {4, 5, 6, 7, 8, 2, 4};
//        System.out.print("Common elements: ");
//        HashMap<Integer,Integer> set = new HashMap();
//        for (int num : arr1) {
//            set.put(num, set.getOrDefault(num, 0) + 1);
//        }
////        for (int num : arr2) {
////            if (set.containsKey(num)) {
////                if(set.get(num)-1>0){
////
////                }
////            }
////        }
//        HashSet<Integer> printed = new HashSet<>();
//        for (int num : arr2) {
//            if (set.containsKey(num) && !printed.contains(num)) {
//                System.out.print(num + " ");
//                printed.add(num);
//            }
//        }

        int[] arr1 = {1, 2, 3, 4, 5, 2, 4};
        int[] arr2 = {4, 5, 6, 7, 8, 2, 4, 2};
        HashSet<Integer> set = new HashSet<>();
        for (int num : arr1) {
            set.add(num);
        }
        System.out.print("Common elements: ");
        for(int num : arr2){
            if(set.contains(num)){
                System.out.print(num + " ");
                set.remove(num); // To avoid printing duplicates
            }
        }

    }
}
