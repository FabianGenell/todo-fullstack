import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Navigate, RouterProvider, } from "react-router-dom";

import './index.css'
import TaskListContainer from './components/pages/task-list/TaskList'
import { getTasks } from './service/taskService';
import Login from './components/pages/auth/Login';
import NotFound from './components/pages/errors/NotFound';

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <TaskListContainer />,
        loader: getTasks,
        errorElement: <Navigate to="/login" />
      },
      {
        path: "/login",
        element: <Login />
      }
    ]
  },


]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
