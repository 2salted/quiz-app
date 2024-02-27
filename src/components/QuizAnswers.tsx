type Props = {
  answer: string[];
};

export default function QuizAnswers({ answer }: Props) {
  return (
    <div className="flex items-center">
      <input
        id="checked-checkbox"
        type="checkbox"
        value=""
        className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded"
      />
      <label
        htmlFor="checked-checkbox"
        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {answer}
      </label>
    </div>
  );
}
