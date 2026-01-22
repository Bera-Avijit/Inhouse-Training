package cdac.java.Training_backend.dto;

import lombok.Data;

@Data
public class UserDTO {
    private Long id;
    private String userName;
    private String contactInfo;
    private String userType; // e.g., "STUDENT", "LIBRARIAN"
    private Integer borrowedBooksCount; // for Student
    private String employeeNumber; // for Librarian
}
