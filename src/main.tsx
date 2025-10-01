import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

import { createBrowserRouter } from "react-router-dom";
import Home from "app/routes/home";
import SignUp from "app/routes/signup";
import SignIn from '~/routes/signin';

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/signin", element: <SignIn /> },
  { path: "/signup", element: <SignUp /> },
]);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
