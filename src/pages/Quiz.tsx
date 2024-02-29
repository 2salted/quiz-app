import { useState } from "react";
import { useParams } from "react-router-dom";
import { questions } from "../utils";
import QuizAnswers from "../components/QuizAnswers";

export default function Quiz() {
  const [currentCheckboxIndex, setCurrentCheckboxIndex] = useState(- 1);
  const [inputChecked, setInputChecked] = useState(false);
  const { quizId } = useParams();
  const [currentQuestionId, setCurrentQuestionId] = useState(0);
  const [errorState, setErrorState] = useState("");

  let matchedIdText = "";
  let matchedIdAnswers = [""];
  let currentAnswerIndex: number;

  for (let i = 0; i < questions.length; i++) {
    if (quizId !== undefined) {
      let question = questions[i];
      if (
        question.quizId === parseInt(quizId) &&
        question.questionId === currentQuestionId
      ) {
        matchedIdText = question.text;
        matchedIdAnswers = question.answers;
        currentAnswerIndex = question.answerIndex;
        break;
      }
    }
  }

  return (
    <>
      <div className="flex flex-col items-center h-screen">
        <div className="pt-24 w-full h-full flex flex-col items-center">
          <div className="bg-white shadow-2xl rounded-lg w-3/4 md:w-1/2 border-2 border-blue-300 p-4">
            <h3 className="text-center text-3xl font-bold">{matchedIdText}</h3>
            <div className="text-center text-red-500 font-bold text-lg">
              {errorState}
            </div>
            <div className="flex flex-col">
              <QuizAnswers
                isChecked={currentCheckboxIndex}
                setIsNextVisible={setInputChecked}
                answers={matchedIdAnswers}
                setCheckboxIndex={setCurrentCheckboxIndex}
              />
            </div>
          </div>
          <div className="flex flex-row justify-between w-3/4 md:w-1/2">
            <button
              className="rounded-xl p-4 text-xl border-blue-300 text-blue-400"
              onClick={() => {
                if (currentQuestionId > 0) {
                  setCurrentQuestionId((current) => current - 1);
                }
              }}
            >
              {"<Back"}
            </button>

            {inputChecked && (
              <button
                className="rounded-xl p-4 text-xl border-blue-300 text-blue-400"
                onClick={() => {
                  if (currentQuestionId >= 0) {
                    if (currentCheckboxIndex === currentAnswerIndex) {
                      setCurrentQuestionId(
                        (prevQuestionId) => prevQuestionId + 1
                      );
                      setErrorState("")
                      setCurrentCheckboxIndex(-1)
                    } else {
                      setErrorState("Wrong Answer, select a different answer!");
                    }
                  }
                }}
              >
                {"Next>"}
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
