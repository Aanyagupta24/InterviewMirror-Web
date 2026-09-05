# InterviewMirror

A full-stack web-based mock interview platform designed to help students practice interviews, evaluate their answers, and track their performance over multiple attempts.

## Overview

InterviewMirror provides a simple and interactive environment for conducting mock interviews in different categories. Users can select an interview type, answer a series of questions, receive an automatically calculated score, and view their previous interview attempts.

The project follows a three-layer architecture:

**React Frontend → Spring Boot REST API → MySQL Database**

## Features

* Multiple interview categories

  * HR
  * Technical
  * JavaScript
* Interactive question-and-answer interface
* Keyword-based answer evaluation
* Automatic interview score calculation
* Performance result page
* Persistent interview history
* REST API for storing and retrieving results
* MySQL database integration
* Responsive and modern user interface

## Technologies Used

### Frontend

* React
* JavaScript
* HTML
* CSS
* Vite

### Backend

* Java
* Spring Boot
* Spring Web
* Spring Data JPA
* Maven

### Database

* MySQL

### Development Tools

* Visual Studio Code
* MySQL
* Git
* GitHub

## Project Structure

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
│       │   └── data/
│       ├── package.json
│       └── vite.config.js
│
├── database/
├── .gitignore
└── README.md
```

## Database

The application uses a MySQL database named `interviewmirror`.

The main `interview` table stores:

* Interview ID
* Interview type
* Score
* Interview date

Example:

```text
+----+------------+-------+-----------+
| id | date       | score | type      |
+----+------------+-------+-----------+
| 1  | 05/09/2026 | 4     | Technical |
+----+------------+-------+-----------+
```

## REST API

### Get Interview History

```http
GET /api/interviews
```

Retrieves all previously stored interview attempts.

### Save Interview Result

```http
POST /api/interviews
```

Stores a completed interview result in the database.

Example request:

```json
{
  "type": "Technical",
  "score": 4,
  "date": "05/09/2026"
}
```

## How to Run the Project

### Prerequisites

Make sure the following are installed:

* Java 21 or later
* Maven
* Node.js and npm
* MySQL
* Git

### 1. Set up the database

Create the database in MySQL:

```sql
CREATE DATABASE interviewmirror;
```

The Spring Boot application will create/update the required table automatically.

### 2. Configure the database password

The backend uses an environment variable for the MySQL password.

In PowerShell:

```powershell
$env:DB_PASSWORD="YOUR_MYSQL_PASSWORD"
```

Do not commit your actual database password to GitHub.

### 3. Start the backend

Open PowerShell:

```powershell
cd C:\InterviewMirror\backend\interview-mirror
.\mvnw.cmd spring-boot:run
```

The backend runs on:

```text
http://localhost:8080
```

### 4. Start the frontend

Open another PowerShell window:

```powershell
cd C:\InterviewMirror\frontend\interview-mirror
npm install
npm run dev
```

The frontend will normally run on:

```text
http://localhost:5173
```

## Application Flow

```text
Home Page
    ↓
Select Interview Type
    ↓
Answer Questions
    ↓
Keyword-Based Evaluation
    ↓
Calculate Score
    ↓
Display Result
    ↓
Save Result
    ↓
View Interview History
```

## Evaluation Method

InterviewMirror currently uses a keyword-based evaluation approach.

Each question contains a predefined set of relevant keywords. The user's answer is compared against these keywords, and the number of matching keywords contributes to the interview score.

This approach provides a simple and understandable evaluation mechanism suitable for a web-based mock interview system.

## Future Enhancements

Possible future improvements include:

* More interview categories and questions
* Detailed performance analytics
* Improved answer evaluation
* User profiles
* Authentication and authorization
* Interview difficulty levels
* Graphical performance reports
* More advanced feedback mechanisms

## Author

Developed as a full-stack academic project using React, Java Spring Boot, and MySQL.
