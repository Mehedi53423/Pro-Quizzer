import React from "react";
import errorNotFound from "../assets/ErrorNotFound.png";

const Error = () => {
  return (
    <div className="container mx-auto border my-10 pt-5 bg-slate-200 rounded-2xl shadow-xl">
      <img
        src={errorNotFound}
        alt="404 Error Not Found"
        className="w-1/4 h-96 mx-auto"
      />
      <h1 className="text-center font-bold text-6xl text-red-400 mb-5">
        Error
      </h1>
      <h1 className="text-center font-bold text-4xl mb-10">Not Found</h1>
    </div>
  );
};

export default Error;
