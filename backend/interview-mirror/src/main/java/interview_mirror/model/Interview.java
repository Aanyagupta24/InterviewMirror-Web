package interview_mirror.model;

import jakarta.persistence.*;

@Entity
public class Interview {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String type;
    private int score;
    private String date;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    public Interview() {
    }

    public Interview(String type, int score, String date) {
        this.type = type;
        this.score = score;
        this.date = date;
    }

    public Long getId() {
        return id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}