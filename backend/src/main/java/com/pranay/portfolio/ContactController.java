package com.pranay.portfolio;

import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173")
public class ContactController {
    private final ContactMessageRepository repository;

    public ContactController(ContactMessageRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/health")
    public Map<String, String> health() {
        return Map.of("status", "ok", "service", "pranay-portfolio-api");
    }

    @PostMapping("/contact")
    public ResponseEntity<Map<String, String>> sendMessage(@Valid @RequestBody ContactRequest request) {
        repository.save(new ContactMessage(
            request.name().trim(),
            request.email().trim(),
            request.message().trim()
        ));
        return ResponseEntity.status(HttpStatus.CREATED)
            .body(Map.of("status", "saved", "message", "Thanks for reaching out."));
    }
}
