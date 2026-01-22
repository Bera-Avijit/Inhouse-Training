package cdac.java.Training_backend.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@DiscriminatorValue("TEXTBOOK")
public class TextBook extends Book {
    private String subject;
    private int edition;
}
