import { useState } from "react";
import { useParams } from "react-router-dom";
import { quizes, questions } from "../utils";

export default function Quiz() {
  const { quizId } = useParams();
  const [currentIndexState, setCurrentIndexState] = useState(0);

  for (let i = 0; i < questions.length; i++) {
    if (quizId !== undefined) {
      let question = questions[i];
      if (question.quizId === parseInt(quizId)) {
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

  return <></>;
}
