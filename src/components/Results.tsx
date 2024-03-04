import { Link } from "react-router-dom";

type Props = {
  score: number;
  questionLength: number;
};

export default function Results({ score, questionLength }: Props) {
  let calculateScore = (score / questionLength) * 100;

  return (
    <>
      <div className="flex flex-col items-center h-screen">
        <div className="pb-24 w-full h-full flex flex-col justify-center items-center">
          <div className="bg-white shadow-2xl rounded-lg w-2/3 md:w-1/3 border-2 border-blue-300 p-4">
            <div className="text-center text-2xl font-bold">Quiz Results:</div>
            <div className="text-center pt-3 text-xl">
              {calculateScore.toFixed(0)}% Correct
            </div>
          </div>
          <button className="rounded-xl p-4 text-xl border-blue-400 text-blue-400">
            <Link to={"/"}> {"Homepage"}</Link>
          </button>
        </div>
      </div>
    </>
  );
}
