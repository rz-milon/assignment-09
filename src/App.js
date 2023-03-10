import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import Quiz from './components/Quiz';
import Statistics from './components/Statistics';
import Topics from './components/Topics';
import Main from './layouts/Main';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ChartDetails from './components/ChartDetails';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'home',
        element: <Home></Home>
      },
      {
        path: 'topics',
        loader: async () => {
          return fetch('https://openapi.programming-hero.com/api/quiz')
        },
        element: <Topics></Topics>
      },
      
      {
        path:'/quiz/:quizId',
        loader:async ({params}) =>{
          return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
        } ,
        element: <Quiz></Quiz>
      },
      {
        path: 'statistics',
        loader: async () => {
          return fetch('https://openapi.programming-hero.com/api/quiz')
        },
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
      <ToastContainer />
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
