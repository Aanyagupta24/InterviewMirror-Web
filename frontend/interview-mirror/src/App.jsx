import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import InterviewSelect from "./pages/InterviewSelect";
import Interview from "./pages/Interview";
import Result from "./pages/Result";
import History from "./pages/History";

function App() {
  const [page, setPage] = useState("home");
  const [interviewType, setInterviewType] = useState("Technical");
  const [score, setScore] = useState(0);
  const [history, setHistory] = useState([]);

  // Load interview history from MySQL through Spring Boot
  useEffect(() => {
    fetch("http://localhost:8080/api/interviews")
      .then((response) => response.json())
      .then((data) => {
        setHistory(
          data.map((item) => ({
            type: item.type,
            score: `${Math.round((item.score / 5) * 100)}%`,
            date: item.date
          }))
        );
      })
      .catch((error) => {
        console.error("Error loading interview history:", error);
      });
  }, []);

  const saveInterview = (finalScore) => {
    const newInterview = {
      type: interviewType,
      score: finalScore,
      date: new Date().toLocaleDateString("en-GB")
    };

    fetch("http://localhost:8080/api/interviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newInterview)
    })
      .then((response) => response.json())
      .then((savedInterview) => {
        setHistory((previousHistory) => [
          {
            type: savedInterview.type,
            score: `${Math.round((savedInterview.score / 5) * 100)}%`,
            date: savedInterview.date
          },
          ...previousHistory
        ]);
      })
      .catch((error) => {
        console.error("Error saving interview:", error);
      });
  };

  return (
    <div>
      <Navbar
        onHome={() => setPage("home")}
        onHistory={() => setPage("history")}
      />

      {page === "home" && (
        <Home onStart={() => setPage("select")} />
      )}

      {page === "select" && (
        <InterviewSelect
          onSelect={(type) => {
            setInterviewType(type);
            setPage("interview");
          }}
        />
      )}

      {page === "interview" && (
        <Interview
          interviewType={interviewType}
          onComplete={(finalScore) => {
            setScore(finalScore);
            saveInterview(finalScore);
            setPage("result");
          }}
        />
      )}

      {page === "result" && (
        <Result
          score={score}
          interviewType={interviewType}
          onTryAgain={() => setPage("select")}
        />
      )}

      {page === "history" && (
        <History history={history} />
      )}
    </div>
  );
}

export default App;