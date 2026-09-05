import { useState } from "react";

const API_URL = import.meta.env.VITE_API_URL;

function Login({ onSignup, onLoginSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
  e.preventDefault();
  setMessage("");

  try {
    const response = await fetch(`${API_URL}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    });

    const data = await response.text();

    console.log("LOGIN RESPONSE:", data);

    if (response.ok) {
      const result = JSON.parse(data);

      console.log("TOKEN RECEIVED:", result.token ? "YES" : "NO");

      localStorage.setItem("token", result.token);
      localStorage.setItem("userName", result.name);
      localStorage.setItem("userEmail", result.email);

      console.log(
        "TOKEN STORED:",
        localStorage.getItem("token") ? "YES" : "NO"
      );

      setMessage("Login successful!");

      setTimeout(() => {
        onLoginSuccess();
      }, 500);

    } else {
      setMessage(data || "Invalid email or password.");
    }

  } catch (error) {
    console.error(error);
    setMessage("Unable to connect to server.");
  }
};

  return (
    <div className="auth-page">
      <div className="auth-card">

        <h1>Welcome Back</h1>

        <p>Login to your InterviewMirror account</p>

        <form onSubmit={handleLogin}>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">
            Login
          </button>

        </form>

        {message && <p>{message}</p>}

        <p>
          Don't have an account?{" "}
          <button type="button" onClick={onSignup}>
            Sign Up
          </button>
        </p>

      </div>
    </div>
  );
}

export default Login;