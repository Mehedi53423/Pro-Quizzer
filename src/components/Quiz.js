import React from "react";
import { useLoaderData } from "react-router-dom";
import Questions from "./Questions";

const Quiz = () => {
  const data = useLoaderData();
  const quiz = data.data.questions;
  return (
    <div>
      {quiz.map((questions) => (
        <Questions key={questions.id} quizTopic={questions}></Questions>
      ))}
    </div>
  );
};

export default Quiz;
