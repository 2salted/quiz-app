import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import QuizLink from "../components/QuizLink";

export default function Homepage() {
  let quizData = [
    { name: "History Test", link: "/quiz/1" },
    { name: "Physics Test", link: "/quiz/2" },
    { name: "Math Test", link: "/quiz/3" },
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
