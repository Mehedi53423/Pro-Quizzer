import React from "react";

const Blog = () => {
  return (
    <div className="container mx-auto">
      <h1 className="bg-slate-100 p-5 text-center rounded-2xl shadow-2xl text-xl font-bold my-5">
        Questions
      </h1>
      <div className="grid grid-rows-1 grid-flow-row gap-5">
        <article className="bg-slate-100 p-5 rounded-2xl shadow-2xl">
          <h1 className="text-center font-bold text-xl">
            What is the purpose of react router?
          </h1>
          <p className="text-lg text-justify px-5 my-5 font-semibold">
            ReactJS Router is mainly used for developing Single Page Web
            Applications. React Router is used to define multiple routes in the
            application. When a user types a specific URL into the browser, and
            if this URL path matches any 'route' inside the router file, the
            user will be redirected to that particular route.
          </p>
        </article>
        <article className="bg-slate-100 p-5 rounded-2xl shadow-2xl">
          <h1 className="text-center font-bold text-xl">
            How does context API works?
          </h1>
          <p className="text-lg text-justify px-5 my-5 font-semibold">
            The React Context API is a way for a React app to effectively
            produce global variables that can be passed around. This is the
            alternative to "prop drilling" or moving props from grandparent to
            child to parent, and so on. Context is also touted as an easier,
            lighter approach to state management using Redux.
          </p>
        </article>
        <article className="bg-slate-100 p-5 rounded-2xl shadow-2xl mb-5">
          <h1 className="text-center font-bold text-xl">
            What is useRef hook?
          </h1>
          <p className="text-lg text-justify px-5 my-5 font-semibold">
            The useRef Hook allows you to persist values between renders. It can
            be used to store a mutable value that does not cause a re-render
            when updated. It can be used to access a DOM element directly.
          </p>
        </article>
      </div>
    </div>
  );
};

export default Blog;
