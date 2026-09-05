function History({ history }) {
  return (
    <div className="history-page">

      <div className="history-heading">
        <span className="eyebrow">YOUR PROGRESS</span>

        <h1>Interview History</h1>

        <p>
          Track your previous attempts and keep improving.
        </p>
      </div>

      {history.length === 0 ? (

        <div className="empty-history">
          <span>NO ATTEMPTS YET</span>

          <h2>
            Your interview journey starts here.
          </h2>

          <p>
            Complete your first mock interview and
            your results will appear here.
          </p>
        </div>

      ) : (

        <div className="history-table">

          <div className="history-header">
            <span>INTERVIEW</span>
            <span>DATE</span>
            <span>SCORE</span>
          </div>

          {history.map((item, index) => (

            <div
              className="history-row"
              key={index}
            >

              <div className="history-type">

                <div className="mini-icon">
                  {item.type === "Technical"
                    ? "CS"
                    : item.type === "JavaScript"
                    ? "JS"
                    : "HR"}
                </div>

                <strong>
                  {item.type} Interview
                </strong>

              </div>

              <span>{item.date}</span>

              <strong className="history-score">
                {item.score}
              </strong>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default History;