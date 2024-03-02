import { useState } from "react";

type Props = {};

export default function Results({}: Props) {
  return (
    <>
      <div className="flex flex-col items-center h-screen">
        <div className="pt-24 w-full h-full flex flex-col items-center">
          <div className="bg-white shadow-2xl rounded-lg w-3/4 md:w-1/2 border-2 border-blue-300 p-4">
            <div className="text-center text-2xl font-bold">Quiz Results:</div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}
