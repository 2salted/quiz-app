import { useState } from "react";
import { useParams } from "react-router-dom";
import { questions } from "../utils";
import QuizAnswers from "../components/QuizAnswers";

export default function Quiz() {
  const { quizId } = useParams();
  const [currentIndexState, setCurrentIndexState] = useState(0);
  let matchedIdText = "";

  for (let i = 0; i < questions.length; i++) {
    if (quizId !== undefined) {
      let question = questions[i];
      if (question.quizId === parseInt(quizId)) {
        matchedIdText = question.text;
        break;
      }
    }
  }

  function nextQuestion() {
    if (currentIndexState >= 0) {
      setCurrentIndexState(currentIndexState + 1);
    }
  }
  function prevQuestion() {
    if (currentIndexState > 0) {
      setCurrentIndexState(currentIndexState - 1);
    }
  }

  return (
    <>
      <div className="flex justify-center items-start h-screen">
        <div className="bg-white shadow-md rounded-lg w-1/2 border-2 border-blue-600 p-4 mt-16">
          <h3 className="text-center">{matchedIdText}</h3>
          <div className="flex flex-col items-center">
            {questions.map((answer, index) => (
              <QuizAnswers key={index} answer={answer.answers} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
