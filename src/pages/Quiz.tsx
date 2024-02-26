import React from "react";
import { useParams } from "react-router-dom";

export default function Quiz() {
  const { id } = useParams();

  let quizContent;

  if (id === "History") {
  } else if (id === "Physics") {
  } else if (id === "Math") {
  }

  return <>{quizContent}</>;
}
