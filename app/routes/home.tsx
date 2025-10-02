import type { Route } from "./+types/home";
import { Link } from "react-router-dom"
import { authClient } from "../lib/auth-client"
import SignIn from "./signin"
import SignUp from "./signup"
import Chat from "./chat"

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "JY ChatGPT" },
    { name: "description", content: "Welcome to NEW CHATBOT!" },
  ];
}

export default function Home() {
  const { data, isPending, error } = authClient.useSession()
  if (data) {
    return <Chat />
  } else {
    return <>
      <div>
        <div className="bg-[#68699B] w-full h-10 p-2 text-[#FFFFFD]">· Home  · About  · Help  · Corporate Services</div>
        <div className="flex justify-center items-center">
          <img src="../app/font/fractal_logo.png" className="w-80" />
          <div className="text-[#CB0302] text-3xl font-extrabold ml-5">
            <div>Have a Question?</div>
            <div> Sign up and Ask!</div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <SignIn />
          <SignUp />
        </div>
      </div>
    </>
  }
}