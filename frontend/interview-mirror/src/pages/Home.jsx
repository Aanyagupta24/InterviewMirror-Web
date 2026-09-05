function Home({ onStart, onDashboard }) {
    return (
    <div className="home">

      {/* =========================================
          HERO SECTION
      ========================================= */}

      <section className="hero">

        <div className="hero-content">

          <div className="hero-badge">
            <span></span>
            Interview preparation, simplified
          </div>

          <h1>
            Your interview.
            <br />
            <em>Reflected back.</em>
          </h1>

          <p className="hero-description">
            Practice realistic interview questions, evaluate your
            performance, and build confidence before the real interview.
          </p>

          <div className="hero-buttons">

            <button
              className="primary-btn"
              onClick={onStart}
            >
              Start Mock Interview
              <span>→</span>
            </button>

            <button
              className="secondary-btn"
              onClick={() =>
                document
                  .getElementById("how-it-works")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              How it works ↓
            </button>
            <button
              className="dashboard-btn"
              onClick={onDashboard}
            >
              View Dashboard →
            </button>
          </div>

          <div className="hero-stats">

            <div>
              <strong>15+</strong>
              <span>Practice Questions</span>
            </div>

            <div>
              <strong>03</strong>
              <span>Interview Categories</span>
            </div>

            <div>
              <strong>∞</strong>
              <span>Attempts</span>
            </div>

          </div>

        </div>


        {/* HERO VISUAL */}

        <div className="hero-visual">

          <div className="hero-note">
            PREPARE
            <br />
            PERFORM
            <br />
            IMPROVE
          </div>

          <div className="dashboard-card">

            <div className="dashboard-top">
              <span>INTERVIEW SESSION</span>
              <span className="live-dot">● LIVE</span>
            </div>

            <div className="question-preview">

              <small>QUESTION 03 / 05</small>

              <h3>
                What are your strengths as a developer?
              </h3>

              <div className="answer-lines">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="progress-bar">
                <div></div>
              </div>

            </div>

            <div className="score-preview">

              <div>
                <small>CURRENT SCORE</small>
                <strong>82%</strong>
              </div>

              <div className="score-ring">
                4/5
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          MARQUEE / STATEMENT
      ========================================= */}

      <section className="statement-section">

        <div className="statement-line"></div>

        <p>
          GOOD INTERVIEWS AREN'T IMPROVISED.
          <span> THEY'RE PRACTICED.</span>
        </p>

        <div className="statement-line"></div>

      </section>


      {/* =========================================
          WHY INTERVIEWMIRROR
      ========================================= */}

      <section className="why-section">

        <div className="section-intro">

          <div>
            <span className="section-number">01</span>
            <span className="section-label">WHY INTERVIEWMIRROR</span>
          </div>

          <h2>
            Turn nervous
            <br />
            preparation into
            <br />
            <em>real confidence.</em>
          </h2>

        </div>


        <div className="why-grid">

          <div className="why-card">

            <span className="card-number">01</span>

            <div className="why-icon">
              ↗
            </div>

            <h3>Practice without pressure</h3>

            <p>
              Get comfortable answering interview questions
              before you have to answer them in front of a
              recruiter.
            </p>

          </div>


          <div className="why-card yellow-card">

            <span className="card-number">02</span>

            <div className="why-icon">
              ◒
            </div>

            <h3>Understand your performance</h3>

            <p>
              Receive a simple score after every attempt so
              you know exactly how well you performed.
            </p>

          </div>


          <div className="why-card coral-card">

            <span className="card-number">03</span>

            <div className="why-icon">
              ↗
            </div>

            <h3>Improve with every attempt</h3>

            <p>
              Review your previous attempts and keep working
              on the areas that need improvement.
            </p>

          </div>

        </div>

      </section>


      {/* =========================================
          HOW IT WORKS
      ========================================= */}

      <section
        className="how-section"
        id="how-it-works"
      >

        <div className="how-heading">

          <span className="section-label">
            THE PROCESS
          </span>

          <h2>
            Three steps.
            <br />
            <em>One better interview.</em>
          </h2>

        </div>


        <div className="process">

          <div className="process-step">

            <div className="process-top">
              <span>01</span>
              <div></div>
            </div>

            <h3>Choose</h3>

            <p>
              Select the type of interview you want to
              practice.
            </p>

            <small>
              HR / TECHNICAL / JAVASCRIPT
            </small>

          </div>


          <div className="process-step">

            <div className="process-top">
              <span>02</span>
              <div></div>
            </div>

            <h3>Answer</h3>

            <p>
              Read each question carefully and write your
              answer as if you're sitting in a real interview.
            </p>

            <small>
              THINK / STRUCTURE / ANSWER
            </small>

          </div>


          <div className="process-step">

            <div className="process-top">
              <span>03</span>
              <div></div>
            </div>

            <h3>Reflect</h3>

            <p>
              See your score, understand your performance,
              and identify what to improve next.
            </p>

            <small>
              SCORE / REVIEW / IMPROVE
            </small>

          </div>

        </div>

      </section>


      {/* =========================================
          INTERVIEW TYPES
      ========================================= */}

      <section className="categories-section">

        <div className="categories-heading">

          <div>
            <span className="section-number">02</span>
            <span className="section-label">
              PRACTICE YOUR WAY
            </span>
          </div>

          <h2>
            Choose your
            <br />
            <em>arena.</em>
          </h2>

          <p>
            Different interviews demand different preparation.
            Pick the category that matches your goal.
          </p>

        </div>


        <div className="category-list">

          <div className="category-item">

            <div className="category-id">
              01
            </div>

            <div className="category-main">
              <span>BEHAVIORAL</span>
              <h3>HR Interview</h3>
            </div>

            <p>
              Personality, strengths, goals and workplace
              behavior.
            </p>

            <button onClick={onStart}>
              Start →
            </button>

          </div>


          <div className="category-item active-category">

            <div className="category-id">
              02
            </div>

            <div className="category-main">
              <span>CORE SKILLS</span>
              <h3>Technical Interview</h3>
            </div>

            <p>
              Programming, databases, operating systems
              and CS fundamentals.
            </p>

            <button onClick={onStart}>
              Start →
            </button>

          </div>


          <div className="category-item">

            <div className="category-id">
              03
            </div>

            <div className="category-main">
              <span>DEVELOPMENT</span>
              <h3>JavaScript Interview</h3>
            </div>

            <p>
              JavaScript fundamentals and common
              development questions.
            </p>

            <button onClick={onStart}>
              Start →
            </button>

          </div>

        </div>

      </section>


      {/* =========================================
          PERFORMANCE PREVIEW
      ========================================= */}

      <section className="performance-section">

        <div className="performance-text">

          <span className="section-label">
            YOUR PERFORMANCE
          </span>

          <h2>
            Don't just
            <br />
            practice.
            <br />
            <em>Measure.</em>
          </h2>

          <p>
            Every completed interview gives you a snapshot
            of your performance. Use it to understand where
            you're strong and where you need more practice.
          </p>

          <button
            className="outline-btn"
            onClick={onStart}
          >
            Take an Interview →
          </button>

        </div>


        <div className="performance-card">

          <div className="performance-header">
            <span>PERFORMANCE REPORT</span>
            <span>01</span>
          </div>


          <div className="performance-score">

            <div>
              <small>OVERALL SCORE</small>

              <strong>80%</strong>

              <span>
                Above your previous attempt
              </span>
            </div>

            <div className="performance-circle">
              4/5
            </div>

          </div>


          <div className="performance-details">

            <div>
              <span>Questions answered</span>
              <strong>05</strong>
            </div>

            <div>
              <span>Successful answers</span>
              <strong>04</strong>
            </div>

            <div>
              <span>Completion</span>
              <strong>100%</strong>
            </div>

          </div>


          <div className="performance-bars">

            <div>
              <span>Technical concepts</span>
              <div>
                <i style={{ width: "85%" }}></i>
              </div>
            </div>

            <div>
              <span>Answer structure</span>
              <div>
                <i style={{ width: "70%" }}></i>
              </div>
            </div>

            <div>
              <span>Clarity</span>
              <div>
                <i style={{ width: "78%" }}></i>
              </div>
            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          BIG QUOTE
      ========================================= */}

      <section className="quote-section">

        <div className="quote-mark">
          “
        </div>

        <blockquote>
          Confidence doesn't come from knowing
          every answer. It comes from knowing
          <em> you're prepared.</em>
        </blockquote>

        <span>
          — INTERVIEWMIRROR
        </span>

      </section>


      {/* =========================================
          FINAL CTA
      ========================================= */}

      <section className="final-cta">

        <div className="cta-left">

          <span className="section-label">
            READY?
          </span>

          <h2>
            Your next interview
            <br />
            starts <em>here.</em>
          </h2>

        </div>

        <div className="cta-right">

          <p>
            Practice today. Walk into your next interview
            knowing you've already been there once.
          </p>

          <button
            className="cta-button"
            onClick={onStart}
          >
            Start Mock Interview
            <span>↗</span>
          </button>

        </div>

      </section>


      {/* =========================================
          FOOTER
      ========================================= */}

      <footer className="home-footer">

        <div className="footer-brand">

          <div className="footer-logo">
            IM
          </div>

          <div>
            <strong>InterviewMirror</strong>
            <span>
              Practice. Perform. Improve.
            </span>
          </div>

        </div>


        <div className="footer-links">

          <button onClick={onStart}>
            Start Interview
          </button>

          <button
            onClick={() =>
              document
                .getElementById("how-it-works")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            How it works
          </button>

        </div>


        <div className="footer-copy">
          <span>WEB-BASED MOCK INTERVIEW SYSTEM</span>
          <span>© 2026 INTERVIEWMIRROR</span>
        </div>

      </footer>

    </div>
  );
}

export default Home;