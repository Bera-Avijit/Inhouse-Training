package Basic;

public class Employee {
    public static void main(String[] args) {
        // create employee class, student and teacher will extend it and teacher will implement salary interface calculation student will implement fees payment interface
        Teacher t = new Teacher("Alice", 30, "Mathematics", 50000);
        Student s = new Student("Bob", 20, "Computer Science", 2000);
    }
}

class Teacher extends Employee implements Salary {
    String name;
    int age;
    String subject;
    double salary;

    public Teacher(String name, int age, String subject, double salary) {
        this.name = name;
        this.age = age;
        this.subject = subject;
        this.salary = salary;
        System.out.println("Teacher created: " + this.name + ", Age: " + this.age + ", Subject: " + this.subject + ", Salary: " + calculateSalary());
    }

    @Override
    public double calculateSalary() {
        return this.salary;
    }
}

class Student extends Employee implements FeesPayment {
    String name;
    int age;
    String dept;
    double fees;

    public Student(String name, int age, String dept, double fees) {
        this.name = name;
        this.age = age;
        this.dept = dept;
        this.fees = fees;
        System.out.println("Student created: " + this.name + ", Age: " + this.age + ", Dept: " + this.dept + ", Fees Paid: " + payFees());
    }

    @Override
    public double payFees() {
        return this.fees;
    }
}

interface Salary {
    double calculateSalary();
}

interface FeesPayment {
    double payFees();
}
