import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizTopics from "./QuizTopics";

const Home = () => {
  const data = useLoaderData();
  const quizTopics = data.data;
  return (
    <div className="grid md:grid-cols-4 gap-6 p-4 container mx-auto mt-10">
      {quizTopics.map((quizTopic) => (
        <QuizTopics key={quizTopic.id} quizTopic={quizTopic}></QuizTopics>
      ))}
    </div>
  );
};

export default Home;
