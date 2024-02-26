import { useState } from "react";
import { Link } from "react-router-dom";

type Props = {
  name: string;
  link: string;
};

export default function QuizLink({ name, link }: Props) {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <Link to={link}>
          <div className="flex flex-col bg-gray-200 p-6 mb-4">{name}</div>
        </Link>
      </div>
    </>
  );
}
