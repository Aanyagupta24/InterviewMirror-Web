function Result({ score, interviewType, onTryAgain }) {
  const total = 5;
  const percentage = Math.round((score / total) * 100);
     let performance = "";
  let message = "";

  if (percentage >= 80) {
    performance = "Excellent";
    message = "You have demonstrated strong preparation and understanding.";
  } else if (percentage >= 60) {
    performance = "Good";
    message = "You have a solid foundation. A little more practice can make you stronger.";
  } else if (percentage >= 40) {
    performance = "Needs Improvement";
    message = "You are on the right track. Focus on improving your answers and concepts.";
  } else {
    performance = "Keep Practicing";
    message = "Don't worry. Practice more interviews and you'll improve with every attempt.";
  }
  return (
    <div className="result-page">

      <div className="result-heading">
        <span className="eyebrow">INTERVIEW COMPLETE</span>

        <h1>Here's your reflection.</h1>

        <p>
          You've completed your {interviewType} Interview.
          Here's how you performed.
        </p>
      </div>

      <div className="result-dashboard">

        <div className="score-section">

          <span>YOUR SCORE</span>

          <div className="big-score">
            {percentage}%
          </div>

          <p>
            {score} out of {total} questions answered successfully.
          </p>
            <h2>{performance}</h2>
            <p>{message}</p>
          <button
            className="primary-btn"
            onClick={onTryAgain}
          >
            Try Another Interview →
          </button>

        </div>

        <div className="feedback-section">

          <div className="feedback-box">
            <span>01</span>
            <h3>Strengths</h3>
            <p>
              You demonstrated a good understanding of
              fundamental technical concepts.
            </p>
          </div>

          <div className="feedback-box">
            <span>02</span>
            <h3>Areas to improve</h3>
            <p>
              Focus on giving more structured and detailed
              explanations in your answers.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Result;