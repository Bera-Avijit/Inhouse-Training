package Basic;

public class Student {

    String name;
    int rollno;
    String dept;

    public Student(String name, int rollno, String dept) {
        if (name == null) {
            throw new IllegalArgumentException("Name cannot be null");
        }
        if (rollno <= 0) {
            throw new IllegalArgumentException("Roll number must be greater than 0");
        }
        if (!dept.equals("Computer Science")) {
            throw new IllegalArgumentException("Department must be Computer Science");
        }
        this.name = name;
        this.rollno = rollno;
        this.dept = dept;
        System.out.println("Student created: " + this.name + ", Roll No: " + this.rollno + ", Dept: " + this.dept);
    }

    public static void main(String[] args) {
        // create a class student with fields name, rollno, dept and condition when creating objects that name cannot be null, roll no cannot be 0 or less dept can only be computer science
        Student student1 = new Student("Alice", 1, "Computer Science");
        Student student3 = new Student("Bob", 2, "Computer Science");
        Student student4 = new Student(null, 3, "Mathematics");
    }

}
