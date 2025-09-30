import type { Route } from "./+types/home";
import { Link } from "react-router-dom"
import { authClient } from "../lib/auth-client"
import SignIn from "./signin"
import SignUp from "./signup"

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "JY ChatGPT" },
    { name: "description", content: "Welcome to NEW CHATBOT!" },
  ];
}

export default function Home() {
  const { data, isPending, error } = authClient.useSession()
  if (data) {
    return <h1>helloooo {data?.user.email}!</h1>
  } else {
    return <>
      <SignIn />
      <SignUp />
    </>
  }
}
