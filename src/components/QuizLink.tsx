import { useState } from "react";
import { Link } from "react-router-dom";

type Props = {
  name: string;
  link: string;
};

export default function QuizLink({ name, link }: Props) {
  return (
    <>
      <div className="border-2 border-gray-500">
        <Link to={link}>
          <div>{name}</div>
        </Link>
      </div>
    </>
  );
}
