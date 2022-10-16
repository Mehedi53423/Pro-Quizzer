import React from "react";

const Blog = () => {
  return (
    <div className="container mx-auto">
      <h1 className="bg-slate-200 p-5 text-center rounded-2xl shadow-xl text-2xl font-bold my-5 text-indigo-400">
        Questions
      </h1>
      <div className="grid grid-rows-1 grid-flow-row gap-5">
        <article className="bg-slate-200 p-5 rounded-2xl shadow-xl">
          <h1 className="text-center font-bold text-xl">
            What is the purpose of react router?
          </h1>
          <p className="text-lg text-justify px-5 my-5 font-semibold">
            Routing is a process in which a user is directed to different pages
            based on their action or request. ReactJS Router is mainly used for
            developing Single Page Web Applications. React Router is used to
            define multiple routes in the application. When a user types a
            specific URL into the browser, and if this URL path matches any
            'route' inside the router file, the user will be redirected to that
            particular route. React Router is a standard library system built on
            top of the React and used to create routing in the React application
            using React Router Package. It provides the synchronous URL on the
            browser with data that will be displayed on the web page. It
            maintains the standard structure and behavior of the application and
            mainly used for developing single page web applications.
          </p>
        </article>
        <article className="bg-slate-200 p-5 rounded-2xl shadow-xl">
          <h1 className="text-center font-bold text-xl">
            How does context API works?
          </h1>
          <p className="text-lg text-justify px-5 my-5 font-semibold">
            The React Context API is a way for a React app to effectively
            produce global variables that can be passed around. This is the
            alternative to "prop drilling" or moving props from grandparent to
            child to parent, and so on. Context is also touted as an easier,
            lighter approach to state management using Redux.
            React.createContext() is all you need. It returns a consumer and a
            provider. Provider is a component that as it's names suggests
            provides the state to its children. It will hold the "store" and be
            the parent of all the components that might need that store.
            Consumer as it so happens is a component that consumes and uses the
            state.
          </p>
        </article>
        <article className="bg-slate-200 p-5 rounded-2xl shadow-xl mb-5">
          <h1 className="text-center font-bold text-xl">
            What is useRef hook?
          </h1>
          <p className="text-lg text-justify px-5 my-5 font-semibold">
            The useRef Hook allows you to persist values between renders. It can
            be used to store a mutable value that does not cause a re-render
            when updated. It can be used to access a DOM element directly. The
            useRef returns a mutable ref object. This object has a property
            called .current. The value is persisted in the refContainer.current
            property. These values are accessed from the current property of the
            returned object. The .current property could be initialised to the
            passed argument initialValue e.g. useRef(initialValue). The object
            can persist a value for a full lifetime of the component.
          </p>
        </article>
      </div>
    </div>
  );
};

export default Blog;
