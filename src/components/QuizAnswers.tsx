import { useState } from "react";

type Props = {
  answers: string[];
  setIsNextVisibleProp: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function QuizAnswers({
  answers,
  setIsNextVisibleProp: setIsNextVisible,
}: Props) {
  const inputChange = (event: { target: { checked: any } }) => {
    if (event.target.checked) {
      setIsNextVisible(true);
      console.log("yes");
    } else {
      setIsNextVisible(false);
    }
    console.log();
  };

  return (
    <div className="flex flex-col">
      {answers.map((answer, index) => (
        <div
          key={index}
          className="flex items-center mt-4 mb-4 bg-blue-300 p-2 shadow-xl rounded-xl"
        >
          <input
            id="checked-checkbox"
            type="checkbox"
            className="w-5 h-5 text-blue-400 bg-gray-100 border-gray-300 rounded"
            onChange={inputChange}
          />
          <label
            htmlFor="checked-checkbox"
            className="ms-3 text-base font-medium text-gray-900 dark:text-gray-300"
          >
            {answer}
          </label>
        </div>
      ))}
    </div>
  );
}
