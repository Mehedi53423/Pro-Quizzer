import React from "react";

const Questions = (props) => {
  const { question, correctAnswer, options } = props.question;
  return (
    <div className="container mx-auto bg-slate-100 p-5 m-5">
      <h1 className="font-bold text-xl">
        Question :{props.number} : {question}
      </h1>
      <h1 className="text-lg font-semibold">
        {options.map((option) => (
          <h1>{option}</h1>
        ))}
      </h1>
      <h1 className="text-lg font-semibold text-center">
        Correct Answer : {correctAnswer}
      </h1>
    </div>
  );
};

export default Questions;
