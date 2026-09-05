import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import InterviewSelect from "./pages/InterviewSelect";
import Interview from "./pages/Interview";
import Result from "./pages/Result";
import History from "./pages/History";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  const [page, setPage] = useState("login");
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
      {page === "login" && (
        <Login
          onSignup={() => setPage("signup")}
          onLoginSuccess={() => setPage("home")}
        />
      )}
      {page === "signup" && (
        <Signup
          onLogin={() => setPage("login")}
          onSignupSuccess={() => setPage("home")}
        />
      )}

      {page !== "signup" && (
        <>
          <Navbar
            onHome={() => setPage("home")}
            onHistory={() => setPage("history")}
          />

          {page === "home" && (
            <Home
              onStart={() => setPage("select")}
              onDashboard={() => setPage("dashboard")}
            />
          )}

          {page === "dashboard" && (
            <Dashboard
              history={history}
              onStart={() => setPage("select")}
            />
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
        </>
      )}

    </div>
  );
}

export default App;