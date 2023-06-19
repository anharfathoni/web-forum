import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AuthPage from './components/Layout/AuthPage';
import PrivatePage from './components/Layout/PrivatePage';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Layout from './components/Layout/Layout';
import Login from './pages/Login';
import Register from './pages/Register';
import AskQuestion from './pages/AskQuestion';
import Leaderboard from './pages/Leaderboard';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        element: <AuthPage />,
        children: [{
          path: '/login',
          element: <Login />,
        },
        {
          path: '/register',
          element: <Register />,
        }],
      },
      {
        element: <PrivatePage />,
        children: [{
          path: '/ask-question',
          element: <AskQuestion />,
        }],
      },
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/thread/:id',
        element: <Detail />,
      },
      {
        path: '/leaderboards',
        element: <Leaderboard />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
