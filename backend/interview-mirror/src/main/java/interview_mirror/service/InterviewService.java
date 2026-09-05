package interview_mirror.service;

import interview_mirror.model.Interview;
import interview_mirror.model.User;
import interview_mirror.repository.InterviewRepository;
import interview_mirror.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InterviewService {

    private final InterviewRepository interviewRepository;
    private final UserRepository userRepository;

    public InterviewService(
            InterviewRepository interviewRepository,
            UserRepository userRepository) {

        this.interviewRepository = interviewRepository;
        this.userRepository = userRepository;
    }

    public Interview saveInterview(Interview interview, String email) {

        User user = userRepository
                .findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        interview.setUser(user);

        return interviewRepository.save(interview);
    }

    public List<Interview> getUserInterviews(String email) {

        return interviewRepository.findByUserEmail(email);
    }
}