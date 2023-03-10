import React from "react";
import { Link } from "react-router-dom";

const QuizTopics = ({ quizTopic }) => {
  const { name, logo, total, id } = quizTopic;
  return (
    <div className="shadow-xl rounded-2xl p-5 bg-slate-200 transform transition duration-500 hover:scale-110">
      <h1 className="text-center font-bold text-xl pb-2 font-merienda">
        {name}
      </h1>
      <img src={logo} alt="Logo" />
      <div className="flex justify-between mt-2">
        <h1 className="font-bold text-lg font-merienda">Total : {total}</h1>
        <Link
          to={`/Quiz/${id}`}
          className="flex font-bold text-lg bg-indigo-300 hover:bg-indigo-500 pl-3 pr-2 py-1 rounded-lg text-white font-merienda"
        >
          Start Quiz
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-7 pl-1"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default QuizTopics;
