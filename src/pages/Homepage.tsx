import QuizLink from "../components/QuizLink";

export default function Homepage() {
  let quizData = [
    { id: "page1", name: "History Quiz", link: "/quiz/History" },
    { id: "page2", name: "Physics Quiz", link: "/quiz/Physics" },
    { id: "page3", name: "Math Quiz", link: "/quiz/Math" },
  ];

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <h2 className="text-center text-3xl mb-14">
          Choose a quiz of your choice!
        </h2>
        {quizData.map((quiz, index) => (
          <QuizLink key={index} name={quiz.name} link={quiz.link} />
        ))}
      </div>
    </>
  );
}
