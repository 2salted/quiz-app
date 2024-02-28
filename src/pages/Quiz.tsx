import { useState } from "react";
import { useParams } from "react-router-dom";
import { questions } from "../utils";
import QuizAnswers from "../components/QuizAnswers";

export default function Quiz() {
  const { quizId } = useParams();
  const [currentIndexState, setCurrentIndexState] = useState(0);
  let matchedIdText = "";
  let matchedIdAnswers = [""];

  for (let i = 0; i < questions.length; i++) {
    if (quizId !== undefined) {
      let question = questions[i];
      if (question.quizId === parseInt(quizId)) {
        matchedIdText = question.text;
        matchedIdAnswers = question.answers;
        break;
      }
    }
  }
  //let IdAnswersString = matchedIdAnswers.toString();
  //console.log(matchedIdAnswers.length);

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
      <div className="flex flex-col items-center h-screen">
        <div className="pt-24 w-full h-full flex flex-col items-center">
          <div className="bg-white shadow-2xl rounded-lg w-3/4 md:w-1/2 border-2 border-blue-300 p-4">
            <h3 className="text-center text-3xl font-bold">{matchedIdText}</h3>
            <div className="flex flex-col">
              <QuizAnswers answers={matchedIdAnswers} />
            </div>
          </div>
          <div className="flex flex-row justify-between w-3/4 md:w-1/2">
            <button
              className="rounded-xl p-4 text-xl border-blue-300 text-blue-300"
              onClick={() => prevQuestion()}
            >
              {"<Back"}
            </button>
            <button
              className="rounded-xl p-4 text-xl border-blue-300 text-blue-300"
              onClick={() => nextQuestion()}
            >
              {"Next>"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
