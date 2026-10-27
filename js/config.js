/**
 * Portfolio configuration
 * --------------------------------
 * Fill in YOUR real details below. Leave a field as "" if you do not have
 * that information yet. Empty fields are hidden on the website so placeholder
 * text is not shown to visitors.
 *
 * Do not invent achievements, internships, or repository URLs.
 */
window.PORTFOLIO = {
  name: "Kismat Taneja",
  title: "BTech in Computer Science Engineering (AI & ML)",
  introduction:
    "I am a BTech Computer Science Engineering student specializing in Artificial Intelligence and Machine Learning. This portfolio presents coursework and assignment projects from my program.",
  about:
    "I am pursuing a BTech in Computer Science Engineering with a specialization in AI and ML. My coursework includes programming, web development, and using AI-assisted tools such as Cursor to write, debug, and improve code. I am building this portfolio as part of an internal assessment to document those projects and skills.",
  college: "JECRC University",
  degree: "BTech in Computer Science Engineering (AI & ML)",
  yearSemester: "2nd year",
  interests: "Artificial Intelligence, Machine Learning, Web Development",
  careerGoals: "To become a proficient AI/ML engineer and contribute to innovative projects.",
  email: "kismattaneja5@gmail.com",
  github: "https://github.com/kismattaneja5-dot",
  linkedin: "https://www.linkedin.com/in/kismat-taneja-21a1a7369/",
  resumeUrl: "",

  /**
   * Skills taken from the assignment projects in this course.
   * Add or remove items to match what you actually use.
   */
  skills: {
    "Programming Languages": ["Python"],
    "Web Development": ["HTML", "CSS", "JavaScript"],
    Tools: ["Git", "GitHub", "Cursor AI"],
    "AI/ML": ["Cursor AI"],
  },

  /**
   * Exactly five assignment projects.
   * Add each GitHub URL when the repository exists (example:
   * "https://github.com/your-username/python-programs").
   * Leave github/live as "" until the link is real. Live Demo buttons
   * appear only when live is a full https URL.
   */
  projects: [
    {
      id: "python-programs",
      title: "Python Programs Collection",
      description:
        "A collection of Python programs covering factorial, Fibonacci, and structure-to-dictionary conversion, with an updated README.",
      technologies: ["Python", "GitHub"],
      github: "https://github.com/kismattaneja5-dot/python-programs",
      live: "",
    },
    {
      id: "messy-python",
      title: "Messy Python Code Improvement",
      description:
        "A Python script improved with AI assistance to enhance readability, organization, and code quality.",
      technologies: ["Python", "Cursor AI"],
      github: "https://github.com/kismattaneja5-dot/python-code-cleanup",  
      live: "",
    },
    {
      id: "bug-fixing",
      title: "Bug Fixing Using Cursor AI",
      description:
        "A buggy program identified, debugged, and corrected using Cursor AI.",
      technologies: ["Cursor AI"],
      github: "https://github.com/kismattaneja5-dot/cursor-ai-bug-fix",
      live: "",
    },
    {
      id: "quiz-app",
      title: "Interactive Quiz Application",
      description:
        "The interactive quiz application developed in Lecture 10.",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/kismattaneja5-dot/interactive-quiz-app",
      live: "",
    },
    {
      id: "book-list",
      title: "Book Reading List Application",
      description:
        "The book reading list application developed in Lecture 11, including an updated README.",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/kismattaneja5-dot/book-reading-list",
      live: "",
    },
  ],

  /**
   * Optional: if your class uses Formspree, Web3Forms, or a similar form
   * endpoint, paste the URL here. Leave "" to keep the form as validation
   * only (it will not claim that a message was emailed).
   */
  contactFormEndpoint: "",

  suggestedQuestions: [
    "Who are you?",
    "What are your technical skills?",
    "What projects have you completed?",
    "Explain the Python Programs Collection.",
    "What was improved in the messy Python code?",
    "What is the Interactive Quiz Application?",
    "How does the Book Reading List Application work?",
    "Where can I find your GitHub profile?",
  ],
};
