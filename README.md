# InterviewMirror 🎯

**InterviewMirror** is a full-stack web-based mock interview platform designed to help students practice interviews, evaluate their answers, and track their performance over multiple attempts.

It provides a realistic interview-practice experience with multiple interview categories, automatic scoring, secure user authentication, and personalized interview history.

---

## ✨ Features

* 🔐 **User Authentication**

  * User registration and login
  * Password encryption using BCrypt
  * JWT-based authentication
  * Protected interview history

* 🎤 **Mock Interviews**

  * HR interviews
  * Technical interviews
  * JavaScript interviews
  * Randomized questions for every interview

* 📝 **Answer Evaluation**

  * Keyword-based answer evaluation
  * Automatic score calculation
  * Score displayed after interview completion

* 📊 **Performance Tracking**

  * Total interviews attempted
  * Average score
  * Best score
  * Recent interview history
  * Personalized dashboard

* 💾 **Persistent Data**

  * Interview results stored in MySQL
  * Interview history associated with individual users

* 🎨 **Modern UI**

  * Responsive design
  * Clean and interactive interface
  * Mobile-friendly layout

---

## 🏗️ Architecture

InterviewMirror follows a three-layer full-stack architecture:

```text
React Frontend
      ↓
Spring Boot REST API
      ↓
MySQL Database
```

Authentication works through JWT:

```text
User Login
    ↓
Spring Boot Authentication
    ↓
JWT Token
    ↓
Frontend stores token
    ↓
Protected API Requests
    ↓
Spring Boot JWT Filter
    ↓
User-specific Data
```

---

## 🛠️ Technologies Used

### Frontend

* React
* JavaScript
* HTML5
* CSS3
* Vite

### Backend

* Java 21
* Spring Boot
* Spring Web
* Spring Security
* Spring Data JPA
* Maven
* JWT (JSON Web Token)

### Database

* MySQL

### Security

* BCrypt password hashing
* JWT-based authentication
* Protected REST API endpoints
* Environment variables for sensitive configuration

### Development Tools

* Visual Studio Code
* MySQL
* Git
* GitHub

---

## 📁 Project Structure

```text
InterviewMirror/
│
├── backend/
│   └── interview-mirror/
│       ├── src/
│       │   └── main/
│       │       ├── java/
│       │       │   └── interview_mirror/
│       │       │       ├── controller/
│       │       │       ├── model/
│       │       │       ├── repository/
│       │       │       ├── service/
│       │       │       ├── JwtService.java
│       │       │       ├── JwtAuthenticationFilter.java
│       │       │       ├── SecurityConfig.java
│       │       │       └── InterviewMirrorApplication.java
│       │       │
│       │       └── resources/
│       │           └── application.properties
│       │
│       └── pom.xml
│
├── frontend/
│   └── interview-mirror/
│       ├── src/
│       │   ├── components/
│       │   ├── pages/
│       │   ├── data/
│       │   ├── App.jsx
│       │   └── index.css
│       ├── package.json
│       └── vite.config.js
│
├── database/
├── .gitignore
└── README.md
```

---

## 🗄️ Database

InterviewMirror uses **MySQL** for persistent data storage.

The application contains user and interview-related data.

### User information

The `users` table stores:

* User ID
* Name
* Email
* Encrypted password

Passwords are never stored as plain text. They are encrypted using BCrypt before being saved.

### Interview information

The `interview` table stores:

* Interview ID
* Interview type
* Score
* Interview date
* Associated user

Each interview record is linked to the user who completed it.

---

## 🔌 REST API

### Authentication

#### Register

```http
POST /api/auth/signup
```

Creates a new user account.

#### Login

```http
POST /api/auth/login
```

Authenticates a user and returns a JWT token.

---

### Interviews

#### Get Interview History

```http
GET /api/interviews
```

Returns the authenticated user's interview history.

#### Save Interview Result

```http
POST /api/interviews
```

Stores the completed interview result for the authenticated user.

Example request:

```json
{
  "type": "Technical",
  "score": 4,
  "date": "05/09/2026"
}
```

Protected interview endpoints require a JWT:

```http
Authorization: Bearer <token>
```

---

## 🔐 Authentication & Security

InterviewMirror implements authentication using **Spring Security and JWT**.

The authentication flow is:

```text
Signup
   ↓
Password hashed using BCrypt
   ↓
User stored in MySQL

Login
   ↓
Credentials verified
   ↓
JWT token generated
   ↓
Token stored by frontend
   ↓
Token sent with protected requests
   ↓
JWT Authentication Filter validates token
   ↓
User-specific resources accessed
```

Sensitive values such as:

* Database passwords
* JWT secrets

are stored using **environment variables** rather than being committed to the repository.

---

## ▶️ How to Run Locally

### Prerequisites

Install the following:

* Java 21 or later
* Maven
* Node.js and npm
* MySQL
* Git

---

### 1. Clone the Repository

```bash
git clone https://github.com/Aanyagupta24/InterviewMirror-Web.git
```

```bash
cd InterviewMirror-Web
```

---

### 2. Set Up MySQL

Create a database:

```sql
CREATE DATABASE interviewmirror;
```

The Spring Boot application uses JPA/Hibernate to create and update the required tables automatically.

---

### 3. Configure Environment Variables

The backend uses environment variables for sensitive configuration.

In PowerShell:

```powershell
$env:DB_HOST="localhost"
$env:DB_PORT="3306"
$env:DB_NAME="interviewmirror"
$env:DB_USERNAME="root"
$env:DB_PASSWORD="YOUR_MYSQL_PASSWORD"
$env:JWT_SECRET="YOUR_SECURE_JWT_SECRET"
```

**Never commit actual passwords or JWT secrets to GitHub.**

---

### 4. Start the Backend

Open PowerShell:

```powershell
cd backend\interview-mirror
```

Then run:

```powershell
.\mvnw.cmd spring-boot:run
```

The backend runs on:

```text
http://localhost:8080
```

---

### 5. Start the Frontend

Open another terminal:

```powershell
cd frontend\interview-mirror
```

Install dependencies:

```powershell
npm install
```

Start the development server:

```powershell
npm run dev
```

The frontend normally runs on:

```text
http://localhost:5173
```

---

## 🔄 Application Flow

```text
Login / Sign Up
       ↓
     Home
       ↓
Select Interview Type
       ↓
Random Interview Questions
       ↓
Answer Questions
       ↓
Keyword-Based Evaluation
       ↓
Calculate Score
       ↓
Display Result
       ↓
Save Result to MySQL
       ↓
View Personalized History
```

---

## 🧠 Evaluation Method

InterviewMirror currently uses a **keyword-based evaluation approach**.

Each question contains a predefined set of relevant keywords. The user's answer is compared against these keywords, and the number of matching keywords contributes to the final score.

This approach provides a simple, transparent, and understandable evaluation mechanism for the current version of the application.

---

## 🚀 Future Enhancements

Planned improvements include:

* 🤖 AI-powered answer evaluation
* 💬 Detailed AI-generated feedback
* 🎙️ Voice-based interviews
* 📹 Webcam-based interview analysis
* 📈 Advanced performance analytics
* 🎚️ Interview difficulty levels
* 📚 Larger question bank
* 🏆 Performance-based recommendations
* 📊 Graphical progress reports
* 👤 Enhanced user profiles
* ⏱️ Timed interview sessions

---

## 🌐 Deployment

The application is being prepared for cloud deployment with:

* **React frontend**
* **Spring Boot backend**
* **Cloud-hosted MySQL database**

Deployment configuration uses environment variables to keep sensitive credentials secure.

---

## 🎯 Project Objective

The main objective of InterviewMirror is to provide students with an accessible platform where they can repeatedly practice interviews, identify areas for improvement, and monitor their progress over time.

The project also demonstrates the implementation of a complete full-stack application with frontend development, REST APIs, database integration, authentication, authorization, and cloud deployment.

---

## 👩‍💻 Author

**Aanya Gupta**

B.Tech Computer Science & Engineering

Developed as a full-stack academic and portfolio project using **React, Java Spring Boot, Spring Security, JWT, and MySQL**.

---

## ⭐ Repository

If you find this project useful, consider giving the repository a ⭐ on GitHub.

**GitHub:**
https://github.com/Aanyagupta24/InterviewMirror-Web
