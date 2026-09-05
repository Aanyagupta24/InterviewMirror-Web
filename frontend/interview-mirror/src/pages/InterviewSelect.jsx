function InterviewSelect({ onSelect }) {
  return (
    <div className="selection">

      <div className="selection-heading">
        <span>STEP 01</span>

        <h1>Choose your interview.</h1>

        <p>
          Pick a category and start practicing.
          You can attempt an interview as many times as you want.
        </p>
      </div>

      <div className="interview-cards">

        <div className="interview-card">
          <div className="card-icon">HR</div>

          <div className="card-content">
            <span className="card-label">BEHAVIORAL</span>

            <h2>HR Interview</h2>

            <p>
              Practice questions about your personality,
              strengths, goals and workplace behavior.
            </p>

            <div className="card-footer">
              <span>5 Questions</span>

              <button onClick={() => onSelect("HR")}>
                  Start →
              </button>
            </div>
          </div>
        </div>

        <div className="interview-card featured-card">
          <div className="card-icon">CS</div>

          <div className="card-content">
            <span className="card-label">CORE SKILLS</span>

            <h2>Technical Interview</h2>

            <p>
              Test your knowledge of programming,
              databases, operating systems and CS fundamentals.
            </p>

            <div className="card-footer">
              <span>5 Questions</span>

              <button onClick={() => onSelect("Technical")}>
                Start →
              </button>
            </div>
          </div>
        </div>

        <div className="interview-card">
          <div className="card-icon">JS</div>

          <div className="card-content">
            <span className="card-label">DEVELOPMENT</span>

            <h2>JavaScript Interview</h2>

            <p>
              Practice JavaScript fundamentals and
              commonly asked development questions.
            </p>

            <div className="card-footer">
              <span>5 Questions</span>

              <button onClick={() => onSelect("JavaScript")}>
                Start →
               </button>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default InterviewSelect;