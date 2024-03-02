let quizes = [
  { quizId: 1, name: "Test your knowledge about movies" },
  { quizId: 2, name: "Physics quiz" },
  { quizId: 3, name: "Math quiz" },
];

let questions = [
  {
    quizId: 1,
    answerIndex: 2,
    questionId: 0,
    text: "Which isn't a horror movie?",
    answers: ["The shinning", "Coraline", "The Grinch", "Beetlejuice"],
  },
  {
    quizId: 1,
    answerIndex: 0,
    questionId: 1,
    text: "Which actor got into legal trouble between April and June of 2022?",
    answers: ["Johnny Depp", "Tom Cruise", "Brad Pitt", "Leonardo DiCaprio"],
  },
  {
    quizId: 1,
    answerIndex: 0,
    questionId: 2,
    text: "Which of the next names made the movie corpse bride?",
    answers: [
      "Tim Burton",
      "Steven Spielberg",
      "Quentin Tarantino",
      "David Cronenberg",
    ],
  },
  {
    quizId: 1,
    answerIndex: 0,
    questionId: 3,
    text: "Which isn't an animated movie?",
    answers: [
      "Spiderman into the spiderverse",
      "Unicorn wars",
      "Inside out",
      "Honey, I Shrunk the Kids",
    ],
  },
  {
    quizId: 2,
    answerIndex: 0,
    questionId: 0,
    text: "Question 1 (id 2)",
    answers: ["answer 1", "answer 2", "answer 3", "answer 4"],
  },
  {
    quizId: 2,
    answerIndex: 0,
    questionId: 1,
    text: "Question 2 (id 2)",
    answers: ["answer 1", "answer 2", "answer 3", "answer 4"],
  },
  {
    quizId: 3,
    answerIndex: 0,
    questionId: 0,
    text: "Question 1 (id 3)",
    answers: ["answer 1", "answer 2", "answer 3", "answer 4"],
  },
  {
    quizId: 3,
    answerIndex: 0,
    questionId: 1,
    text: "Question 2 (id 3)",
    answers: ["answer 1", "answer 2", "answer 3", "answer 4"],
  },
];

export { quizes, questions };
