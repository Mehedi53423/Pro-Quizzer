import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizTopics from "./QuizTopics";
import Test from "../assets/Test.png";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  const data = useLoaderData();
  const quizTopics = data.data;

  return (
    <div>
      <div className="flex items-center bg-slate-200 container mx-auto rounded-2xl shadow-xl mt-10">
        <div className="w-1/2 flex justify-end">
          <img src={Test} alt="Test" className="h-96" />
        </div>
        <div className="md:w-1/2">
          <h1 className="font-bold text-4xl md:flex justify-start items-center font-merienda">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-14 h-14"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
              />
            </svg>
            Test Your Self
          </h1>
          <p className="font-bold text-xl mt-3 font-merienda">
            <TypeAnimation
              sequence={["Test Your Web Development Skills Here", 2000, " "]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              speed={300}
            />
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-4 gap-8 p-4 container mx-auto my-10">
        {quizTopics.map((quizTopic) => (
          <QuizTopics key={quizTopic.id} quizTopic={quizTopic}></QuizTopics>
        ))}
      </div>
    </div>
  );
};

export default Home;
