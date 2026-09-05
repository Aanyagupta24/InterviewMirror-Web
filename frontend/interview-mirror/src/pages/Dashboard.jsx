function Dashboard({ history, onStart }) {
  const scores = history
    .map((item) => parseInt(item.score))
    .filter((score) => !isNaN(score));

  const totalInterviews = history.length;

  const averageScore =
    scores.length > 0
      ? Math.round(
          scores.reduce((sum, score) => sum + score, 0) / scores.length
        )
      : 0;

  const bestScore =
    scores.length > 0 ? Math.max(...scores) : 0;

  const getPerformance = () => {
    if (averageScore >= 85) return "Excellent";
    if (averageScore >= 70) return "Good";
    if (averageScore >= 50) return "Needs Work";
    return "Just Getting Started";
  };

  return (
    <div className="dashboard-page">

      {/* HEADER */}

      <section className="dashboard-hero">

        <div>
          <span className="dashboard-eyebrow">
            YOUR INTERVIEW SPACE
          </span>

          <h1>
            Welcome back.
            <br />
            <em>Keep improving.</em>
          </h1>

          <p>
            Track your interview practice, review your performance,
            and prepare for your next opportunity.
          </p>
        </div>

        <button
          className="dashboard-start-btn"
          onClick={onStart}
        >
          Start New Interview
          <span>↗</span>
        </button>

      </section>


      {/* STAT CARDS */}

      <section className="dashboard-stats">

        <div className="dashboard-stat">
          <span>01 / INTERVIEWS</span>
          <strong>{totalInterviews}</strong>
          <p>Total attempts</p>
        </div>

        <div className="dashboard-stat stat-blue">
          <span>02 / AVERAGE</span>
          <strong>{averageScore}%</strong>
          <p>Your average score</p>
        </div>

        <div className="dashboard-stat stat-yellow">
          <span>03 / BEST SCORE</span>
          <strong>{bestScore}%</strong>
          <p>Your highest score</p>
        </div>

        <div className="dashboard-stat stat-coral">
          <span>04 / STATUS</span>
          <strong>{getPerformance()}</strong>
          <p>Current performance</p>
        </div>

      </section>


      {/* MAIN GRID */}

      <section className="dashboard-grid">

        {/* PERFORMANCE */}

        <div className="dashboard-panel performance-panel">

          <div className="panel-header">
            <div>
              <span>PERFORMANCE</span>
              <h2>Your progress</h2>
            </div>

            <span className="panel-number">01</span>
          </div>

          {scores.length > 0 ? (
            <div className="score-list">

              {scores.slice(0, 6).map((score, index) => (

                <div
                  className="score-row"
                  key={index}
                >

                  <div className="score-label">
                    <span>
                      ATTEMPT {scores.length - index}
                    </span>

                    <strong>{score}%</strong>
                  </div>

                  <div className="score-track">
                    <div
                      style={{
                        width: `${score}%`
                      }}
                    />
                  </div>

                </div>

              ))}

            </div>
          ) : (

            <div className="dashboard-empty">

              <div className="empty-icon">
                ↗
              </div>

              <h3>
                Your progress starts here.
              </h3>

              <p>
                Complete your first mock interview and your
                performance data will appear here.
              </p>

              <button onClick={onStart}>
                Take your first interview →
              </button>

            </div>

          )}

        </div>


        {/* QUICK PRACTICE */}

        <div className="dashboard-panel practice-panel">

          <div className="panel-header">

            <div>
              <span>QUICK PRACTICE</span>
              <h2>Choose a focus</h2>
            </div>

            <span className="panel-number">02</span>

          </div>


          <div className="practice-options">

            <button onClick={onStart}>
              <span>01</span>

              <div>
                <strong>HR Interview</strong>
                <small>
                  Behavioral & personality
                </small>
              </div>

              <b>↗</b>
            </button>


            <button onClick={onStart}>
              <span>02</span>

              <div>
                <strong>Technical</strong>
                <small>
                  CS fundamentals
                </small>
              </div>

              <b>↗</b>
            </button>


            <button onClick={onStart}>
              <span>03</span>

              <div>
                <strong>JavaScript</strong>
                <small>
                  Development concepts
                </small>
              </div>

              <b>↗</b>
            </button>

          </div>

        </div>

      </section>


      {/* RECENT INTERVIEWS */}

      <section className="dashboard-panel recent-panel">

        <div className="panel-header">

          <div>
            <span>RECENT ACTIVITY</span>
            <h2>Latest interviews</h2>
          </div>

          <span className="panel-number">03</span>

        </div>


        {history.length > 0 ? (

          <div className="recent-list">

            {history.slice(0, 5).map((item, index) => (

              <div
                className="recent-row"
                key={index}
              >

                <div className="recent-type">

                  <div className="recent-icon">
                    IM
                  </div>

                  <div>
                    <strong>{item.type}</strong>
                    <span>{item.date}</span>
                  </div>

                </div>

                <span className="recent-score">
                  {item.score}
                </span>

                <button>
                  View →
                </button>

              </div>

            ))}

          </div>

        ) : (

          <div className="recent-empty">
            No interviews yet. Start your first one above.
          </div>

        )}

      </section>


      {/* BOTTOM CTA */}

      <section className="dashboard-cta">

        <div>

          <span>
            READY FOR ANOTHER ROUND?
          </span>

          <h2>
            Practice until
            <br />
            <em>confidence feels natural.</em>
          </h2>

        </div>

        <button onClick={onStart}>
          Start Mock Interview
          <span>↗</span>
        </button>

      </section>

    </div>
  );
}

export default Dashboard;