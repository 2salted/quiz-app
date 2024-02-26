import { useState } from "react";
import { Link } from "react-router-dom";
import QuizLink from "../components/QuizLink";

export default function Homepage() {
  return (
    <>
      <QuizLink name={"History Quiz"} link={"/quiz"} />
    </>
  );
}
