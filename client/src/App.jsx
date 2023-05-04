import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Navigate, RouterProvider, } from "react-router-dom";

import './index.css'
import TaskPage from './components/pages/tasks/TaskPage'
import { getTasks } from './service/taskService';
import Login from './components/pages/auth/Login';
import Signup from './components/pages/auth/Signup';
import NotFound from './components/pages/errors/NotFound';

//https://dribbble.com/shots/15185058-Collection-Tasks
//https://dribbble.com/shots/16819021-Task-management-app-My-tasks

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <TaskPage />,
        loader: getTasks,
        errorElement: <Navigate to="/login" />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/signup",
        element: <Signup />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
