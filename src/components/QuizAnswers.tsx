type Props = {
  answers: string[];
};

export default function QuizAnswers({ answers }: Props) {
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
            value=""
            className="w-5 h-5 text-blue-400 bg-gray-100 border-gray-300 rounded"
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
