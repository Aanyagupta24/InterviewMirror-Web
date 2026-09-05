package interview_mirror.controller;

import interview_mirror.model.Interview;
import interview_mirror.service.InterviewService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/api/interviews")
@CrossOrigin(origins = "http://localhost:5173")
public class InterviewController {

    private final InterviewService interviewService;

    public InterviewController(InterviewService interviewService) {
        this.interviewService = interviewService;
    }

    @PostMapping
    public ResponseEntity<Interview> saveInterview(
            @RequestBody Interview interview,
            Principal principal) {

        Interview savedInterview =
                interviewService.saveInterview(
                        interview,
                        principal.getName()
                );

        return ResponseEntity.ok(savedInterview);
    }

    @GetMapping
    public ResponseEntity<List<Interview>> getInterviews(
            Principal principal) {

        return ResponseEntity.ok(
                interviewService.getUserInterviews(
                        principal.getName()
                )
        );
    }
}