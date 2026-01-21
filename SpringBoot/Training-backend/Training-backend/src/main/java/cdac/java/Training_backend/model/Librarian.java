package cdac.java.Training_backend.model;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import lombok.Data;

@Entity
@Data
@DiscriminatorValue("LIBRARIAN")
public class Librarian extends User{
    private String employeeNumber;

    @Override
    public boolean canBorrowBook() {
        return true; // Librarians can always borrow books
    }
}
