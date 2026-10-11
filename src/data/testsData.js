export const englishDiagnosticTest = {
  title: "English Proficiency Diagnostic Test",
  description: "Assess your baseline grammar, sentence structure, and vocabulary precision in 10 questions. Get immediate feedback and personalized course recommendations.",
  questions: [
    {
      id: 1,
      question: "Choose the correct sentence:",
      options: [
        "Neither the manager nor the employees was available.",
        "Neither the manager nor the employees were available.",
        "Neither the manager nor the employees are been available.",
        "Neither the manager or the employees was available."
      ],
      correctAnswer: 1,
      explanation: "In 'neither... nor' constructions, the verb agrees with the closer subject ('employees', which is plural, hence 'were')."
    },
    {
      id: 2,
      question: "I look forward to ________ you at the conference.",
      options: [
        "meet",
        "meeting",
        "have met",
        "met"
      ],
      correctAnswer: 1,
      explanation: "'Look forward to' is followed by a gerund (-ing form), so 'meeting' is correct."
    },
    {
      id: 3,
      question: "Identify the grammatically correct sentence:",
      options: [
        "Despite of the heavy rain, she attended the lecture.",
        "In spite the heavy rain, she attended the lecture.",
        "Despite the heavy rain, she attended the lecture.",
        "Although the heavy rain, she attended the lecture."
      ],
      correctAnswer: 2,
      explanation: "'Despite' takes a direct noun phrase without 'of'. 'In spite of' requires 'of'. Therefore, 'Despite the heavy rain' is correct."
    },
    {
      id: 4,
      question: "If I ________ you, I would accept the international scholarship offer.",
      options: [
        "was",
        "am",
        "were",
        "would be"
      ],
      correctAnswer: 2,
      explanation: "In second conditional hypothetical statements (subjunctive mood), 'were' is used for all subjects."
    },
    {
      id: 5,
      question: "Choose the word closest in meaning to 'METICULOUS':",
      options: [
        "Careless",
        "Painstakingly careful and precise",
        "Extremely hasty",
        "Aggressive"
      ],
      correctAnswer: 1,
      explanation: "'Meticulous' means showing great attention to detail; very careful and precise."
    },
    {
      id: 6,
      question: "The project report was submitted ________ time, exactly as requested.",
      options: [
        "on",
        "in",
        "at",
        "by"
      ],
      correctAnswer: 0,
      explanation: "'On time' means punctually at the scheduled time; 'in time' means early enough before a deadline."
    },
    {
      id: 7,
      question: "Which sentence uses the apostrophe correctly?",
      options: [
        "The students books were placed in their locker's.",
        "The students' books were placed in their lockers.",
        "The student's books were placed in their locker's.",
        "The students books' were placed in their lockers."
      ],
      correctAnswer: 1,
      explanation: "Plural possessive for students is 'students'' (possessing books), and 'lockers' is a simple plural noun requiring no apostrophe."
    },
    {
      id: 8,
      question: "She has been working with the international firm ________ five years.",
      options: [
        "since",
        "for",
        "from",
        "during"
      ],
      correctAnswer: 1,
      explanation: "'For' is used to denote a duration of time (five years), whereas 'since' denotes a specific starting point."
    },
    {
      id: 9,
      question: "Choose the correct indirect speech for: He said, 'I have finished my IELTS practice test.'",
      options: [
        "He said that he has finished his IELTS practice test.",
        "He said that he had finished his IELTS practice test.",
        "He said that he finished his IELTS practice test.",
        "He said that he will have finished his IELTS practice test."
      ],
      correctAnswer: 1,
      explanation: "Present perfect ('have finished') shifts back to past perfect ('had finished') in reported speech."
    },
    {
      id: 10,
      question: "Identify the sentence that avoids misplaced modifiers:",
      options: [
        "Walking into the seminar room, the presentation slides caught her attention.",
        "Walking into the seminar room, she was caught by the slides.",
        "Walking into the seminar room, she noticed the presentation slides.",
        "The presentation slides caught her attention walking into the seminar room."
      ],
      correctAnswer: 2,
      explanation: "The modifier 'Walking into the seminar room' logically describes 'she', who is entering the room, not the slides."
    }
  ]
};

export const leadershipAssessmentTest = {
  title: "Leadership Communication Style Assessment",
  description: "Discover your dominant leadership and communication archetype based on Vidya Wankhade's executive management principles.",
  questions: [
    {
      id: 1,
      question: "When facing a high-stakes team decision, your immediate instinct is to:",
      options: [
        { text: "Consult the entire team and reach consensus before taking action.", style: "Collaborative / Democratic" },
        { text: "Analyze the facts quickly and make a clear, decisive executive call yourself.", style: "Decisive / Strategic" },
        { text: "Coach key team members to solve the issue themselves with guidance.", style: "Mentoring / Coaching" },
        { text: "Paint an inspiring long-term picture of success and motivate everyone forward.", style: "Visionary / Transformational" }
      ]
    },
    {
      id: 2,
      question: "In corporate meetings, your communication focus is primarily on:",
      options: [
        { text: "Active listening and ensuring quieter colleagues have a platform to speak.", style: "Collaborative / Democratic" },
        { text: "Crisp agenda pacing, bottom-line ROI metrics, and actionable deliverables.", style: "Decisive / Strategic" },
        { text: "Giving specific constructive feedback and celebrating individual breakthroughs.", style: "Mentoring / Coaching" },
        { text: "Connecting everyday tasks to the overarching mission and organizational values.", style: "Visionary / Transformational" }
      ]
    },
    {
      id: 3,
      question: "When a team member misses a major project deadline, you:",
      options: [
        { text: "Hold an open, empathetic one-on-one to uncover blockers and coach improvement.", style: "Mentoring / Coaching" },
        { text: "Address the delivery gap directly and set non-negotiable revised timelines.", style: "Decisive / Strategic" },
        { text: "Rally the team together to support the backlog and prevent burnout.", style: "Collaborative / Democratic" },
        { text: "Remind the team why this milestone matters to the larger client vision.", style: "Visionary / Transformational" }
      ]
    },
    {
      id: 4,
      question: "Your ideal personal brand as a manager is best described as:",
      options: [
        { text: "An inspiring thought leader who challenges the status quo with big ideas.", style: "Visionary / Transformational" },
        { text: "A results-oriented executive known for flawless execution and high standards.", style: "Decisive / Strategic" },
        { text: "A trusted developer of people who unlocks hidden talent and builds careers.", style: "Mentoring / Coaching" },
        { text: "An inclusive, transparent leader who fosters psychological safety and trust.", style: "Collaborative / Democratic" }
      ]
    },
    {
      id: 5,
      question: "How do you approach presenting to senior executive leadership / board members?",
      options: [
        { text: "Lead with the bottom-line answer first (BLUF), followed by concise data points.", style: "Decisive / Strategic" },
        { text: "Tell an engaging story linking market trends with bold future opportunities.", style: "Visionary / Transformational" },
        { text: "Highlight team contributions and cross-functional consensus behind recommendations.", style: "Collaborative / Democratic" },
        { text: "Focus on capability growth, institutional learning, and scalable talent systems.", style: "Mentoring / Coaching" }
      ]
    }
  ]
};
