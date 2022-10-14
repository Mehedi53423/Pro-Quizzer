import React from "react";
import { useLoaderData } from "react-router-dom";
import Questions from "./Questions";

const Quiz = () => {
  const data = useLoaderData();
  const quiz = data.data;
  const { name, logo } = quiz;
  const questions = quiz.questions;
  let n = 1;
  return (
    <div>
      <div className="flex justify-center items-center mt-5">
        <img src={logo} alt="Logo" className="h-40" />
        <h1 className="font-bold text-2xl pl-5">{name}</h1>
      </div>
      {console.log(quiz)}
      {questions.map((question) => (
        <Questions
          key={question.id}
          question={question}
          number={n++}
        ></Questions>
      ))}
    </div>
  );
};

export default Quiz;