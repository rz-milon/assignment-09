import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog';
import Home from './components/Home';
import Quiz from './components/Quiz';
import Statistics from './components/Statistics';
import Topics from './components/Topics';
import Main from './layouts/Main';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: 'home',
        element: <Home></Home>
      },
      {
        path: 'topics',
        loader: async ({ params }) => {
          return fetch('https://openapi.programming-hero.com/api/quiz')
        },
        element: <Topics></Topics>
      },
      {
        path: 'quiz/:quizId',
        loader: async ({ params }) => {
          return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
        },
        element: <Quiz></Quiz>
      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      },
    ]
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
