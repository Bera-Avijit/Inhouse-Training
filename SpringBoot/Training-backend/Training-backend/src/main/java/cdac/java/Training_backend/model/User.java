package cdac.java.Training_backend.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name="users")  // postgreSQL already has a table named "user"
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "user_type", discriminatorType = DiscriminatorType.STRING)
public abstract class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private long isbn;
    private String userName;
    private String contactInfo;
    public abstract boolean canBorrowBook();
}
