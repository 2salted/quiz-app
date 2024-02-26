import { Link } from "react-router-dom";

type Props = {
  name: string;
  link: string;
};

export default function QuizLink({ name, link }: Props) {
  return (
    <>
      <Link to={link}>
        <div className="flex flex-col bg-gray-200 p-4 mb-4 w-96 text-center">
          {name}
        </div>
      </Link>
    </>
  );
}
