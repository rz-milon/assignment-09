import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Blog';
import Home from './Home';
import Main from './layouts/Main';
import Topic from './Topic';


const router = createBrowserRouter([
  {
    path:'/',
    element: <Main></Main>,
    children:[
      {
        path:'home',
        loader: ()=>fetch('https://openapi.programming-hero.com/api/quiz'),
        element: <Home></Home>
      },
      {
        path:'home',
        element:<Home></Home>
      },
      {
        path:'topic',
        element:<Topic></Topic>
      },
      {
        path:'blog',
        element:<Blog></Blog>
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
