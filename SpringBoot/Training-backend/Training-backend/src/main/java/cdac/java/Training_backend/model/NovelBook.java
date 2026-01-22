package cdac.java.Training_backend.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@DiscriminatorValue("NOVEL")
public class NovelBook extends Book {
    private String genre;
}
