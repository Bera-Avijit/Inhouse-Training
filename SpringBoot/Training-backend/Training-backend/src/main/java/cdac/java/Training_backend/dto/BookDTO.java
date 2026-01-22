package cdac.java.Training_backend.dto;

import lombok.Data;

@Data
public class BookDTO {
    private Long id;
    private String isbn;
    private String title;
    private String author;
    private boolean available = true;
    private String bookType; // e.g., "NOVEL", "TEXTBOOK"
    private String genre; // for NovelBook
    private String subject; // for Textbook
    private String edition; // for Textbook
}
