const questions = {
  HR: [
    {
      question: "Tell me about yourself.",
      keywords: ["education", "skills", "experience", "career"]
    },
    {
      question: "What are your strengths?",
      keywords: ["communication", "leadership", "teamwork", "problem"]
    },
    {
      question: "What is your biggest weakness?",
      keywords: ["improve", "learning", "work", "experience"]
    },
    {
      question: "Why should we hire you?",
      keywords: ["skills", "company", "learn", "contribute"]
    },
    {
      question: "Where do you see yourself in five years?",
      keywords: ["career", "growth", "skills", "experience"]
    },
    {
      question: "Why do you want to work for our company?",
      keywords: ["company", "culture", "growth", "skills"]
    },
    {
      question: "Tell me about a challenge you faced and how you handled it.",
      keywords: ["challenge", "problem", "solution", "learned"]
    },
    {
      question: "How do you handle working under pressure?",
      keywords: ["pressure", "time", "priority", "calm"]
    },
    {
      question: "How do you handle conflicts with teammates?",
      keywords: ["communication", "team", "listen", "solution"]
    },
    {
      question: "Why did you choose your field of study?",
      keywords: ["interest", "technology", "skills", "career"]
    },
    {
      question: "What motivates you to perform well?",
      keywords: ["motivation", "goals", "growth", "success"]
    },
    {
      question: "How do you prioritize your tasks?",
      keywords: ["priority", "deadline", "important", "time"]
    },
    {
      question: "Describe a time when you demonstrated leadership.",
      keywords: ["leadership", "team", "responsibility", "decision"]
    },
    {
      question: "How do you respond to constructive criticism?",
      keywords: ["feedback", "improve", "learning", "accept"]
    },
    {
      question: "Tell me about a time you failed and what you learned.",
      keywords: ["failure", "mistake", "learn", "improve"]
    },
    {
      question: "Are you comfortable working in a team?",
      keywords: ["teamwork", "communication", "collaboration", "team"]
    },
    {
      question: "How do you manage tight deadlines?",
      keywords: ["deadline", "planning", "priority", "time"]
    },
    {
      question: "What are your short-term career goals?",
      keywords: ["career", "skills", "learning", "growth"]
    },
    {
      question: "What makes you different from other candidates?",
      keywords: ["skills", "strengths", "experience", "unique"]
    },
    {
      question: "Do you have any questions for the interviewer?",
      keywords: ["company", "role", "team", "growth"]
    }
  ],

  Technical: [
    {
      question: "What is Object Oriented Programming?",
      keywords: ["object", "class", "inheritance", "polymorphism"]
    },
    {
      question: "What is a primary key in a database?",
      keywords: ["unique", "identify", "record", "table"]
    },
    {
      question: "What is an operating system?",
      keywords: ["software", "hardware", "memory", "process"]
    },
    {
      question: "What is a data structure?",
      keywords: ["data", "organize", "store", "efficient"]
    },
    {
      question: "What is the difference between HTTP and HTTPS?",
      keywords: ["security", "encryption", "protocol", "http"]
    },
    {
      question: "What is the difference between a process and a thread?",
      keywords: ["process", "thread", "memory", "execution"]
    },
    {
      question: "What is normalization in a database?",
      keywords: ["database", "redundancy", "table", "normalization"]
    },
    {
      question: "What is an API?",
      keywords: ["application", "interface", "request", "response"]
    },
    {
      question: "What is the difference between SQL and NoSQL?",
      keywords: ["sql", "database", "table", "document"]
    },
    {
      question: "What is the difference between stack and queue?",
      keywords: ["stack", "queue", "lifo", "fifo"]
    },
    {
      question: "What is an algorithm?",
      keywords: ["steps", "problem", "solution", "algorithm"]
    },
    {
      question: "What is recursion?",
      keywords: ["function", "itself", "base", "recursive"]
    },
    {
      question: "What is time complexity?",
      keywords: ["time", "input", "complexity", "algorithm"]
    },
    {
      question: "What is space complexity?",
      keywords: ["space", "memory", "algorithm", "input"]
    },
    {
      question: "What is inheritance?",
      keywords: ["class", "parent", "child", "properties"]
    },
    {
      question: "What is polymorphism?",
      keywords: ["multiple", "forms", "method", "overloading"]
    },
    {
      question: "What is encapsulation?",
      keywords: ["data", "class", "private", "access"]
    },
    {
      question: "What is abstraction?",
      keywords: ["hide", "details", "implementation", "interface"]
    },
    {
      question: "What is a foreign key?",
      keywords: ["table", "relationship", "reference", "primary"]
    },
    {
      question: "What is the difference between GET and POST requests?",
      keywords: ["get", "post", "request", "data"]
    }
  ],

  JavaScript: [
    {
      question: "What is JavaScript?",
      keywords: ["language", "programming", "web", "script"]
    },
    {
      question: "What is a variable in JavaScript?",
      keywords: ["store", "data", "value", "let"]
    },
    {
      question: "What is a function?",
      keywords: ["code", "block", "execute", "task"]
    },
    {
      question: "What is an array?",
      keywords: ["collection", "elements", "index", "data"]
    },
    {
      question: "What is the difference between let and const?",
      keywords: ["variable", "value", "change", "declare"]
    },
    {
      question: "What is the difference between == and ===?",
      keywords: ["comparison", "value", "type", "strict"]
    },
    {
      question: "What is an object in JavaScript?",
      keywords: ["object", "property", "key", "value"]
    },
    {
      question: "What is the DOM?",
      keywords: ["document", "object", "html", "elements"]
    },
    {
      question: "What is an event in JavaScript?",
      keywords: ["event", "click", "user", "action"]
    },
    {
      question: "What is a callback function?",
      keywords: ["function", "callback", "argument", "execute"]
    },
    {
      question: "What is the difference between var, let and const?",
      keywords: ["var", "let", "const", "scope"]
    },
    {
      question: "What is scope in JavaScript?",
      keywords: ["scope", "variable", "global", "local"]
    },
    {
      question: "What is an arrow function?",
      keywords: ["function", "arrow", "syntax", "parameter"]
    },
    {
      question: "What is a promise in JavaScript?",
      keywords: ["promise", "async", "resolve", "reject"]
    },
    {
      question: "What is async and await?",
      keywords: ["async", "await", "promise", "asynchronous"]
    },
    {
      question: "What is hoisting in JavaScript?",
      keywords: ["hoisting", "variable", "function", "declaration"]
    },
    {
      question: "What is JSON?",
      keywords: ["json", "data", "object", "format"]
    },
    {
      question: "What is the spread operator?",
      keywords: ["spread", "array", "object", "elements"]
    },
    {
      question: "What is destructuring in JavaScript?",
      keywords: ["destructuring", "array", "object", "variables"]
    },
    {
      question: "What is event bubbling?",
      keywords: ["event", "bubbling", "parent", "child"]
    }
  ]
};

export default questions;