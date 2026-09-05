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

const API_URL = import.meta.env.VITE_API_URL;

function App() {
  const [page, setPage] = useState("login");
  const [interviewType, setInterviewType] = useState("Technical");
  const [score, setScore] = useState(0);
  const [history, setHistory] = useState([]);

  // Load interview history from MySQL through Spring Boot
  useEffect(() => {
  const token = localStorage.getItem("token");

  if (!token) {
    return;
  }

  fetch(`${API_URL}/api/interviews`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`History request failed: ${response.status}`);
      }

      return response.json();
    })
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
}, [page]);

  const saveInterview = (finalScore) => {
    const newInterview = {
      type: interviewType,
      score: finalScore,
      date: new Date().toLocaleDateString("en-GB")
    };

    fetch(`${API_URL}/api/interviews`, {
      method: "POST",
      headers: {
  "Content-Type": "application/json",
  Authorization: `Bearer ${localStorage.getItem("token")}`
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
          onSignupSuccess={() => setPage("login")}
        />
      )}

      {page !== "signup" && page !== "login" && (
        <>
          <Navbar 
          onHome={() => setPage("home")}
          onHistory={() => setPage("history")} 
          onLogout={() => { 
            localStorage.removeItem("token"); localStorage.removeItem("userName"); localStorage.removeItem("userEmail"); setPage("login"); 
            }}
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