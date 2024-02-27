import { useState } from "react";
import { useParams } from "react-router-dom";
import { quizes, questions } from "../utils";

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
        <div className="bg-white shadow-md rounded-lg max-w-3xl border-2 border-blue-500 p-4 mt-16">
          <p>{matchedIdText + ""}</p>
        </div>
      </div>
    </>
  );
}
