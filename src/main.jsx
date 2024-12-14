import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './pages/login.jsx'
import RegisterPage from './pages/register.jsx'
import ErrorPage from './pages/404.jsx'


const router = createBrowserRouter(
[{
path: "/",
element: <div>hello world</div>,
errorElement: <ErrorPage/>
},
{
  path: "/login",
  element: <LoginPage/>
  },
  {
    path: "/register",
    element: <RegisterPage/>
    },
]
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
)
