import { useState } from "react";
import { useParams } from "react-router-dom";
import { questions } from "../utils";
import QuizAnswers from "../components/QuizAnswers";
import Results from "../components/Results";

export default function Quiz() {
  const [currentCheckboxIndex, setCurrentCheckboxIndex] = useState(-1);
  const [inputChecked, setInputChecked] = useState(false);
  const { quizId } = useParams();
  const [currentQuestionId, setCurrentQuestionId] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  let matchedIdText = "";
  let matchedIdAnswers = [""];
  let currentAnswerIndex: number | undefined = undefined;
  let questionIdCount = [];

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

  for (let x = 0; x < questions.length; x++) {
    if (quizId !== undefined) {
      let question = questions[x];
      if (question.quizId === parseInt(quizId)) {
        questionIdCount.push(question.questionId);
      }
    }
  }

  let questionCountLength = questionIdCount.length;

  if (showResult) {
    return <Results score={score} questionLength={questionCountLength} />;
  }

  if (currentAnswerIndex === undefined) {
    return (
      <div className="flex flex-col items-center h-screen">
        <div className="pt-24 w-full h-full flex flex-col items-center">
          <div className="bg-white shadow-2xl rounded-lg w-3/4 md:w-1/2 border-2 border-blue-400 p-4">
            Quiz does not exist!
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col items-center h-screen">
        <div className="pt-24 w-full h-full flex flex-col items-center">
          <div className="bg-white shadow-2xl rounded-lg w-3/4 md:w-1/2 border-2 border-blue-400 p-4">
            <h3 className="text-center text-3xl font-bold">{matchedIdText}</h3>
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
              className="rounded-xl p-4 text-xl border-blue-400 text-blue-400"
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
                className="rounded-xl p-4 text-xl border-blue-400 text-blue-400"
                onClick={() => {
                  if (currentCheckboxIndex === currentAnswerIndex) {
                    setScore((prevScore) => prevScore + 1);
                  }
                  if (currentQuestionId >= 0) {
                    if (currentQuestionId + 1 >= questionCountLength) {
                      setShowResult(true);
                    } else {
                      setCurrentQuestionId(
                        (prevQuestionId) => prevQuestionId + 1
                      );
                      setCurrentCheckboxIndex(-1);
                      setInputChecked(false);
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
