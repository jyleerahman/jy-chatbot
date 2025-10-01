import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
<<<<<<< HEAD
import App from './App.tsx'
=======
import App from './App'

import { createBrowserRouter } from "react-router-dom";
import Home from "app/routes/home";
import { LogIn } from "~/routes/signin";
import { SignUp } from "app/routes/signup";
import { Protected } from "app/routes/protected";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <LogIn /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/protected", element: <Protected /> },
]);

>>>>>>> client-server-react-router

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
