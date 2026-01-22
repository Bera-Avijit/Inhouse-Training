package cdac.java.Training_backend.model;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import lombok.Data;

@Entity
@Data
@DiscriminatorValue("MEMBER")
public class Member extends User {
    private int borrowBooksCount = 0;
    private static final int MAX_BORROW_LIMIT = 5;

    @Override
    public boolean canBorrowBook() {
        return borrowBooksCount < MAX_BORROW_LIMIT;
    }
}
