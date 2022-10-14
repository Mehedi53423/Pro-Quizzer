import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Questions = (props) => {
  const { question, correctAnswer, options } = props.question;
  const [show, setShow] = useState(false);
  const activeClassName = "text-lg font-semibold text-center mt-10";
  const notActiveClassName = "text-lg font-semibold text-center mt-10 hidden";
  const showButton = () => {
    show ? setShow(false) : setShow(true);
  };
  const Correct = () => {
    toast.success("Correct Answer");
  };
  const Wrong = () => {
    toast.error("Wrong Answer");
  };

  const checkAns = (ans) => {
    if (ans === correctAnswer) {
      Correct();
    } else {
      Wrong();
    }
  };
  return (
    <div className="container mx-auto bg-slate-100 p-10 m-5 rounded-2xl shadow-2xl">
      <div className="text-right">
        <button onClick={showButton}>
          {show ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 hover:text-indigo-400"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 hover:text-indigo-400"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          )}
        </button>
      </div>
      <h1 className="font-bold text-xl text-center">
        Question :{props.number} : {question}
      </h1>
      <h1 className="text-lg font-semibold grid grid-rows-2 grid-flow-col gap-2 mt-10">
        {options.map((option) => (
          <button
            className="border-2 hover:border-indigo-400 p-2 m-2 rounded-lg hover:bg-indigo-400 hover:text-white"
            onClick={() => checkAns(option)}
          >
            {option}
          </button>
        ))}
      </h1>
      <h1 className={show ? activeClassName : notActiveClassName}>
        Correct Answer : {correctAnswer}
      </h1>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Questions;
