import type { Route } from "./+types/home";
<<<<<<< HEAD
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
=======
import { Link } from "react-router-dom"
import { authClient } from "../lib/auth-client"
import SignIn from "./signin"
import SignUp from "./signup"

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "JY ChatGPT" },
    { name: "description", content: "Welcome to NEW CHATBOT!" },
>>>>>>> client-server-react-router
  ];
}

export default function Home() {
<<<<<<< HEAD
  return <Welcome />;
=======
  const { data, isPending, error } = authClient.useSession()
  if (data) {
    return <h1>helloooo {data?.user.email}!</h1>
  } else {
    return <>
      <SignIn />
      <SignUp />
    </>
  }
>>>>>>> client-server-react-router
}
