import React from "react";
import { useParams } from "react-router-dom";

export default function Quiz() {
  const { id } = useParams();

  // Depending on the id, you can render different content
  let quizContent;

  switch (id) {
    case "History":
      quizContent = <div>History Quiz Content Goes Here</div>;
      break;
    case "Physics":
      quizContent = <div>Physics Quiz Content Goes Here</div>;
      break;
    case "Math":
      quizContent = <div>Math Quiz Content Goes Here</div>;
      break;
    default:
      quizContent = <div>Quiz Content for Unknown Quiz</div>;
  }

  return (
    <>
      <h2>Quiz: {id}</h2>
      {quizContent}
    </>
  );
}
