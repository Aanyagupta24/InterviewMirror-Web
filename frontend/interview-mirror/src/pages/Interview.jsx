import { useState } from "react";
import questions from "../data/questions";

function Interview({ interviewType, onComplete }) {
  const currentQuestions = questions[interviewType];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer, setAnswer] = useState("");
  const [score, setScore] = useState(0);

  const handleNext = () => {
  // Don't allow empty answers
  if (answer.trim() === "") {
    alert("Please write an answer before continuing.");
    return;
  }

  const keywords = currentQuestions[currentQuestion].keywords;

  const userAnswer = answer.toLowerCase();

  const matchedKeywords = keywords.filter((keyword) =>
    userAnswer.includes(keyword.toLowerCase())
  );

  // 2 or more keywords = successful answer
  const newScore =
    matchedKeywords.length >= 2 ? score + 1 : score;

  setScore(newScore);
  setAnswer("");

  if (currentQuestion < currentQuestions.length - 1) {
    setCurrentQuestion(currentQuestion + 1);
  } else {
    onComplete(newScore);
  }
};

  const progress =
    ((currentQuestion + 1) / currentQuestions.length) * 100;

  return (
    <div className="interview-page">

      {/* Header */}
      <div className="interview-header">

        <div>
          <span className="eyebrow">
            MOCK INTERVIEW
          </span>

          <h1>{interviewType}</h1>
        </div>

        <div className="question-counter">
          <strong>
            {String(currentQuestion + 1).padStart(2, "0")}
          </strong>

          <span>
            / {String(currentQuestions.length).padStart(2, "0")}
          </span>
        </div>

      </div>


      {/* Progress Bar */}
      <div className="interview-progress">
        <div
          style={{
            width: `${progress}%`
          }}
        ></div>
      </div>


      {/* Question Area */}
      <div className="question-layout">

        <div className="question-number">
          Q{String(currentQuestion + 1).padStart(2, "0")}
        </div>


        <div className="question-content">

          <span className="question-label">
            YOUR QUESTION
          </span>

          <h2>
            {currentQuestions[currentQuestion].question}
          </h2>


          {/* Answer Box */}
          <textarea
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Type your answer here..."
          />


          {/* Bottom Section */}
          <div className="answer-footer">

            <span>
              Take your time and structure your answer clearly.
            </span>

            <button
              className="primary-btn"
              onClick={handleNext}
            >
              {currentQuestion === currentQuestions.length - 1
                ? "Finish Interview →"
                : "Next Question →"}
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Interview;
