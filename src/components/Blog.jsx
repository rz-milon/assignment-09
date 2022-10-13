import React from "react";

const Blog = () => {
  return (
    <div className="bg-gray-200">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-28">
      <div className="grid gap-8 lg:grid-cols-1 sm:max-w-sm sm:mx-auto lg:max-w-2xl">
        <div className="flex bg-white px-12 py-10 rounded shadow-xl">
          <div>
            <div className="mb-2">
              <a
                href="/"
                aria-label="Article"
                className="inline-block text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400 mb-5"
              >
                React Router
              </a>
            </div>
            <p className="border-l-[20px] border-blue-900 rounded-xl bg-gray-100 pr-5 py-1">
              <article className="mb-5 text-gray-700 text-left pl-5">
              React Router is a standard library for routing in React. It
              enables the navigation among views of various components in a
              React Application, allows changing the browser URL, and keeps the
              UI in sync with the URL. Let us create a simple application to
              React to understand how the React Router works. The application
              will contain three components: home component, about a component,
              and contact component. We will use React Router to navigate
              between these components.
              </article>
            </p>
          </div>
        </div>
        <div className="flex bg-white px-12 py-10 rounded shadow-xl">
          <div>
            <div className="mb-2">
              <a
                href="/"
                aria-label="Article"
                className="inline-block text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400 mb-5"
              >
                How Dose Work React Context API
              </a>
            </div>
            <p className="border-l-[20px] border-orange-600 rounded-xl bg-gray-100 pr-5 py-1">
              <article className="mb-5 text-gray-700 text-left pl-5">
              React.createContext() is all you need. It returns a consumer and a
              provider. Provider is a component that as it's names suggests
              provides the state to its children. It will hold the "store" and
              be the parent of all the components that might need that store.
              Consumer as it so happens is a component that consumes and uses
              the state. More information can be found on React's documentation
              page
              </article>
            </p>
          </div>
        </div>
        <div className="flex bg-white px-12 py-10 rounded shadow-xl">
          <div> 
            <div className="mb-2">
              <a
                href="/"
                aria-label="Article"
                className="inline-block text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400 mb-5"
              >
                The useRef hook
              </a>
            </div>
            <p className="border-l-[20px] border-blue-900 rounded-xl bg-gray-100 pr-5 py-1">
              <article className="mb-5 text-gray-700 text-left pl-5">
              The useRef hook is the new addition in React 16.8. Before
              proceeding to this article there is a prerequisite to know about
              the ref in react. The useRef is a hook that allows to directly
              create a reference to the DOM element in the functional component. <br/>
              Syntax: const refContainer = useRef(initialValue); The useRef
              returns a mutable ref object. This object has a property called
              .current. The value is persisted in the refContainer.<br/>
              current
              property. These values are accessed from the current property of
              the returned object. The .current property could be initialised to
              the passed argument initialValue e.g. useRef(initialValue). 
              The object can persist a value for a full lifetime of the component.
              </article>
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Blog;
