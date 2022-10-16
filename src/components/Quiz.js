import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Questions from "./Questions";

const Quiz = () => {
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);
  const data = useLoaderData();
  const quiz = data.data;
  const { name, logo } = quiz;
  const questions = quiz.questions;
  let n = 1;

  const correctAns = () => {
    setCorrect(correct + 1);
  };

  const wrongAns = () => {
    setWrong(wrong + 1);
  };
  return (
    <div>
      <div className="flex justify-center items-center mt-5 bg-slate-200 p-5 container mx-auto rounded-2xl shadow-xl">
        <img src={logo} alt="Logo" className="h-40" />
        <div>
          <h1 className="font-bold text-2xl pl-5">{name} Quiz</h1>
          <h1 className="font-bold text-lg pl-5">
            Correct: <span className="text-green-400">{correct}</span>
          </h1>
          <h1 className="font-bold text-lg pl-5">
            Wrong: <span className="text-red-400">{wrong}</span>
          </h1>
        </div>
      </div>
      {questions.map((question) => (
        <Questions
          key={question.id}
          question={question}
          number={n++}
          correctAns={correctAns}
          wrongAns={wrongAns}
        ></Questions>
      ))}
    </div>
  );
};

export default Quiz;
