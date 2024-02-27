import QuizLink from "../components/QuizLink";
import { quizes } from "../utils";

export default function Homepage() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <h2 className="text-center text-3xl mb-14">
          Choose a quiz of your choice!
        </h2>
        {quizes.map((quiz, index) => (
          <QuizLink
            key={index}
            name={quiz.name}
            link={"/quiz/" + quiz.quizId}
          />
        ))}
      </div>
    </>
  );
}
